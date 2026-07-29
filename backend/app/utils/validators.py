import re

def validate_cgpa(cgpa: float):
    return 0.0 <= cgpa <= 10.0

def validate_phone(phone: str):
    return bool(re.match(r'^\+?1?\d{9,15}$', phone))