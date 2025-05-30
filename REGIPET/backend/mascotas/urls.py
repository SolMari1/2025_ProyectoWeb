from django.urls import path
from .views import listar_mascotas

urlpatterns = [
    path('mascotas/', listar_mascotas, name='listar_mascotas'),
]