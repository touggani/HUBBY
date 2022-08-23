from rest_framework.test import APITestCase
from django.urls import reverse


class TestSetup(APITestCase):

    def setUp(self):
        self.user_url = reverse("user")
        # self.user_url = reverse("recette")
        # self.user_url = reverse("origine")
        # self.user_url = reverse("etape")
        # self.user_url = reverse("ingredient")
        # self.user_url = reverse("random")
        # self.user_url = reverse("inscription")
        # self.user_url = reverse("connexion")

        user_data = {
            "nom": "touggani",
            "prenom": "youssef",
            "email": "youssef@email.com",
            "nom_utilisateur": "yousst",
            "password": "youssef"
        }
        return super().setUp()

    def tearDown(self):
        return super().tearDown()
