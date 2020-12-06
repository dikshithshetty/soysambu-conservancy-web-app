from rest_framework import serializers
from .models import Sighting, GiraffeSighting, GiraffeCount


class GiraffeSightingSerializer(serializers.ModelSerializer):
    class Meta:
        model = GiraffeSighting
        fields = ('id', 'datetime', 'latitude', 'longitude', 'weather', 'habitat')
