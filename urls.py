from django.urls import path
from . import views

urlpatterns=[
    path("", views.index, name = "index"),
    path("login", views.loginPage, name = "loginPage"),
    path("main", views.main, name="main"),
    path("logoutUser", views.logoutUser, name="logoutUser")
]