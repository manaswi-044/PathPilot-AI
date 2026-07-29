from typing import Dict, Any, List
from .gemini_service import gemini_client
from .prompt_templates import SYSTEM_PROMPT, SKILL_GAP_PROMPT

class SkillGapEngine:
    """
    Analyzes current skills vs target role to identify missing competencies.
    Ranks gaps by priority and difficulty.
    """

    async def analyze_gaps(self, current_skills: List[str], target_role: str) -> Dict[str, Any]:
        """
        Identifies missing skills and provides a learning roadmap for them.
        Integration: Called by Member 5 in /api/v1/ai/skill-gap
        """
        prompt = SKILL_GAP_PROMPT.format(
            current_skills=", ".join(current_skills),
            target_role=target_role
        )

        # Gemini returns structured JSON matching the specialized skill gap contract
        response = await gemini_client.call_ai(
            prompt=prompt,
            system_instruction=SYSTEM_PROMPT
        )
        
        return response

skill_gap_engine = SkillGapEngine()