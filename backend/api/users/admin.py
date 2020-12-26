from django.contrib import admin
from django.contrib.auth.admin import UserAdmin as BaseUserAdmin
from api.users import models
from django.utils.translation import gettext as _

class UserAdmin(BaseUserAdmin):
    ordering = ['id']
    list_display = ['username',]

    fieldsets = ((None, {'fields': ('username', 'password')}),
                 (_('Permissions'), {'fields': ('is_active', 'is_staff', 'is_superuser')}),
                 (_('Dates of importance'), {'fields': ('last_login',)}))

    add_fieldsets = (
        (None, {
            'classes': ('wide',),
            'fields': ('username', 'password1', 'password2')
        }),
    )

admin.site.register(models.User, UserAdmin)
