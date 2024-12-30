from django.urls import include, path
from rest_framework.routers import DefaultRouter

from .views import MessageViewSet, ThreadViewSet

router = DefaultRouter()
router.register(r"messages", MessageViewSet)
router.register(r"threads", ThreadViewSet)

urlpatterns = [
    path("api/", include(router.urls)),
]
