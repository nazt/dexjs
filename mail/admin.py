from django.contrib import admin
from dexjs.mail.models import Mail

class MailAdmin(admin.ModelAdmin):
    pass

admin.site.register(Mail, MailAdmin);
