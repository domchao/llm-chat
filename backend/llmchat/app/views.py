from rest_framework import viewsets
from rest_framework.decorators import action
from rest_framework.response import Response

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

    def create(self, request):
        thread_id = request.data.get("thread")
        thread = Thread.objects.get(id=thread_id)

        # Create user message
        user_message = Message.objects.create(
            thread=thread, content=request.data["content"], is_bot=False
        )

        # Create bot response
        bot_response = Message.objects.create(
            thread=thread, content=f"You said: {request.data['content']}", is_bot=True
        )

        # Update thread's last_message_at
        thread.save()  # This triggers auto_now update

        serializer = self.get_serializer([user_message, bot_response], many=True)
        return Response(serializer.data)
