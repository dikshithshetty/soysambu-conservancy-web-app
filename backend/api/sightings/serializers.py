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

    def validate_counts(self, counts):
        types = [count.get('type') for count in counts]

        if len(counts) == 0:
            raise ValidationError("Giraffe sightings require at least 1 giraffe count.")
        if not len(set(types)) == len(types):
            raise ValidationError('Giraffe count types must be unique (i.e only a single MALES entry is allowed.')

        return counts

    def create(self, validated_data):
        counts = validated_data.pop('counts')
        giraffe_sighting = GiraffeSighting.objects.create(**validated_data)

        for count in counts:
            GiraffeCount.objects.create(sighting=giraffe_sighting, **count)

        return giraffe_sighting
