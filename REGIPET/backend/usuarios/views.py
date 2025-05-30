from rest_framework.response import Response
from rest_framework.decorators import api_view
from .models import Usuario
from .serializers import UsuarioSerializer

@api_view(['POST'])
def registrar_usuario(request):
    print("Datos recibidos:", request.data)
    
    serializer = UsuarioSerializer(data=request.data)
    if serializer.is_valid():
        serializer.save()
        return Response({'mensaje': 'Usuario guardado correctamente'})
    return Response(serializer.errors, status=400)

@api_view(['POST'])
def login_usuario(request):
    usuario = request.data.get('usuario')
    contrasena = request.data.get('contrasena')
    try:
        user = Usuario.objects.get(usuario=usuario, contrasena=contrasena)
        return Response({'mensaje': 'Login exitoso'})
    except Usuario.DoesNotExist:
        return Response({'mensaje': 'Credenciales incorrectas'}, status=401)
