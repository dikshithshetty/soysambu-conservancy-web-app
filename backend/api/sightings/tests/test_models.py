from django.db import IntegrityError
from django.test import TestCase
from datetime import datetime
from api.sightings.models import GiraffeSighting, GiraffeCount


GIRAFFE_SIGHTING_PAYLOAD = {"datetime": "2020-12-07T20:11:53Z", "weather": "Sunny", "habitat": "Acacia Woodland",
                            "latitude": -90, "longitude": -180, "count": 20}
GIRAFFE_COUNT_PAYLOAD = {"type": "Males", "feeding": 2, "standing": 0, "walking": 1, "lying": 1,
                         "fighting": 0, "scratching": 0}


class GiraffeSightingTest(TestCase):

    def setUp(self):
        self.payload = GIRAFFE_SIGHTING_PAYLOAD

    def test_create_giraffe_sighting(self):
        """Test if creating a new giraffe sighting is successful"""
        sighting = GiraffeSighting.objects.create(**self.payload)
        sighting_dict = {"datetime": sighting.datetime, "weather": sighting.weather,
                         "habitat": sighting.habitat, "latitude": sighting.latitude,
                         "longitude": sighting.longitude, "count": sighting.count}

        self.assertDictEqual(sighting_dict, self.payload)


class GiraffeCountTest(TestCase):

    def setUp(self):
        self.sighting = GiraffeSighting.objects.create(**GIRAFFE_SIGHTING_PAYLOAD)
        self.payload = GIRAFFE_COUNT_PAYLOAD

    def test_create_giraffe_count(self):
        """Test if creating a new giraffe count is successful"""
        count = GiraffeCount.objects.create(sighting=self.sighting, **self.payload)
        count_dict = {"type": count.type, "feeding": count.feeding, "standing": count.standing,
                      "walking": count.walking, "lying": count.lying, "fighting": count.fighting,
                      "scratching": count.scratching}

        self.assertDictEqual(count_dict, self.payload)

    def test_giraffe_count_unique(self):
        """Test if creating giraffe count with a sighting / pair that already exists fails"""
        with self.assertRaises(IntegrityError):
            count = GiraffeCount.objects.create(sighting=self.sighting, **self.payload)
            count_duplicate = GiraffeCount.objects.create(sighting=self.sighting, **self.payload)
