from django.test import TestCase, Client
from django.urls import reverse
from django.contrib.auth import get_user_model
from api.sightings.models import GiraffeSighting, GiraffeCount
from api.sightings.tests.test_models import GIRAFFE_SIGHTING_PAYLOAD, GIRAFFE_COUNT_PAYLOAD


class AdminTest(TestCase):

    def setUp(self):
        # Set up data to inspect in admin page.
        self.giraffe_sighting = GiraffeSighting.objects.create(**GIRAFFE_SIGHTING_PAYLOAD)
        self.giraffe_count = GiraffeCount.objects.create(sighting=self.giraffe_sighting,
                                                         **GIRAFFE_COUNT_PAYLOAD)

        # Set up admin user and client.
        self.admin_user = get_user_model().objects.create_superuser(
            username="testAdminUsername", password="testAdminPassword")

        self.client = Client()
        self.client.force_login(self.admin_user)

    def test_sightings_listed(self):
        """Test that sightings are listed on the sightings page"""
        url = reverse('admin:sightings_sighting_changelist')
        response = self.client.get(url)

        self.assertContains(response, self.giraffe_sighting.id)

    def test_giraffe_sightings_listed(self):
        """Test that giraffe sightings are listed on the giraffe sightings page"""
        url = reverse('admin:sightings_giraffesighting_changelist')
        response = self.client.get(url)

        self.assertContains(response, self.giraffe_sighting.id)

    def test_giraffe_counts_listed(self):
        """Test that giraffe counts are listed on the giraffe counts page"""
        url = reverse('admin:sightings_giraffecount_changelist')
        response = self.client.get(url)

        self.assertContains(response, self.giraffe_count.id)
