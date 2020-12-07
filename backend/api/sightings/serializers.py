from rest_framework import serializers
from rest_framework.exceptions import ValidationError
from .models import Sighting, GiraffeSighting, GiraffeCount


class SightingSerializer(serializers.ModelSerializer):
    class Meta:
        model = Sighting
        fields = ('id', 'datetime', 'latitude', 'longitude', 'weather', 'habitat')


class GiraffeCountSerializer(serializers.ModelSerializer):
    class Meta:
        model = GiraffeCount
        fields = ('type', 'feeding', 'standing', 'walking', 'lying', 'fighting', 'scratching')


class GiraffeSightingSerializer(serializers.ModelSerializer):
    counts = GiraffeCountSerializer(many=True)

    class Meta:
        model = GiraffeSighting
        fields = ('id', 'datetime', 'latitude', 'longitude', 'weather', 'habitat', 'count', 'counts')

    def create(self, validated_data):
        counts_data = validated_data.pop('counts')

        if len(counts_data) == 0:
            raise ValidationError('Giraffe sightings require at least 1 giraffe count.')

        giraffe_sighting = GiraffeSighting.objects.create(**validated_data)
        for count in counts_data:
            GiraffeCount.objects.create(sighting=giraffe_sighting, **count)
        return giraffe_sighting
