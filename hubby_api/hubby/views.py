#from django.contrib.auth.models import User, Group
from hashlib import algorithms_available
from django.http import JsonResponse
from rest_framework import viewsets
from hubby import serializers
from . import models
from . import serializers
from rest_framework.response import Response
from rest_framework.exceptions import AuthenticationFailed
import jwt
import datetime


def checkUserToken(token):
    if not token:
        raise AuthenticationFailed("Utilisateur pas connecté !")

    try:
        payload = jwt.decode(token, 'secret', algorithm=['HS256'])
        return payload
    except:
        raise AuthenticationFailed("Utilisateur pas connecté !")


class InscriptionViewSet(viewsets.ViewSet):
    def create(self, request):
        serializer = serializers.UserSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save()
        return Response(serializer.data)


class ConnexionViewSet(viewsets.ViewSet):
    def create(self, request):
        email = request.data['email']
        password = request.data['password']

        user = models.User.objects.filter(email=email).first()

        if user is None:
            raise AuthenticationFailed('User not found !')

        if not user.check_password(password):
            raise AuthenticationFailed('Incorrect password !')

        payload = {
            'id': user.id,
            'exp': datetime.datetime.utcnow() + datetime.timedelta(minutes=60),
            'iat': datetime.datetime.utcnow()
        }

        token = jwt.encode(payload, 'secret',
                           algorithm='HS256').decode('utf-8')

        response = Response()
        response.data = {
            'id': user.id,
            'jwt': token
        }

        return response


class RandomViewSet(viewsets.ViewSet):
    def list(self, request):
        recette = models.Recette.objects.order_by('?').first()
        serializer = serializers.RecetteSerializer(recette)
        return Response(serializer.data)


class UserViewSet(viewsets.ModelViewSet):

    queryset = models.User.objects.all()
    serializer_class = serializers.UserSerializer

    def list(self, request):
        #token = str(request.headers.get('Authorization'))
        checkUserToken(str(request.headers.get('Authorization')))

        #user = models.User.objects.get(id=payload['id']).first
        user = models.User.objects.all()
        serializer = serializers.UserSerializer(user, many=True)
        return Response(serializer.data)


class RecetteViewSet(viewsets.ModelViewSet):
    serializer_class = serializers.RecetteSerializer
    queryset = ''

    def list(self, request):
        recette = models.Recette.objects.all()
        serializer = serializers.RecetteSerializer(recette, many=True)
        return Response(serializer.data)


class OrigineViewSet(viewsets.ModelViewSet):
    queryset = models.Origine.objects.all()
    serializer_class = serializers.OrigineSerializer


class EtapeViewSet(viewsets.ModelViewSet):
    queryset = models.Etape.objects.all()
    serializer_class = serializers.EtapeSerializer


class IngredientViewSet(viewsets.ModelViewSet):
    queryset = models.Ingredient.objects.all()
    serializer_class = serializers.IngredientSerializer
