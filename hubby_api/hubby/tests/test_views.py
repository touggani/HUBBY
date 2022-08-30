from turtle import pd
from black import json
from .test_setup import TestSetup


class TestViews(TestSetup):

    def test_user_can_get_own_user_informations(self):
        res = self.client.post(self.user_url)
        self.assertEqual(res.status_code, 400)

    def test_user_can_register(self):
        res = self.client.post(
            self.register_url,
            self.user_data,
            format="json")
        #import pdb
        # pdb.set_trace()
        self.assertEqual(res.data["email"], self.user_data["email"])
        self.assertEqual(res.data["nom_utilisateur"],
                         self.user_data["nom_utilisateur"])
        self.assertEqual(res.status_code, 200)

    def test_user_cannot_register_without_data(self):
        res = self.client.post(
            self.register_url,
            format="json")
        #import pdb
        # pdb.set_trace()
        self.assertEqual(res.status_code, 400)

    def test_user_cannot_register_without_email(self):
        res = self.client.post(
            self.register_url,
            {
                "nom": "touggani",
                "prenom": "youssef",
                "nom_utilisateur": "yousst",
                "password": "youssef"
            },
            format="json")
        #import pdb
        # pdb.set_trace()
        self.assertEqual(res.status_code, 400)

    def test_user_cannot_register_without_password(self):
        res = self.client.post(
            self.register_url,
            {
                "nom": "touggani",
                "prenom": "youssef",
                "email": "youssef@email.com",
                "nom_utilisateur": "yousst",
            },
            format="json")
        #import pdb
        # pdb.set_trace()
        self.assertEqual(res.status_code, 400)

    def test_user_cannot_register_without_username(self):
        res = self.client.post(
            self.register_url,
            {
                "nom": "touggani",
                "prenom": "youssef",
                "email": "youssef@email.com",
                "password": "youssef"
            },
            format="json")
        #import pdb
        # pdb.set_trace()
        self.assertEqual(res.status_code, 400)

    def test_user_cannot_register_with_existing_email(self):
        self.client.post(self.register_url, self.user_data, format="json")
        res = self.client.post(
            self.register_url,
            self.user_data,
            format="json")
        #import pdb
        # pdb.set_trace()
        self.assertEqual(res.status_code, 400)

    def test_user_can_login_with_data(self):
        self.client.post(self.register_url, self.user_data, format="json")
        res = self.client.post(
            self.login_url,
            self.user_data,
            format="json")
        #import pdb
        # pdb.set_trace()
        self.assertEqual(res.status_code, 200)

    def test_user_cannot_login_without_data(self):
        self.client.post(self.register_url, self.user_data, format="json")
        res = self.client.post(
            self.login_url,
            {
                "email": "",
                "password": ""
            },
            format="json")
        #import pdb
        # pdb.set_trace()
        self.assertEqual(res.status_code, 403)

    def test_user_cannot_login_without_data(self):
        self.client.post(self.register_url, self.user_data, format="json")
        res = self.client.post(
            self.login_url,
            {
                "email": "youssef@email.com",
                "password": "youssef"
            },
            format="json")
        #import pdb
        # pdb.set_trace()
        self.assertEqual(res.status_code, 200)
