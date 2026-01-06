
export interface Course {
  id: string;
  title: string;
  description: string;
  category: 'Coding' | 'Blockchain' | 'Design' | 'Soft Skills';
  level: 'Beginner' | 'Intermediate' | 'Advanced';
  duration: string;
  points: number;
  image: string;
  modules: number;
}

export interface UserProgress {
  userId: string;
  points: number;
  completedCourseIds: string[];
  activeCourseIds: string[];
}

export interface Circle {
  id: string;
  name: string;
  description: string;
  region: string;
  members: number;
  category: string;
}

export interface Job {
  id: string;
  title: string;
  company: string;
  type: string;
  location: string;
  salary?: string;
  verified: boolean;
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
}
