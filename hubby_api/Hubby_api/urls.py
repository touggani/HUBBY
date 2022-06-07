from django.urls import include, path
from django.contrib import admin
from .router import router


urlpatterns = [
    path('', include(router.urls)),
    path('admin/', admin.site.urls),
    #path('api/', include('rest_framework.urls', namespace='rest_framework'))
]
