from django.shortcuts import render_to_response, redirect
from django.http import HttpResponse
from django.core import serializers
import json
from dexjs.mail.models import Mail

def sendmail(request):
    _subject = request.POST.get('subject')
    _sender = request.POST.get('sender')
    _msg = request.POST.get('msg')
    
    m = Mail(subject=_subject, sender=_sender, message=_msg)
    m.save()
    print request.POST

    ret = {'success': True, 'msg': 'Yes'}
    return HttpResponse(json.dumps(ret));

