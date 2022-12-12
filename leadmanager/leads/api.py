from leads.models import Lead
from .serializers import LeadSerializer
from rest_framework import viewsets, permissions

# Lead viewsets
class LeadViewSet(viewsets.ModelViewSet):
    queryset = Lead.objects.all()
    serializer_class = LeadSerializer
    permission_classes = [
        permissions.AllowAny
    ]