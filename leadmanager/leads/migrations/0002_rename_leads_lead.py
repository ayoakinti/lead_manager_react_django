# Generated by Django 4.1.4 on 2022-12-08 22:55

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('leads', '0001_initial'),
    ]

    operations = [
        migrations.RenameModel(
            old_name='leads',
            new_name='Lead',
        ),
    ]