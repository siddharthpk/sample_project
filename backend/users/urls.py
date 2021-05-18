from django.urls import path

from . import views

urlpatterns = [
    path("", views.index, name="index"),
    path("", views.addUser, name="add"),
    path("add/", views.NewUserCreate.as_view(), name="new")
]
