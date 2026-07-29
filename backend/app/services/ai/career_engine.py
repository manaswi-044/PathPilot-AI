from typing import Dict, Any
from .gemini_service import gemini_client
from .prompt_templates import SYSTEM_PROMPT, CAREER_ROADMAP_PROMPT

class CareerEngine:
    """
    Career Roadmap Engine
    Generates personalized learning paths based on student profile and constraints.
    """

    async def generate_roadmap(self, student_profile: Dict[str, Any]) -> Dict[str, Any]:
        """
        Creates a Career Roadmap.
        Integration: Called by FastAPI /api/v1/ai/generate-roadmap
        """
        # Inject profile data into the modular template
        prompt = CAREER_ROADMAP_PROMPT.format(
            career_goal=student_profile.get("career_goal", "Software Engineer"),
            current_skills=", ".join(student_profile.get("current_skills", [])),
            branch=student_profile.get("branch", "N/A"),
            semester=student_profile.get("semester", 1),
            cgpa=student_profile.get("cgpa", 0.0),
            daily_free_hours=student_profile.get("daily_free_hours", 2),
            travel_time=student_profile.get("travel_time", "0h"),
            college_timing=student_profile.get("college_timing", "9-5")
        )

        # Call Gemini Service
        response = await gemini_client.call_ai(
            prompt=prompt,
            system_instruction=SYSTEM_PROMPT
        )

        # Validation logic (from json_validator.py) would happen here before returning
        return response

career_engine = CareerEngine()