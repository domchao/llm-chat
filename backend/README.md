# Backend Readme

This implements messaging system with threads and messages, as a Django REST Framework.

## Threads

```python
class ThreadViewSet(viewsets.ModelViewSet):
    queryset = Thread.objects.all().order_by("-last_message_at")
    serializer_class = ThreadSerializer
```

-   Inherits from ModelViewSet which provides CRUD operations automatically
-   Gets all threads ordered by most recent message
-   Uses ThreadSerializer to convert Thread models to/from JSON
-   Has a custom action messages that returns all messages in a specific thread

```python
@action(detail=True, methods=["get"])
def messages(self, request, pk=None):
    thread = self.get_object()
    messages = thread.messages.all()
    serializer = MessageSerializer(messages, many=True)
    return Response(serializer.data)
```

## Messages

```python
class MessageViewSet(viewsets.ModelViewSet):
    queryset = Message.objects.all()
    serializer_class = MessageSerializer
```

-   Also inherits from ModelViewSet
-   Handles all Message-related operations
-   Has a custom create method that:
    -   Gets the thread ID from the request
    -   Creates a user message with the provided content
    -   Automatically creates a bot response echoing the user's message
    -   Updates the thread's last_message_at timestamp
    -   Returns both messages in the response

## Requests

When you make requests:

-   GET /api/threads/ - Lists all threads
-   GET /api/threads/{id}/messages/ - Gets messages for a specific thread
-   POST /api/messages/ with data {"thread": id, "content": "message"} - Creates a new message and bot response
