from django.db import models

class Mail(models.Model):
    subject = models.CharField(max_length=255)
    sender = models.EmailField()
    message = models.TextField()
    created = models.DateTimeField(auto_now_add=True) 
