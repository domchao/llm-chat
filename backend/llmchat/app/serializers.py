from rest_framework import serializers

from .models import Message, Thread


class MessageSerializer(serializers.ModelSerializer):
    class Meta:
        model = Message
        fields = ["id", "content", "timestamp", "is_bot", "thread"]


class ThreadSerializer(serializers.ModelSerializer):
    last_message = serializers.SerializerMethodField()

    class Meta:
        model = Thread
        fields = ["id", "title", "created_at", "last_message_at", "last_message"]

    def get_last_message(self, obj):
        last_message = obj.messages.last()
        return MessageSerializer(last_message).data if last_message else None
