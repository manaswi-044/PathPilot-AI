from typing import Dict, Any, List
from .gemini_service import gemini_client
from .prompt_templates import SYSTEM_PROMPT, ADAPTIVE_PLANNER_PROMPT

class PlannerEngine:
    """
    Generates time-aware study plans.
    Adjusts workload based on exams and college schedule.
    """

    async def generate_schedule(self, roadmap_tasks: List[str], constraints: Dict[str, Any]) -> Dict[str, Any]:
        """
        Input Constraints: college_timing, travel_time, daily_free_hours, 
        upcoming_exams, assignments, hackathons.
        Integration: Called by Member 5 in /api/v1/ai/adaptive-plan
        """
        prompt = ADAPTIVE_PLANNER_PROMPT.format(
            current_task=", ".join(roadmap_tasks),
            exams=constraints.get("upcoming_exams", "None"),
            college_hours=constraints.get("college_timing", "9-5"),
            free_hours=constraints.get("daily_free_hours", 2),
            travel=constraints.get("travel_time", "0h")
        )

        response = await gemini_client.call_ai(
            prompt=prompt,
            system_instruction=SYSTEM_PROMPT
        )
        
        return response

planner_engine = PlannerEngine()