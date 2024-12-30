from django.shortcuts import render


def react_app(request, thread_id=None):
    return render(request, "index.html")
