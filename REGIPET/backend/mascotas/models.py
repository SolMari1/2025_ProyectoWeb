from django.db import models
from usuarios.models import Usuario


# Create your models here.
class Mascota(models.Model):
    nombre = models.CharField(max_length=100)
    especie = models.CharField(max_length=50)
    raza = models.CharField(max_length=50)
    edad = models.PositiveIntegerField()
    peso = models.FloatField()
    usuario = models.ForeignKey(Usuario, on_delete=models.CASCADE, related_name='mascotas')

    def __str__(self):
        return f"{self.nombre} ({self.especie})"