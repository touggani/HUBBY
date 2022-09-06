#from django.contrib.auth.models import User, Group
from hashlib import algorithms_available
from click import echo
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

        playload = jwt.decode(request.headers.get('Authorization'), 'secret',
                              algorithm='HS256')
        user = models.User.objects.filter(id=playload["id"])
        serializer = serializers.UserSerializer(user, many=True)
        return Response(serializer.data)

        id = request.data['id']
        # return "ok"


class RecetteViewSet(viewsets.ViewSet):
    serializer_class = serializers.RecetteSerializer
    queryset = ''

    def list(self, request):
        recette = models.Recette.objects.all()
        serializer = serializers.RecetteSerializer(recette, many=True)
        return Response(serializer.data)


class OrigineViewSet(viewsets.ViewSet):
    """ queryset = models.Origine.objects.all()
    serializer_class = serializers.OrigineSerializer
 """
    serializer_class = serializers.RecetteSerializer
    queryset = ''

    def list(self, request):
        origine = models.Origine.objects.all()
        serializer = serializers.OrigineSerializer(origine, many=True)
        return Response(serializer.data)


class EtapeViewSet(viewsets.ViewSet):
    serializer_class = serializers.RecetteSerializer
    queryset = ''

    def retrieve(self, request, pk=None):
        etape = models.Etape.objects.filter(recette=pk)
        serializer = serializers.EtapeSerializer(etape, many=True)
        return Response(serializer.data)


class IngredientViewSet(viewsets.ViewSet):
    serializer_class = serializers.RecetteSerializer
    queryset = ''

    def list(self, request):
        ingredient = models.Ingredient.objects.all()
        serializer = serializers.IngredientSerializer(ingredient, many=True)
        return Response(serializer.data)


class CommentaireViewSet(viewsets.ViewSet):
    serializer_class = serializers.CommentaireSerializer
    queryset = ''

    def list(self, request):
        checkUserToken(request.headers.get('Authorization'))
        commentaire = models.Commentaire.objects.all()
        serializer = serializers.CommentaireSerializer(commentaire, many=True)
        return Response(serializer.data)

    def retrieve(self, request, pk=None):
        checkUserToken(request.headers.get('Authorization'))
        commentaire = models.Commentaire.objects.filter(recette=pk)
        serializer = serializers.CommentaireSerializer(commentaire, many=True)
        return Response(serializer.data)

    def create(self, request):
        checkUserToken(request.headers.get('Authorization'))
        serializer = serializers.CommentaireSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save()
        return Response(serializer.data)
