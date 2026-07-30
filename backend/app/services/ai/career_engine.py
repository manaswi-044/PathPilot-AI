from typing import Dict, Any
from .gemini_service import gemini_client
from .prompt_templates import SYSTEM_PROMPT, CAREER_ASSESSMENT_PROMPT, CAREER_ROADMAP_PROMPT

class CareerEngine:
    async def generate_assessment(self, profile: Dict[str, Any]) -> Dict[str, Any]:
        """Called by Member 5: POST /api/v1/assessment"""
        prompt = CAREER_ASSESSMENT_PROMPT.format(profile_json=json.dumps(profile))
        return await gemini_client.call_ai(prompt, SYSTEM_PROMPT)

    async def generate_roadmap(self, profile: Dict[str, Any]) -> Dict[str, Any]:
        """Called by Member 5: POST /api/v1/roadmap"""
        prompt = CAREER_ROADMAP_PROMPT.format(
            career_goal=profile.get("career_goal"),
            current_skills=profile.get("current_skills"),
            daily_free_hours=profile.get("daily_free_hours"),
            semester=profile.get("semester"),
            cgpa=profile.get("cgpa")
        )
        return await gemini_client.call_ai(prompt, SYSTEM_PROMPT)

career_engine = CareerEngine()