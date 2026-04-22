import os

import anthropic
from dotenv import load_dotenv
from openai import OpenAI

load_dotenv()


def openai_llm_call(message_list):
    """
    Message list formatted as [{"role": "user" or "assistant", "content": "message"}]
    """
    MODEL = "gpt-4o-mini"

    client = OpenAI(api_key=os.environ.get("OPENAI_API_KEY"))

    completion = client.chat.completions.create(
        model=MODEL,
        messages=message_list,
    )
    return completion.choices[0].message.content


def anthropic_llm_call(message_list, system_message=None):
    """
    Message list formatted as [{"role": "user" or "assistant", "content": "message"}]
    """
    MODEL = "claude-haiku-4-5-20251001"

    client = anthropic.Anthropic(
        # defaults to os.environ.get("ANTHROPIC_API_KEY")
    )

    message = client.messages.create(
        model=MODEL,
        messages=message_list,
        max_tokens=2048,
        system=system_message if system_message else None,
    )
    return message.content[0].text
