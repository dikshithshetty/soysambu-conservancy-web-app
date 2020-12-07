from django.test import TestCase
from django.contrib.auth import get_user_model


class ModelTests(TestCase):

    def test_create_user(self):
        """Test if creating a new user is successful"""
        username = 'testUsername'
        password = 'testPassword'

        user = get_user_model().objects.create_user(username=username, password=password)

        self.assertEqual(user.username, username)
        self.assertTrue(user.check_password(password))

    def test_create_user_username_none(self):
        """Test that checks if creating a user without a username asserts a ValueError"""
        with self.assertRaises(ValueError):
            get_user_model().objects.create_user(None, 'testPassword')

    def test_create_user_username_with_spaces(self):
        """Test that checks if creating a user with a username with spaces asserts a ValueError"""
        with self.assertRaises(ValueError):
            get_user_model().objects.create_user("username with spaces", 'testPassword')

    def test_create_superuser(self):
        """Test if creating a new superuser is successful"""
        user = get_user_model().objects.create_superuser("testUsername", "testPassword")

        self.assertTrue(user.is_superuser)
        self.assertTrue(user.is_admin)
