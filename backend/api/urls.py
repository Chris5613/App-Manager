from django.urls import path
from . import views

urlpatterns = [
    path("tasks/", views.task_list, name="api-tasks" ),
    path("tasks/<int:id>", views.task_details, name="api-details"),
]
