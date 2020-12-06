from django.shortcuts import render
from rest_framework import viewsets
from .serializers import GiraffeSightingSerializer
from .models import GiraffeSighting


class GiraffeSightingView(viewsets.ModelViewSet):
    serializer_class = GiraffeSightingSerializer
    queryset = GiraffeSighting.objects.all()

