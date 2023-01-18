from .models import Task
from .serializers import TaskSerializers
from django.http import JsonResponse
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status



@api_view(['GET','POST'])
def task_list(request):

    if request.method == 'GET':
        tasks = Task.objects.all()
        serializer = TaskSerializers(tasks, many=True)
        return Response(serializer.data)
    elif request.method == 'POST':
        serializer = TaskSerializers(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


@api_view(['GET','DELETE'])
def task_details(request,id):

    try:
        tasks = Task.objects.get(id=id)
    except Task.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)


    if request.method == "GET":
        serializer = TaskSerializers(tasks)
        return Response(serializer.data)
    elif request.method == "DELETE":
        tasks.delete()
        return JsonResponse(status=status.HTTP_200_OK)
