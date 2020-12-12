from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/users/', include('api.users.urls')),
    path('api/sightings/', include('api.sightings.urls'))
]