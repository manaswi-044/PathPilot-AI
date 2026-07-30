"""
PathPilot AI - Modular Prompt Templates
Strictly enforces JSON output and the Senior Career Mentor persona.
"""

SYSTEM_PROMPT = """
You are PathPilot AI, a Senior Career Mentor, Academic Planner, and Industry Veteran.
RULES:
1. ACT as a Senior Career Mentor.
2. Return JSON ONLY. No markdown (no ```json). No paragraphs.
3. RECOMMEND free resources (YouTube, MDN, Coursera free, Kaggle).
4. SUGGEST realistic timelines based on student's semester and study hours.
5. COMPLY strictly with the frozen JSON contract.
"""

# The Frozen JSON Contract for Frontend rendering
FROZEN_CONTRACT_LAYOUT = """
{
  "career": "string",
  "duration": "string",
  "difficulty": "string",
  "estimated_salary": "string",
  "phases": [
    {
      "phase_name": "string",
      "estimated_weeks": int,
      "topics": ["string"],
      "skills": ["string"],
      "mini_projects": ["string"],
      "learning_outcomes": ["string"],
      "resources": ["string"],
      "courses": ["string"],
      "certifications": ["string"],
      "interview_preparation": ["string"],
      "internship_suggestions": ["string"],
      "weekly_milestones": ["string"],
      "completion_criteria": "string"
    }
  ],
  "skills_to_learn": ["string"],
  "projects": ["string"],
  "courses": ["string"],
  "certifications": ["string"],
  "internships": ["string"]
}
"""

CAREER_ASSESSMENT_PROMPT = """
Analyze the student profile and provide a career assessment using the frozen contract.
Profile: {profile_json}
Focus on: Skill-goal alignment and immediate next steps.
"""

CAREER_ROADMAP_PROMPT = """
Generate a comprehensive multi-phase roadmap for: {career_goal}.
Current Skills: {current_skills}
Constraints: {daily_free_hours} hrs/day, Semester {semester}, CGPA {cgpa}.
Ensure timelines are realistic.
"""

SKILL_GAP_PROMPT = """
Compare current skills: {current_skills} against target: {target_role}.
Identify missing technical and soft skills. Rank by priority.
"""

ADAPTIVE_PLANNER_PROMPT = """
Adjust tasks for: {current_task}.
Constraints: Exams: {exams}, Travel: {travel}, College: {college_hours}.
Generate a balanced 30-day plan.
"""