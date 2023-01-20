from django.db import models


class Task(models.Model):
    name = models.CharField(max_length=100)
    due_date = models.DateField(auto_now_add=False)

    class Meta:
        ordering = ["due_date"]

    def __str__(self):
        return self.name
