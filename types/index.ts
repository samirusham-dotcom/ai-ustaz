export type UserRole = "student" | "teacher";

export type Subject = "math" | "physics";

export type Difficulty = "easy" | "medium" | "hard";

export interface User {
  id: string;
  name: string;
  role: UserRole;
  /** Класс, например "8Б" */
  classId?: string;
  grade?: number;
  school?: string;
  avatarUrl?: string;
  createdAt: string;
}

export interface AssignmentQuestion {
  id: string;
  prompt: string;
  options: string[];
  /** Индекс правильного варианта в `options` (0-based) */
  correctIndex: number;
  explanation: string;
  difficulty: Difficulty;
}

export interface Topic {
  id: string;
  subject: Subject;
  title: string;
  description: string;
  grade: number;
  /** Порядок в программе предмета */
  sortOrder: number;
}

export interface Assignment {
  id: string;
  topicId: string;
  title: string;
  difficulty: Difficulty;
  questions: AssignmentQuestion[];
}

export interface StudentProgress {
  id: string;
  studentId: string;
  topicId: string;
  assignmentId: string;
  completed: boolean;
  scorePercent: number;
  correctCount: number;
  totalCount: number;
  lastAttemptAt: string;
  weakAreas: string[];
}

export interface TopicScore {
  topicId: string;
  scorePercent: number;
}

export interface DiagnosticResult {
  id: string;
  studentId: string;
  subject: Subject;
  takenAt: string;
  overallScore: number;
  topicScores: TopicScore[];
  recommendedTopicIds: string[];
}

export interface ClassPulseStat {
  classId: string;
  topicId: string;
  averageScore: number;
  studentsAtRisk: number;
  studentsMastered: number;
  totalStudents: number;
  commonMistakes: string[];
}
