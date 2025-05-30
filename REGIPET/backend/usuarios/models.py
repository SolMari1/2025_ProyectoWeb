from django.db import models

class Usuario(models.Model):
    nombre = models.CharField(max_length=100)
    correo = models.EmailField(unique=True)
    telefono = models.CharField(max_length=20)
    usuario = models.CharField(max_length=50, unique=True)
    contraseña = models.CharField(max_length=128)
    

    def __str__(self):
        return self.usuario
