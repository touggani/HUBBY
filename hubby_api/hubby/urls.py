from django.urls import path, include
from . import views

urlpatterns = [
    path("list/", views.list_hubby_items),
]
