#!/usr/bin/python3
"""
a python script that raises an error if the value is not an integer
"""


class BaseGeometry:
    """
    ...........
    """
    def area(self):
        raise Exception("area() is not implemented")

    def integer_validator(self, name, value):
        if not isinstance(value, int):
            raise TypeError("name must be an integer")
        if value <= 0:
            raise ValueError("age must be greater than 0")
        self.name = name
        self.value = value
