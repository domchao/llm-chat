# from django.db import models
# import uuid

# class Thread(models.Model):
#     id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
#     title = models.CharField(max_length=200)
#     created_at = models.DateTimeField(auto_now_add=True)
#     last_message_at = models.DateTimeField(auto_now=True)

#     def __str__(self):
#         return f"Thread: {self.title}"


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

import uuid

from django.db import models


class Thread(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    title = models.CharField(max_length=200)
    created_at = models.DateTimeField(auto_now_add=True)
    last_message_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return f"Thread: {self.title}"


class Message(models.Model):
    thread = models.ForeignKey(
        Thread, related_name="messages", on_delete=models.CASCADE
    )
    content = models.TextField()
    timestamp = models.DateTimeField(auto_now_add=True)
    is_bot = models.BooleanField(default=False)

    class Meta:
        ordering = ["timestamp"]

    def __str__(self):
        return f"{'Bot' if self.is_bot else 'User'}: {self.content[:50]}"
