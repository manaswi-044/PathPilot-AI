// Shared frontend types.
//
// Several existing components already import from '../../types' (planner,
// roadmap, dashboard) but no such module existed yet — this file fills that
// gap using the exact shapes those components already expect, inferred from
// how each field is used (see PlannerCalendar, WelcomeBanner, RoadmapHeader,
// PhaseCard, SkillCard, UpcomingEvents, RecentSuggestions, etc).

// ---------- Student profile ----------
export interface StudentProfile {
  fullName: string;
  avatarUrl: string;
  college: string;
  branch: string;
  semester: number;
  cgpa: number;
  careerGoal: string;
  studyHoursPerDay: number;
  skills: string[];
}

// ---------- Planner ----------
export type TaskCategory = 'Academic' | 'Roadmap' | 'Personal';
export type TaskPriority = 'High' | 'Medium' | 'Low';

export interface StudyTask {
  id: string;
  title: string;
  category: TaskCategory;
  durationMinutes: number;
  completed: boolean;
  priority: TaskPriority;
  timeSlot: string;
}

export interface PlannerDaySchedule {
  date: string;
  dayName: string;
  isExamNearby: boolean;
  totalHours: number;
  tasks: StudyTask[];
}

// ---------- Academic events (exams, deadlines, hackathons, etc.) ----------
export type AcademicEventType = 'Exam' | 'Lab Record' | 'Hackathon' | 'Assignment' | 'Holiday';
export type AcademicEventUrgency = 'high' | 'medium' | 'low';

export interface AcademicEvent {
  id: string;
  title: string;
  subject: string;
  type: AcademicEventType;
  daysRemaining: number;
  urgency: AcademicEventUrgency;
}

// ---------- Career roadmap ----------
export interface RoadmapResource {
  title: string;
  url: string;
}

export interface RoadmapSkill {
  id: string;
  name: string;
  completed: boolean;
  estimatedHours: number;
  whyLearn: string;
  miniProject: string;
  commonMistakes: string;
  freeResources: RoadmapResource[];
  interviewQuestions: string[];
}

export interface RoadmapMiniProject {
  name: string;
  description: string;
  techStack: string[];
}

export interface RoadmapPhase {
  id: string;
  phaseNumber: number;
  title: string;
  description: string;
  difficulty: string;
  estimatedDurationWeeks: number;
  progressPercentage: number;
  skills: RoadmapSkill[];
  miniProjects: RoadmapMiniProject[];
}

export interface CareerRoadmap {
  careerGoal: string;
  targetRole: string;
  overallProgressPercentage: number;
  estimatedCompletionMonths: number;
  totalPhases: number;
  phases: RoadmapPhase[];
}

// ---------- Skill gap analysis ----------
export interface KnownSkillItem {
  name: string;
  proficiency: string | number;
  category?: string;
}

export interface MissingSkillItem {
  name: string;
  priority: string | number;
  difficulty: string;
}

export interface PriorityMatrixItem {
  skill: string;
  impact: 'High' | 'Medium' | 'Low';
  effort: 'Low' | 'Medium' | 'High';
}

export interface RecommendedProject {
  title: string;
  difficulty: string;
  keySkills: string[];
  impact: string;
}

export interface RecommendedCertification {
  title: string;
  issuer: string;
  estimatedTime: string;
  isFree: boolean;
}

export interface SkillGapAnalysis {
  careerGoal: string;
  overallReadinessScorePercentage: number;
  skillsKnown: KnownSkillItem[];
  skillsToLearn: MissingSkillItem[];
  priorityMatrix: PriorityMatrixItem[];
  learningOrder: string[];
  recommendedProjects: RecommendedProject[];
  recommendedCertifications: RecommendedCertification[];
}

// ---------- Dashboard ----------
export interface DashboardStats {
  careerProgressPercentage: number;
  daysStreak: number;
  internshipMatchCount: number;
  scholarshipMatchCount: number;
  weeklyStudyHours: number[]; // Mon..Sun
}

export type AISuggestionType = 'Planner' | 'Skill Gap' | 'Opportunity';

export interface AISuggestion {
  id: string;
  title: string;
  description: string;
  timestamp: string;
  actionText: string;
  type: AISuggestionType;
}
