from django.db import models
from django.utils.translation import gettext_lazy as _


class Sighting(models.Model):
    class Weather(models.TextChoices):
        SUNNY = 'SUNNY', _('Sunny')
        PARTIALLY_CLOUDY = 'PARTIALLY_CLOUDY', _('Partially Cloudy')
        CLOUDY = 'CLOUDY', _('Cloudy')
        RAIN = 'RAIN', _('Rain')

    class Habitat(models.TextChoices):
        ACACIA_WOODLAND = 'ACACIA_WOODLAND', _('Acacia Woodland')
        ACACIA_MIX = 'ACACIA_MIX', _('Acacia Mix')
        PLAINS = 'PLAINS', _('Plains')
        LAKEFRONT = 'LAKEFRONT', _('Lakefront')

    datetime = models.DateTimeField()
    latitude = models.DecimalField(max_digits=7, decimal_places=5)  # longitude = -90 to 90
    longitude = models.DecimalField(max_digits=8, decimal_places=5)   # longitude = -180 to 180
    weather = models.CharField(choices=Weather.choices,
                               max_length=len(max([choice[0] for choice in Weather.choices], key=len)))
    habitat = models.CharField(choices=Habitat.choices,
                               max_length=len(max([choice[0] for choice in Habitat.choices], key=len)))


class GiraffeSighting(Sighting):
    count = models.PositiveSmallIntegerField()


class GiraffeCount(models.Model):
    class Type(models.TextChoices):
        MALES = 'MALES', _('Males')
        FEMALES = 'FEMALES', _('Females')
        JUVENILES = 'JUVENILES', _('Juveniles')
        UNIDENTIFIED = 'UNIDENTIFIED', _('Unidentified')

    sighting = models.ForeignKey(GiraffeSighting, on_delete=models.PROTECT)
    type = models.CharField(choices=Type.choices,
                            max_length=len(max([choice[0] for choice in Type.choices], key=len)))

    feeding = models.PositiveSmallIntegerField()
    standing = models.PositiveSmallIntegerField()
    walking = models.PositiveSmallIntegerField()
    lying = models.PositiveSmallIntegerField()
    fighting = models.PositiveSmallIntegerField()
    scratching = models.PositiveSmallIntegerField()
