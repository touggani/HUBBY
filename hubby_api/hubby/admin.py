from django.contrib import admin
from hubby import models

# Register your models here.
admin.site.register(models.User)
admin.site.register(models.Recette)
admin.site.register(models.Origine)
admin.site.register(models.Etape)
admin.site.register(models.Ingredient)
admin.site.register(models.Commentaire)
