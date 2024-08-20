from django.db import models

# Student Model to represent the student table in the db, I have used Postgres for db management. 
class Student(models.Model):
    first_name = models.CharField(max_length=100)
    last_name = models.CharField(max_length=100)
    age = models.IntegerField()
    email = models.EmailField()
    enrollment_date = models.DateField()

    def __str__(self):
        return f"{self.first_name} {self.last_name}"
