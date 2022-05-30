from django.shortcuts import render
from django.http import HttpResponse, JsonResponse
from .models import User
from django.core import serializers

# Create your views here.
def list_hubby_items(request):
    SomeModel_json = serializers.serialize("json", User.objects.all())
    data = {"SomeModel_json": SomeModel_json}
    return JsonResponse(data)
