// Mock data consumed by the page-level components (dashboard, planner,
// roadmap, profile, skill-gap). Several files already imported from
// '../../data/mockData' but the module didn't exist — this fills that gap.
//
// This is prototype/demo data only. Swap these for real API calls to the
// FastAPI backend (see backend/app/api/*) as each module is wired up.
import {
  StudentProfile,
  PlannerDaySchedule,
  AcademicEvent,
  CareerRoadmap,
  SkillGapAnalysis,
  DashboardStats,
  StudyTask,
  AISuggestion,
} from '../types';

export const mockProfile: StudentProfile = {
  fullName: 'Manaswi Reddy',
  avatarUrl: 'https://i.pravatar.cc/150?img=47',
  college: 'National Institute of Technology',
  branch: 'Computer Science & Engineering',
  semester: 5,
  cgpa: 8.7,
  careerGoal: 'AI Engineer',
  studyHoursPerDay: 4,
  skills: ['Python', 'SQL', 'Git', 'Data Structures', 'Pandas'],
};

export const mockAcademicEvents: AcademicEvent[] = [
  {
    id: 'evt_1',
    title: 'Mid-1 Exam',
    subject: 'Machine Learning',
    type: 'Exam',
    daysRemaining: 5,
    urgency: 'high',
  },
  {
    id: 'evt_2',
    title: 'DBMS Lab Record Submission',
    subject: 'Database Management Systems',
    type: 'Lab Record',
    daysRemaining: 2,
    urgency: 'high',
  },
  {
    id: 'evt_3',
    title: 'Smart India Hackathon Registration',
    subject: 'Open Innovation',
    type: 'Hackathon',
    daysRemaining: 12,
    urgency: 'medium',
  },
];

const mockTasksDay1: StudyTask[] = [
  {
    id: 'tsk_1',
    title: 'DBMS Lab',
    category: 'Academic',
    durationMinutes: 90,
    completed: false,
    priority: 'High',
    timeSlot: '09:00 AM - 10:30 AM',
  },
  {
    id: 'tsk_2',
    title: 'Revise ML Unit 2: Regression',
    category: 'Academic',
    durationMinutes: 90,
    completed: false,
    priority: 'High',
    timeSlot: '02:00 PM - 03:30 PM',
  },
  {
    id: 'tsk_3',
    title: 'Learn Python: File Handling',
    category: 'Roadmap',
    durationMinutes: 45,
    completed: true,
    priority: 'Medium',
    timeSlot: '06:00 PM - 06:45 PM',
  },
  {
    id: 'tsk_4',
    title: 'Evening travel: relax / music',
    category: 'Personal',
    durationMinutes: 30,
    completed: false,
    priority: 'Low',
    timeSlot: '07:00 PM - 07:30 PM',
  },
];

export const mockTodayTasks: StudyTask[] = mockTasksDay1;

export const mockPlannerSchedule: PlannerDaySchedule[] = [
  {
    date: '2026-07-29',
    dayName: 'Wednesday',
    isExamNearby: true,
    totalHours: 3.5,
    tasks: mockTasksDay1,
  },
  {
    date: '2026-07-30',
    dayName: 'Thursday',
    isExamNearby: true,
    totalHours: 3,
    tasks: [
      {
        id: 'tsk_5',
        title: 'Revise ML Unit 3: Classification',
        category: 'Academic',
        durationMinutes: 90,
        completed: false,
        priority: 'High',
        timeSlot: '09:00 AM - 10:30 AM',
      },
      {
        id: 'tsk_6',
        title: 'Solve DSA problems (Arrays)',
        category: 'Roadmap',
        durationMinutes: 60,
        completed: false,
        priority: 'Medium',
        timeSlot: '05:00 PM - 06:00 PM',
      },
    ],
  },
  {
    date: '2026-07-31',
    dayName: 'Friday',
    isExamNearby: true,
    totalHours: 2.5,
    tasks: [
      {
        id: 'tsk_7',
        title: 'Full-length ML mock test',
        category: 'Academic',
        durationMinutes: 120,
        completed: false,
        priority: 'High',
        timeSlot: '10:00 AM - 12:00 PM',
      },
      {
        id: 'tsk_8',
        title: 'Free time / rest',
        category: 'Personal',
        durationMinutes: 30,
        completed: false,
        priority: 'Low',
        timeSlot: '07:00 PM - 07:30 PM',
      },
    ],
  },
];

