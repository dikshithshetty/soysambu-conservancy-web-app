from django.contrib import admin
from .models import Sighting, GiraffeSighting, GiraffeCount


class SightingAdmin(admin.ModelAdmin):
    list_display = ('id', 'datetime', 'latitude', 'longitude', 'weather', 'habitat')


class GiraffeSightingAdmin(admin.ModelAdmin):
    list_display = ('id', 'datetime', 'count', 'latitude', 'longitude', 'weather', 'habitat')


class GiraffeCountAdmin(admin.ModelAdmin):
    list_display = ('id', 'sighting', 'type')


# Register your models here.
admin.site.register(Sighting, SightingAdmin)
admin.site.register(GiraffeSighting, GiraffeSightingAdmin)
admin.site.register(GiraffeCount, GiraffeCountAdmin)
