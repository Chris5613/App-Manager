from rest_framework import serializers
from .models import Task


class TaskSerializers(serializers.Modelserializer):

    class Meta:
        model = Task
        fields = ["id", "name", "due_date"]
