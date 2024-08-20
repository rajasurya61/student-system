from rest_framework import serializers
from .models import Student

# This is a class to convert the model instances into JSON.
class StudentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Student
        fields = '__all__'
