from rest_framework.test import APITestCase
from django.urls import reverse


class TestSetup(APITestCase):

    def setUp(self):
        self.user_url = reverse("user-list")
        # self.user_url = reverse("recette")
        # self.user_url = reverse("origine")
        # self.user_url = reverse("etape")
        # self.user_url = reverse("ingredient")
        # self.user_url = reverse("random")
        self.register_url = reverse("inscription-list")
        self.login_url = reverse("connexion-list")

        self.user_data = {
            "nom": "touggani",
            "prenom": "youssef",
            "email": "youssef@email.com",
            "nom_utilisateur": "yousst",
            "password": "youssef"
        }
        return super().setUp()

    def tearDown(self):
        return super().tearDown()
