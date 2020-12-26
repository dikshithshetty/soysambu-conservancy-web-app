from rest_framework import generics, permissions
from rest_framework.pagination import PageNumberPagination
from .serializers import SightingListSerializer, GiraffeSightingSerializer
from .models import Sighting, GiraffeSighting


class ResultPaginationMixin(PageNumberPagination):
    page_size = 5
    max_page_size = 1000
    page_size_query_param = 'page_size'


class SightingSubClassMixin(object):
    def get_queryset(self):
        return Sighting.objects.select_subclasses()


class SightingList(SightingSubClassMixin, generics.ListAPIView, PageNumberPagination):
    serializer_class = SightingListSerializer
    pagination_class = ResultPaginationMixin
    # permission_classes = (permissions.IsAuthenticated,)


class GiraffeSightingList(generics.ListCreateAPIView):
    serializer_class = GiraffeSightingSerializer
    pagination_class = ResultPaginationMixin
    # permission_classes = (permissions.IsAuthenticated,)
    queryset = GiraffeSighting.objects.all()