export const mockCareerRoadmap: CareerRoadmap = {
  careerGoal: 'AI Engineer',
  targetRole: 'AI / ML Specialist',
  overallProgressPercentage: 28,
  estimatedCompletionMonths: 8,
  totalPhases: 3,
  phases: [
    {
      id: 'phase_1',
      phaseNumber: 1,
      title: 'Python & Math Foundations',
      description: 'Build the core programming and math skills every AI engineer needs.',
      difficulty: 'Beginner',
      estimatedDurationWeeks: 6,
      progressPercentage: 100,
      skills: [
        {
          id: 'skill_1',
          name: 'Python Programming',
          completed: true,
          estimatedHours: 30,
          whyLearn: 'Python is the primary language used across almost all AI/ML tooling and libraries.',
          miniProject: 'Build a CLI expense tracker using file I/O and dictionaries.',
          commonMistakes: 'Mixing mutable default arguments and ignoring PEP8 formatting conventions.',
          freeResources: [
            { title: 'Python Docs — Official Tutorial', url: 'https://docs.python.org/3/tutorial/' },
          ],
          interviewQuestions: ['Explain list vs tuple in Python.', 'What are Python decorators?'],
        },
        {
          id: 'skill_2',
          name: 'Linear Algebra for ML',
          completed: true,
          estimatedHours: 20,
          whyLearn: 'Vectors, matrices, and transformations underpin nearly every ML model.',
          miniProject: 'Implement matrix multiplication and PCA from scratch using NumPy.',
          commonMistakes: 'Confusing row-major vs column-major operations when using NumPy broadcasting.',
          freeResources: [
            { title: 'MIT OpenCourseWare — Linear Algebra', url: 'https://ocw.mit.edu/courses/18-06-linear-algebra-spring-2010/' },
          ],
          interviewQuestions: ['What is eigen-decomposition used for in ML?'],
        },
      ],
      miniProjects: [
        { name: 'Matrix Calculator', description: 'A CLI tool for matrix operations.', techStack: ['Python', 'NumPy'] },
      ],
    },
    {
      id: 'phase_2',
      phaseNumber: 2,
      title: 'Core Machine Learning',
      description: 'Learn supervised and unsupervised learning algorithms and how to apply them.',
      difficulty: 'Intermediate',
      estimatedDurationWeeks: 10,
      progressPercentage: 40,
      skills: [
        {
          id: 'skill_3',
          name: 'Scikit-learn & Regression Models',
          completed: true,
          estimatedHours: 25,
          whyLearn: 'Scikit-learn is the standard toolkit for classical ML in production and research.',
          miniProject: 'Predict housing prices using linear and polynomial regression.',
          commonMistakes: 'Forgetting to scale features before training distance-based models.',
          freeResources: [
            { title: 'Scikit-learn — Getting Started', url: 'https://scikit-learn.org/stable/getting_started.html' },
          ],
          interviewQuestions: ['What is the bias-variance tradeoff?'],
        },
        {
          id: 'skill_4',
          name: 'Classification & Model Evaluation',
          completed: false,
          estimatedHours: 25,
          whyLearn: 'Most real-world business problems are framed as classification tasks.',
          miniProject: 'Build a spam classifier and evaluate it with precision/recall/F1.',
          commonMistakes: 'Relying on accuracy alone for imbalanced datasets.',
          freeResources: [
            { title: 'Google ML Crash Course — Classification', url: 'https://developers.google.com/machine-learning/crash-course/classification' },
          ],
          interviewQuestions: ['When would you prefer F1-score over accuracy?'],
        },
      ],
      miniProjects: [
        { name: 'Spam Classifier', description: 'Classify emails as spam or not spam.', techStack: ['Python', 'scikit-learn'] },
      ],
    },
    {
      id: 'phase_3',
      phaseNumber: 3,
      title: 'Deep Learning & Deployment',
      description: 'Move into neural networks and learn to ship models as real applications.',
      difficulty: 'Advanced',
      estimatedDurationWeeks: 12,
      progressPercentage: 0,
      skills: [
        {
          id: 'skill_5',
          name: 'PyTorch Fundamentals',
          completed: false,
          estimatedHours: 35,
          whyLearn: 'PyTorch is the dominant framework in research and increasingly in industry.',
          miniProject: 'Train a CNN for handwritten digit recognition on MNIST.',
          commonMistakes: 'Forgetting to zero gradients before each backward pass.',
          freeResources: [
            { title: 'PyTorch — Official Tutorials', url: 'https://pytorch.org/tutorials/' },
          ],
          interviewQuestions: ['What does `.backward()` actually compute?'],
        },
      ],
      miniProjects: [
        { name: 'Digit Recognizer API', description: 'Serve a trained CNN behind a REST endpoint.', techStack: ['PyTorch', 'FastAPI'] },
      ],
    },
  ],
};

