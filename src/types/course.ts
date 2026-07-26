export type CourseCategory =
  | "Frontend"
  | "Backend"
  | "Design"
  | "DevOps"
  | "Mobile"
  | "Cybersecurity";

export type CourseLevel = "Beginner" | "Intermediate" | "Advanced";

export type Instructor = {
  name: string;
  avatarText: string;
};

export type Course = {
  id: number;
  title: string;
  description: string;
  category: CourseCategory;
  level: CourseLevel;
  lessons: number;
  duration: string;
  price: number;
  image: string;
  instructor: Instructor;
  featured: boolean;
  enrolled: boolean;
  progress?: number;
  currentModule?: string;
};
