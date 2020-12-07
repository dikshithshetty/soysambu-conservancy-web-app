from django.test import TestCase
from datetime import datetime
from django.urls import reverse
from rest_framework import status
from rest_framework.test import APIClient
from django.contrib.auth import get_user_model


SIGHTINGS_URL = reverse('api.sightings:sightings')
GIRAFFE_SIGHTINGS_URL = reverse('api.sightings:giraffes')

GIRAFFE_COUNT_PAYLOAD = {"type": "MALES", "feeding": 2, "standing": 0, "walking": 1, "lying": 1,
                         "fighting": 0, "scratching": 0}
GIRAFFE_SIGHTING_PAYLOAD = {"datetime": datetime.now(), "weather": "SUNNY", "habitat": "ACACIA_MIX",
                            "latitude": -90, "longitude": -180, "count": 20,
                            "counts": [GIRAFFE_COUNT_PAYLOAD]}


class PublicSightingsAPITests(TestCase):

    def setUp(self):
        self.client = APIClient()

    def test_unauthorized_access_sightings(self):
        """Test that unauthorized access is denied for the sightings url"""
        response = self.client.get(SIGHTINGS_URL)
        self.assertEqual(response.status_code, status.HTTP_403_FORBIDDEN)

    def test_unauthorized_access_giraffes(self):
        """Test that unauthorized access is denied for the giraffe sightings url"""
        response = self.client.get(GIRAFFE_SIGHTINGS_URL)
        self.assertEqual(response.status_code, status.HTTP_403_FORBIDDEN)


class PrivateSightingsAPITests(TestCase):

    def setUp(self):
        self.client = APIClient()
        self.user = get_user_model().objects.create_user(username='testUsername', password='testPassword')
        self.client.force_authenticate(user=self.user)

    def test_get_sighting(self):
        """Test that a GET of sightings is successful"""
        response = self.client.get(SIGHTINGS_URL)
        self.assertEqual(response.status_code, status.HTTP_200_OK)

    def test_post_sighting_denied(self):
        """Test that a POST to the sighting url directly fails"""
        response = self.client.post(SIGHTINGS_URL, **GIRAFFE_SIGHTING_PAYLOAD)
        self.assertEqual(response.status_code, status.HTTP_405_METHOD_NOT_ALLOWED)

    def test_get_giraffe_sighting(self):
        """Test that a GET of giraffe sightings is successful"""
        response = self.client.get(GIRAFFE_SIGHTINGS_URL)
        self.assertEqual(response.status_code, status.HTTP_200_OK)

    def test_post_giraffe_sighting(self):
        """Test that a POST of giraffe sightings is successful"""
        response = self.client.post(GIRAFFE_SIGHTINGS_URL, GIRAFFE_SIGHTING_PAYLOAD, format='json')
        self.assertEqual(response.status_code, status.HTTP_201_CREATED)

    def test_post_giraffe_sighting_no_counts(self):
        """Test that a POST of giraffe sightings with no counts fails"""
        payload = GIRAFFE_SIGHTING_PAYLOAD.copy()
        payload['counts'] = []
        response = self.client.post(GIRAFFE_SIGHTINGS_URL, payload, format='json')

        self.assertEqual(response.status_code, status.HTTP_400_BAD_REQUEST)

    def test_post_giraffe_sighting_duplicate_counts(self):
        """Test that a POST of giraffe sightings with duplicate types (i.e 2x MALES) fails"""
        payload = GIRAFFE_SIGHTING_PAYLOAD.copy()
        payload['counts'].extend(payload['counts'])  # Duplicate the items in the counts list.
        response = self.client.post(GIRAFFE_SIGHTINGS_URL, payload, format='json')

        self.assertEqual(response.status_code, status.HTTP_400_BAD_REQUEST)
