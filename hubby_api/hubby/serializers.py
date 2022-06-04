from dataclasses import field
from . import models
from rest_framework import serializers


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.User
        fields = ['nom', 'prenom', 'email', 'nom_utilisateur', 'password']
        #fields = ['__all__']
        extra_kwargs = {
            'password': {'write_only': True}
        }

    def create(self, validated_data):
        password = validated_data.pop('password', None)
        instance = self.Meta.model(**validated_data)
        if password is not None:
            instance.set_password(password)
        instance.save()
        return instance


class RecetteSerializer(serializers.ModelSerializer):

    class Meta:
        model = models.Recette
        fields = ['nom', 'description', 'duree', 'origine']
        #fields = '__all__'

    def to_representation(self, instance):
        rep = super().to_representation(instance)
        rep["Ingredient"] = IngredientSerializer(
            instance.ingredient.only('nom'), many=True).data
        return rep


class OrigineSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.Origine
        #fields = ['pays']
        fields = '__all__'


class EtapeSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.Etape
        fields = '__all__'


class IngredientSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.Ingredient
        fields = '__all__'
