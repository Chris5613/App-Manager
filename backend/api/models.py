from django.db import models


class Task(models.Model):
    name = models.CharField(max_length=25)
    due_date = models.DateField(auto_now_add=False)

    def __str__(self):
        return self.name
