from django.db.models.query import QuerySet
from pydantic import BaseModel
from rest_framework import viewsets
from rest_framework.decorators import action
from rest_framework.response import Response
from utils import openai_llm_call

from .models import Message, Thread
from .serializers import MessageSerializer, ThreadSerializer


class ThreadViewSet(viewsets.ModelViewSet):
    queryset = Thread.objects.all().order_by("-last_message_at")
    serializer_class = ThreadSerializer

    @action(detail=True, methods=["get"])
    def messages(self, request, pk=None):
        thread = self.get_object()
        messages = thread.messages.all()
        serializer = MessageSerializer(messages, many=True)
        return Response(serializer.data)


class MessageViewSet(viewsets.ModelViewSet):
    queryset = Message.objects.all()
    serializer_class = MessageSerializer

    @staticmethod
    def _parse_message_queryset(queryset: QuerySet) -> list:
        # Define here as only used in this file
        class QuerysetMessage(BaseModel):
            content: str
            is_bot: bool
            message_index: int

        queryset_messages = [QuerysetMessage(**message) for message in queryset]
        # Convert queryset messages to list of dictionaries to pass to OpenAI
        messages = [
            {
                "role": "user" if not message.is_bot else "assistant",
                "content": message.content,
            }
            for message in queryset_messages
        ]
        # Only send last N messages
        return messages[-5:]

    def create(self, request):
        thread_id = request.data.get("thread")
        thread = Thread.objects.get(id=thread_id)

        # Create user message
        user_message = Message.objects.create(
            thread=thread, content=request.data["content"], is_bot=False
        )

        # Retrieve all messages in the thread
        messages_queryset = (
            Message.objects.filter(thread=thread)
            .values("content", "is_bot", "message_index")
            .order_by("message_index")
        )

        messages = self._parse_message_queryset(messages_queryset)

        # Call OpenAI API
        response = openai_llm_call(messages)

        # Create bot response in the thread
        bot_response = Message.objects.create(
            thread=thread, content=response, is_bot=True
        )

        # Update thread's last_message_at
        thread.save()  # This triggers auto_now update

        serializer = self.get_serializer([user_message, bot_response], many=True)
        return Response(serializer.data)
