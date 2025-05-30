from django.shortcuts import render
from rest_framework import response
from rest_framework.decorators import api_view
from .models import Mascota
from .serializers import MascotaSerializer

# Create your views here.
#Vista para listar mascotas
@api_view(['GET'])
def listar_mascotas(request):
    mascotas = Mascota.objects.all()
    serializer = MascotaSerializer(mascotas, many=True)
    return response.Response(serializer.data)
