from datetime import datetime

def format_datetime(dt: datetime) -> str:
    return dt.strftime("%Y-%m-%d %H:%M:%S")

def calculate_match_score(user_skills: list, required_skills: list) -> float:
    if not required_skills: return 0.0
    matches = set(user_skills) & set(required_skills)
    return (len(matches) / len(required_skills)) * 100