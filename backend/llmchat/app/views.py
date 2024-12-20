from rest_framework import viewsets
from rest_framework.response import Response

from .models import Message
from .serializers import MessageSerializer


class MessageViewSet(viewsets.ModelViewSet):
    queryset = Message.objects.all()
    serializer_class = MessageSerializer

    def create(self, request):
        user_message = Message.objects.create(
            content=request.data["content"], is_bot=False
        )

        # Simple bot response - you can replace this with more sophisticated logic
        bot_response = Message.objects.create(
            content=f"You said: {request.data['content']}", is_bot=True
        )

        serializer = self.get_serializer([user_message, bot_response], many=True)
        return Response(serializer.data)
