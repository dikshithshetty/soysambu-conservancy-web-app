from django.db import models
from django.utils.translation import gettext_lazy as _
from model_utils.managers import InheritanceManager


def get_longest_choice(choices):
    return len(max([choice[0] for choice in choices], key=len))


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
    weather = models.CharField(choices=Weather.choices, max_length=get_longest_choice(Weather.choices))
    habitat = models.CharField(choices=Habitat.choices, max_length=get_longest_choice(Habitat.choices))
    # Coordinates with 5 decimal places add support for precision up to 1.1m.
    latitude = models.DecimalField(max_digits=7, decimal_places=5)  # longitude = -90 to 90
    longitude = models.DecimalField(max_digits=8, decimal_places=5)  # longitude = -180 to 180

    # Allow fetching of submodels.
    objects = InheritanceManager()

    class Meta:
        ordering = ['-datetime']


class GiraffeSighting(Sighting):
    count = models.PositiveSmallIntegerField()


class GiraffeCount(models.Model):
    class Type(models.TextChoices):
        MALES = 'MALES', _('Males')
        FEMALES = 'FEMALES', _('Females')
        JUVENILES = 'JUVENILES', _('Juveniles')
        UNIDENTIFIED = 'UNIDENTIFIED', _('Unidentified')

    class Meta:
        unique_together = [['sighting', 'type']]

    sighting = models.ForeignKey(GiraffeSighting, on_delete=models.CASCADE, related_name='counts')
    type = models.CharField(choices=Type.choices, max_length=get_longest_choice(Type.choices))

    feeding = models.PositiveSmallIntegerField(default=0)
    standing = models.PositiveSmallIntegerField(default=0)
    walking = models.PositiveSmallIntegerField(default=0)
    lying = models.PositiveSmallIntegerField(default=0)
    fighting = models.PositiveSmallIntegerField(default=0)
    scratching = models.PositiveSmallIntegerField(default=0)
