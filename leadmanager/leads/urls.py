from django.urls import path
from .api import LeadViewSet
from rest_framework import routers

router = routers.DefaultRouter()
router.register(r'api/leads', LeadViewSet, basename='leads')

urlpatterns = router.urls