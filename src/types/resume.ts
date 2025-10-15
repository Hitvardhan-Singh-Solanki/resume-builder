export interface PersonalInfo {
  name: string;
  email: string;
  phone: string;
  location: string;
  linkedin?: string;
  portfolio?: string;
  summary?: string;
}

export interface WorkExperience {
  id: string;
  company: string;
  position: string;
  startDate: string;
  endDate?: string;
  current: boolean;
  description: string;
  achievements: string[];
}

export interface Education {
  id: string;
  institution: string;
  degree: string;
  field: string;
  startDate: string;
  endDate?: string;
  current: boolean;
  gpa?: string;
  location?: string;
}

export interface Skill {
  id: string;
  name: string;
  category: "technical" | "soft" | "language" | "other";
  level?: "beginner" | "intermediate" | "advanced" | "expert";
}

export interface Project {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  startDate: string;
  endDate?: string;
  current: boolean;
  url?: string;
  github?: string;
}

export interface Certification {
  id: string;
  name: string;
  issuer: string;
  date: string;
  expiryDate?: string;
  credentialId?: string;
  url?: string;
}

export interface Award {
  id: string;
  title: string;
  issuer: string;
  date: string;
  description?: string;
}

export interface Publication {
  id: string;
  title: string;
  publisher: string;
  date: string;
  url?: string;
  description?: string;
}

export interface VolunteerWork {
  id: string;
  organization: string;
  position: string;
  startDate: string;
  endDate?: string;
  current: boolean;
  description: string;
}

export interface ResumeData {
  personalInfo: PersonalInfo;
  experience: WorkExperience[];
  education: Education[];
  skills: Skill[];
  projects: Project[];
  certifications: Certification[];
  awards: Award[];
  publications: Publication[];
  volunteerWork: VolunteerWork[];
}

export interface Resume {
  id: string;
  userId: string;
  title: string;
  templateId: string;
  data: ResumeData;
  createdAt: Date;
  updatedAt: Date;
  lastEdited: Date;
}

export interface Template {
  id: string;
  name: string;
  description: string;
  previewImage: string;
  isActive: boolean;
  isAtsFriendly: boolean;
  category: "modern" | "classic" | "minimal" | "creative" | "professional";
}
