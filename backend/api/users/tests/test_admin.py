from django.test import TestCase, Client
from django.contrib.auth import get_user_model
from django.urls import reverse


class AdminPageTests(TestCase):
    def setUp(self):
        self.client = Client()

        self.admin_user = get_user_model().objects.create_superuser(
             username="testAdminUsername", password="testAdminPassword")
        self.client.force_login(self.admin_user)

        self.user = get_user_model().objects.create_user(
             username="testUsername", password="testPassword")

    def test_users_listed(self):
        """Test that users are listed on user page"""
        url = reverse('admin:core_user_changelist')
        response = self.client.get(url)

        # Checks that the content of the url contains the user's username.
        self.assertContains(response, self.user.username)

    def test_user_change_page(self):
        """Test that the user edit page works"""
        # /admin/core/user/1
        url = reverse('admin:core_user_change', args=[self.user.id])
        response = self.client.get(url)

        # 200 is the code given when all is OK.
        self.assertEqual(response.status_code, 200)

    def test_create_user_page(self):
        """Test that the create user page works"""
        url = reverse('admin:core_user_add')
        response = self.client.get(url)

        self.assertEqual(response.status_code, 200)