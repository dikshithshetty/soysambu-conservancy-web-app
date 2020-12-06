from django.contrib import admin
from django.urls import path, include
from rest_framework import routers
from sightings import views

router = routers.DefaultRouter()
router.register(r'sightings/giraffe', views.GiraffeSightingView, '')

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include(router.urls))
]
