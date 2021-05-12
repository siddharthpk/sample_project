from django.shortcuts import render
from django.http import HttpResponse
from django.core import serializers
from .models import User
from rest_framework import status, generics
from rest_framework.response import Response
from rest_framework.decorators import api_view
from .serializer import UserSerializer
from django.views.decorators.csrf import csrf_exempt

# Create your views here.
def index(request):
    users = serializers.serialize("json", User.objects.all())
    return HttpResponse(users)


@csrf_exempt
@api_view(['POST'])

def addUser(request):
    print(request.data)
    if request.method == 'POST':
        serializer = UserSerializer(user, data=request.data)
        if serializer.is_valid():
            serializer.save()
            print(serializer.data)
            savedUser = User.objects.get(name=request.user.name)
            print(savedUser)
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class NewUserCreate(generics.ListCreateAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer
