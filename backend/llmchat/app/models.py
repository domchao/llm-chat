import uuid

from django.db import models
from django.db.models import Max


class Thread(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    title = models.CharField(max_length=200)
    created_at = models.DateTimeField(auto_now_add=True)
    last_message_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return f"Thread: {self.title}"


# class Message(models.Model):
#     thread = models.ForeignKey(
#         Thread, related_name="messages", on_delete=models.CASCADE
#     )
#     content = models.TextField()
#     timestamp = models.DateTimeField(auto_now_add=True)
#     is_bot = models.BooleanField(default=False)

#     class Meta:
#         ordering = ["timestamp"]

#     def __str__(self):
#         return f"{'Bot' if self.is_bot else 'User'}: {self.content[:50]}"


class Message(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    thread = models.ForeignKey(
        Thread, related_name="messages", on_delete=models.CASCADE
    )
    content = models.TextField()
    timestamp = models.DateTimeField(auto_now_add=True)
    is_bot = models.BooleanField(default=False)
    message_index = models.PositiveIntegerField(editable=False)

    class Meta:
        ordering = ["timestamp"]
        unique_together = [["thread", "message_index"]]

    def save(self, *args, **kwargs):
        if not self.message_index:
            # Get the maximum index for this thread
            max_index = Message.objects.filter(thread=self.thread).aggregate(
                Max("message_index")
            )["message_index__max"]
            # Set the new index to max + 1 (or 1 if no messages exist)
            self.message_index = (max_index or 0) + 1
        super().save(*args, **kwargs)

    def __str__(self):
        return f"{'Bot' if self.is_bot else 'User'} #{self.message_index}: {self.content[:50]}"
