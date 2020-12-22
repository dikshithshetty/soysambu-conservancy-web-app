from rest_framework import generics, permissions
from .serializers import SightingListSerializer, GiraffeSightingSerializer
from .models import Sighting, GiraffeSighting


class SightingSubClassMixin(object):
    def get_queryset(self):
        return Sighting.objects.select_subclasses()


class SightingList(SightingSubClassMixin, generics.ListAPIView):
    serializer_class = SightingListSerializer
    # permission_classes = (permissions.IsAuthenticated,)


class GiraffeSightingList(generics.ListCreateAPIView):
    serializer_class = GiraffeSightingSerializer
    # permission_classes = (permissions.IsAuthenticated,)
    queryset = GiraffeSighting.objects.all()
