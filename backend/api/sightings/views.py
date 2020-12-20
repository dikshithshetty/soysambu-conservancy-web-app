from rest_framework import generics, permissions
from .serializers import SightingSerializer, GiraffeSightingSerializer
from .models import Sighting, GiraffeSighting


class SightingList(generics.ListAPIView):
    serializer_class = SightingSerializer
    # permission_classes = (permissions.IsAuthenticated,)
    queryset = Sighting.objects.all()


class GiraffeSightingList(generics.ListCreateAPIView):
    serializer_class = GiraffeSightingSerializer
    # permission_classes = (permissions.IsAuthenticated,)
    queryset = GiraffeSighting.objects.all()
