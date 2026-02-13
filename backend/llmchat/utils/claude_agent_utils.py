"""
Claude Agent SDK wrapper for synchronous chat functionality.

This module provides a simple synchronous interface to the Claude Agent SDK,
configured for basic chat without tools. The infrastructure is ready for
future enhancements (tool calling, subagents, etc.).
"""

import asyncio
from typing import Dict, List, Optional

from claude_agent_sdk import ClaudeAgentOptions, query
from claude_agent_sdk.types import AssistantMessage, ResultMessage, TextBlock


def claude_agent_chat(
    messages: List[Dict[str, str]], system_prompt: Optional[str] = None
) -> str:
    """
    Synchronous chat using Claude Agent SDK.

    Args:
        messages: List of {"role": "user"|"assistant", "content": "..."} messages
        system_prompt: System prompt for agent behavior (e.g., artifacts instructions)

    Returns:
        Complete response text from Claude

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


async def _async_chat(prompt: str, system_prompt: str) -> str:
    """
    Async implementation using Claude Agent SDK.

    Configures the agent for basic chat:
    - No tools (for now - easily extensible later)
    - Single turn (synchronous request-response)
    - Bypass permissions (no approvals needed)
    """
    options = ClaudeAgentOptions(
        model="sonnet",  # Use short name for Claude Code CLI
        system_prompt=system_prompt,
        allowed_tools=[],  # No tools in initial implementation
        max_turns=1,  # Single turn for synchronous chat
        permission_mode="bypassPermissions",  # No approval prompts
    )

    response_text = ""

    try:
        async for message in query(prompt=prompt, options=options):
            # Collect text blocks from assistant messages
            if isinstance(message, AssistantMessage):
                for block in message.content:
                    if isinstance(block, TextBlock):
                        response_text += block.text

            # Check for errors
            elif isinstance(message, ResultMessage):
                if message.is_error:
                    raise Exception(f"Agent error: {message.result}")

    except Exception as e:
        raise Exception(f"Claude Agent SDK call failed: {str(e)}")

    return response_text
