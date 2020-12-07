from django.urls import path
from api.sightings import views

app_name = 'api.sightings'

urlpatterns = [
    path('', views.SightingList.as_view(), name='sightings'),
    path('giraffes/', views.GiraffeSightingList.as_view(), name='giraffes'),
]