export const mockSkillGapAnalysis: SkillGapAnalysis = {
  careerGoal: 'AI Engineer',
  overallReadinessScorePercentage: 54,
  skillsKnown: [
    { name: 'Python', proficiency: 'Strong', category: 'Programming' },
    { name: 'SQL', proficiency: 'Intermediate', category: 'Data' },
    { name: 'Git', proficiency: 'Strong', category: 'Tooling' },
  ],
  skillsToLearn: [
    { name: 'PyTorch', priority: 'Critical', difficulty: 'Hard' },
    { name: 'Docker', priority: 'High', difficulty: 'Medium' },
    { name: 'MLOps Basics', priority: 'Medium', difficulty: 'Medium' },
  ],
  priorityMatrix: [
    { skill: 'PyTorch', impact: 'High', effort: 'High' },
    { skill: 'Docker', impact: 'High', effort: 'Low' },
    { skill: 'MLOps Basics', impact: 'Medium', effort: 'Medium' },
  ],
  learningOrder: [
    'Solidify NumPy & Pandas',
    'Core ML with scikit-learn',
    'PyTorch fundamentals',
    'Model deployment with Docker + FastAPI',
    'Intro to MLOps',
  ],
  recommendedProjects: [
    {
      title: 'End-to-end House Price Predictor',
      difficulty: 'Beginner',
      keySkills: ['scikit-learn', 'Pandas'],
      impact: 'Solidifies the full ML workflow from data to model.',
    },
    {
      title: 'Containerized Image Classifier API',
      difficulty: 'Intermediate',
      keySkills: ['PyTorch', 'Docker', 'FastAPI'],
      impact: 'Directly closes the PyTorch + Docker gap for AI Engineer roles.',
    },
  ],
  recommendedCertifications: [
    { title: 'Deep Learning Specialization', issuer: 'DeepLearning.AI (audit free)', estimatedTime: '3 months', isFree: true },
    { title: 'Docker for Beginners', issuer: 'freeCodeCamp', estimatedTime: '2 weeks', isFree: true },
  ],
};

export const mockDashboardStats: DashboardStats = {
  careerProgressPercentage: 28,
  daysStreak: 14,
  internshipMatchCount: 6,
  scholarshipMatchCount: 3,
  weeklyStudyHours: [3, 4, 2.5, 4, 3.5, 1, 2],
};

export const mockAISuggestions: AISuggestion[] = [
  {
    id: 'sug_1',
    title: 'Exam in 5 days — workload rebalanced',
    description: 'Reduced roadmap tasks this week and added 2 extra ML revision sessions.',
    timestamp: '2h ago',
    actionText: 'View Planner',
    type: 'Planner',
  },
  {
    id: 'sug_2',
    title: 'Docker closes your biggest skill gap',
    description: 'Learning Docker next has the best impact-to-effort ratio for your AI Engineer goal.',
    timestamp: '1d ago',
    actionText: 'View Skill Gap',
    type: 'Skill Gap',
  },
  {
    id: 'sug_3',
    title: '3 new internships match your profile',
    description: 'ML Intern roles at 2 startups match 80%+ of your current skill set.',
    timestamp: '2d ago',
    actionText: 'View Roadmap',
    type: 'Opportunity',
  },
];
