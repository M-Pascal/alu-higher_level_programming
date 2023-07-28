#!/usr/bin/python3
"""
a class BaseGeometry
"""


class BaseGeometry:
    """
    a class BaseGeometry
    """
    def area(self):
        """
        to cal the area
        """
        raise Exception("area() is not implemented")

    def integer_validator(self, name, value):
        """
        verifying the value
        """
        if type(value) != int:
            raise TypeError(f"{name} must be an integer")
        if value <= 0:
            raise ValueError(f"{name} must be greater than 0")
