from rest_framework import generics
from .models import Student
from .serializers import StudentSerializer

# API logic part. 
class StudentListCreate(generics.ListCreateAPIView):
    queryset = Student.objects.all()    # Handling GET requests
    serializer_class = StudentSerializer # Handling POST requests


