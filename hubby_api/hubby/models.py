from enum import unique
from operator import mod
from statistics import mode
from django.db import models
from django.contrib.auth.models import AbstractBaseUser

# Create your models here.


class User(AbstractBaseUser):
    username = None
    email = models.EmailField(unique=True)
    nom = models.TextField()
    prenom = models.TextField()
    nom_utilisateur = models.TextField()
    premium = models.BooleanField(default=False)

    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = []

    def __str__(self):
        return self.nom+" "+self.prenom


class Origine(models.Model):
    pays = models.TextField(max_length=30, default='null', unique=True)
    initial = models.TextField(max_length=4, default='null', unique=True)

    def __str__(self):
        return self.pays+" / "+self.initial


class Ingredient(models.Model):
    nom = models.TextField(max_length=30, blank=True, unique=True)

    def __str__(self):
        return self.nom


class Recette(models.Model):
    nom = models.TextField(max_length=30, default='nom', unique=True)
    description = models.TextField(max_length=255, blank=True)
    duree = models.TextField(max_length=30, blank=True)
    origine = models.ForeignKey(Origine, on_delete=models.CASCADE)
    ingredient = models.ManyToManyField(Ingredient)

    def __str__(self):
        return self.nom


class Etape(models.Model):
    recette = models.ForeignKey(Recette, on_delete=models.CASCADE)
    description = models.TextField(max_length=255, blank=True)
    position = models.IntegerField()

    def __str__(self):
        return self.recette.nom+" / Etape: "+str(self.position)
