from unicodedata import name
from hubby import views
from rest_framework import routers


router = routers.DefaultRouter()

router.register('users', views.UserViewSet, basename='user')
router.register('recettes', views.RecetteViewSet, basename='recette')
router.register('origines', views.OrigineViewSet, basename='origine')
router.register('etapes', views.EtapeViewSet, basename='etape')
router.register('ingredients', views.IngredientViewSet, basename='ingredient')

router.register('inscription', views.InscriptionViewSet,
                basename='inscription')
router.register('connexion', views.ConnexionViewSet,
                basename='connexion')
router.register('random', views.RandomViewSet, basename='random')
router.register('commentaire', views.CommentaireViewSet,
                basename='commentaire')
