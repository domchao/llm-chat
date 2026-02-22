"""
Claude Agent SDK wrapper for synchronous chat functionality.

This module provides a simple synchronous interface to the Claude Agent SDK,
configured for basic chat without tools. The infrastructure is ready for
future enhancements (tool calling, subagents, etc.).
"""

import asyncio
import logging
from typing import Dict, List, Optional

from claude_agent_sdk import ClaudeAgentOptions, query
from claude_agent_sdk.types import (
    AssistantMessage,
    ResultMessage,
    TextBlock,
    ToolResultBlock,
    ToolUseBlock,
    UserMessage,
)

logger = logging.getLogger(__name__)


def claude_agent_chat(
    messages: List[Dict[str, str]], system_prompt: Optional[str] = None
) -> dict:
    """
    Synchronous chat using Claude Agent SDK.

    Args:
        messages: List of {"role": "user"|"assistant", "content": "..."} messages
        system_prompt: System prompt for agent behavior (e.g., artifacts instructions)

    Returns:
        Dictionary with:
            - text: Complete response text from Claude
            - tool_calls: List of tool call metadata (id, name, input, result, is_error)

    Raises:
        Exception: If the agent call fails
    """
    if not messages:
        raise ValueError("Messages list cannot be empty")

    # Validate last message is from user
    last_message = messages[-1]
    if last_message["role"] != "user":
        raise ValueError("Last message must be from user")

    # Extract user prompt (last message)
    user_prompt = last_message["content"]

    # Build conversation context from previous messages
    # Include in system prompt for now (Agent SDK doesn't have built-in multi-turn without tools)
    conversation_context = ""
    if len(messages) > 1:
        conversation_context = "\n\nPrevious conversation:\n"
        for msg in messages[:-1]:
            role = "User" if msg["role"] == "user" else "Assistant"
            conversation_context += f"{role}: {msg['content']}\n\n"

    # Combine system prompt with conversation context
    full_system_prompt = (system_prompt or "") + conversation_context

    # Run async query synchronously
    return asyncio.run(_async_chat(user_prompt, full_system_prompt))


async def _async_chat(prompt: str, system_prompt: str) -> dict:
    """
    Async implementation using Claude Agent SDK.

    Configures the agent with tool support:
    - WebSearch and WebFetch tools enabled
    - Skill tool enabled for Agent Skills
    - Multi-turn for automatic tool execution
    - Bypass permissions (no approvals needed)

    Returns:
        Dictionary with 'text' and 'tool_calls' keys
    """
    import os

    # Get backend directory for Skills location
    # In Docker: /app/ (with skills at /app/.claude/skills/)
    # In local dev: /Users/.../backend/llmchat/ (with skills at /Users/.../backend/.claude/skills/)
    current_dir = os.path.dirname(os.path.abspath(__file__))

    # Check if we're in Docker (file is at /app/utils/)
    # or local dev (file is in backend/llmchat/utils/)
    if "/app" in current_dir and current_dir.startswith("/app"):
        # Docker: use /app as cwd
        backend_dir = "/app"
    else:
        # Local dev: navigate to backend directory (parent of llmchat)
        # From backend/llmchat/utils -> backend
        backend_dir = os.path.dirname(os.path.dirname(current_dir))

    options = ClaudeAgentOptions(
        model="haiku",  # Use short name for Claude Code CLI
        system_prompt=system_prompt,
        cwd=backend_dir,  # Enable project Skills from .claude/skills/
        setting_sources=["project"],  # Load Skills from project directory
        allowed_tools=["WebSearch", "WebFetch", "Skill"],  # Enable web tools and Skills
        max_turns=10,  # Allow multi-turn for automatic tool execution
        permission_mode="bypassPermissions",  # No approval prompts
    )

    response_text = ""
    tool_use_map = {}  # Map tool_use_id to tool data

    try:
        async for message in query(prompt=prompt, options=options):
            # Collect text blocks and tool calls from assistant messages
            if isinstance(message, AssistantMessage):
                for block in message.content:
                    if isinstance(block, TextBlock):
                        response_text += block.text
                    elif isinstance(block, ToolUseBlock):
                        # Track tool use
                        tool_use_map[block.id] = {
                            "id": block.id,
                            "name": block.name,
                            "input": block.input,
                            "result": None,
                            "is_error": False,
                        }
                    elif isinstance(block, ToolResultBlock):
                        # Link result to tool use (unlikely to happen in auto mode)
                        if block.tool_use_id in tool_use_map:
                            tool_use_map[block.tool_use_id]["result"] = block.content
                            tool_use_map[block.tool_use_id]["is_error"] = block.is_error

            # UserMessage contains tool results in auto mode
            elif isinstance(message, UserMessage):
                # Tool results are sent back to Claude as UserMessage
                # Check if content is a list of blocks or a string
                if isinstance(message.content, list):
                    for block in message.content:
                        if isinstance(block, ToolResultBlock):
                            # Link result to the corresponding tool use
                            if block.tool_use_id in tool_use_map:
                                tool_use_map[block.tool_use_id][
                                    "result"
                                ] = block.content
                                tool_use_map[block.tool_use_id][
                                    "is_error"
                                ] = block.is_error

            # Check for errors
            elif isinstance(message, ResultMessage):
                if message.is_error:
                    raise Exception(f"Agent error: {message.result}")

    except Exception as e:
        raise Exception(f"Claude Agent SDK call failed: {str(e)}")

    # Convert tool map to list
    tool_calls = list(tool_use_map.values())

    return {
        "text": response_text,
        "tool_calls": tool_calls,
    }
