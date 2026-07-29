from typing import Dict, Any
from .gemini_service import gemini_client
from .prompt_templates import SYSTEM_PROMPT, CAREER_EXPLORER_PROMPT

class CareerExplorerEngine:
    """
    Provides detailed research and growth projections for specific careers.
    Used for the Career Discovery section of the UI.
    """

    async def explore_career(self, career_name: str, student_profile: Dict[str, Any]) -> Dict[str, Any]:
        """
        Analyzes a career's future scope, salary, and fit for the student.
        Integration: Called by Member 4/5 in /api/v1/ai/explore-career
        """
        prompt = CAREER_EXPLORER_PROMPT.format(
            career_name=career_name,
            branch=student_profile.get("branch", "Engineering"),
            semester=student_profile.get("semester", 1)
        )

        response = await gemini_client.call_ai(
            prompt=prompt,
            system_instruction=SYSTEM_PROMPT
        )
        
        return response

career_explorer_engine = CareerExplorerEngine()