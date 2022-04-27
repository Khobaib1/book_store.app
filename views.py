from lzma import FORMAT_ALONE
from pyexpat.errors import messages
import re
from wsgiref.util import request_uri
from django import http
from django.shortcuts import render, redirect, HttpResponse
from django.contrib.auth.forms import UserCreationForm
from django.contrib.auth import login, logout, authenticate
from django.views.decorators.csrf import csrf_protect
from django.contrib.auth.decorators import login_required
# Create your views here.
def index(request):
    form = UserCreationForm
    if request.method == 'POST':
        form = UserCreationForm(request.POST)
        if form.is_valid():
            form.save()
            return redirect ('loginPage')
            
    context = {}
    return render(request, 'book_app/register.html',{"form": form} )


# @csrf_protect

def loginPage (request):
    if request.method == 'POST':
        username = request.POST.get('username')
        password = request.POST.get('password')

        user = authenticate(request, username = username , password = password)

        if user is not None:
            login(request, user)
            return redirect('main')
        else:
            
            return HttpResponse('Username or Password is wrong')
    context = {}
    return render(request, "book_app/login.html", context)


@login_required(login_url='loginPage')
def main (request):
    return render(request, "book_app/index.html")

def logoutUser(request):
    logout(request)
    return redirect('loginPage')