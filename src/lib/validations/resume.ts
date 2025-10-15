import { z } from "zod";

export const personalInfoSchema = z.object({
  name: z
    .string()
    .min(1, "Name is required")
    .max(100, "Name must be less than 100 characters"),
  email: z.string().email("Invalid email address"),
  phone: z.string().regex(/^\+?[1-9]\d{1,14}$/, "Invalid phone number format"),
  location: z
    .string()
    .min(1, "Location is required")
    .max(100, "Location must be less than 100 characters"),
  linkedin: z.string().url("Invalid LinkedIn URL").optional().or(z.literal("")),
  portfolio: z
    .string()
    .url("Invalid portfolio URL")
    .optional()
    .or(z.literal("")),
  summary: z
    .string()
    .max(500, "Summary must be less than 500 characters")
    .optional(),
});

export const workExperienceSchema = z.object({
  id: z.string().uuid("Invalid ID format"),
  company: z
    .string()
    .min(1, "Company name is required")
    .max(100, "Company name must be less than 100 characters"),
  position: z
    .string()
    .min(1, "Position is required")
    .max(100, "Position must be less than 100 characters"),
  startDate: z
    .string()
    .regex(/^\d{4}-\d{2}-\d{2}$/, "Invalid date format (YYYY-MM-DD)"),
  endDate: z
    .string()
    .regex(/^\d{4}-\d{2}-\d{2}$/, "Invalid date format (YYYY-MM-DD)")
    .optional(),
  current: z.boolean(),
  description: z
    .string()
    .max(1000, "Description must be less than 1000 characters"),
  achievements: z
    .array(z.string().max(200, "Achievement must be less than 200 characters"))
    .max(10, "Maximum 10 achievements allowed"),
});

export const educationSchema = z.object({
  id: z.string().uuid("Invalid ID format"),
  institution: z
    .string()
    .min(1, "Institution name is required")
    .max(100, "Institution name must be less than 100 characters"),
  degree: z
    .string()
    .min(1, "Degree is required")
    .max(100, "Degree must be less than 100 characters"),
  field: z
    .string()
    .min(1, "Field of study is required")
    .max(100, "Field must be less than 100 characters"),
  startDate: z
    .string()
    .regex(/^\d{4}-\d{2}-\d{2}$/, "Invalid date format (YYYY-MM-DD)"),
  endDate: z
    .string()
    .regex(/^\d{4}-\d{2}-\d{2}$/, "Invalid date format (YYYY-MM-DD)")
    .optional(),
  current: z.boolean(),
  gpa: z
    .string()
    .regex(/^\d+\.?\d*$/, "Invalid GPA format")
    .optional(),
  location: z
    .string()
    .max(100, "Location must be less than 100 characters")
    .optional(),
});

export const skillSchema = z.object({
  id: z.string().uuid("Invalid ID format"),
  name: z
    .string()
    .min(1, "Skill name is required")
    .max(50, "Skill name must be less than 50 characters"),
  category: z.enum(["technical", "soft", "language", "other"]),
  level: z.enum(["beginner", "intermediate", "advanced", "expert"]).optional(),
});

export const projectSchema = z.object({
  id: z.string().uuid("Invalid ID format"),
  title: z
    .string()
    .min(1, "Project title is required")
    .max(100, "Title must be less than 100 characters"),
  description: z
    .string()
    .max(1000, "Description must be less than 1000 characters"),
  technologies: z
    .array(
      z.string().max(50, "Technology name must be less than 50 characters")
    )
    .max(20, "Maximum 20 technologies allowed"),
  startDate: z
    .string()
    .regex(/^\d{4}-\d{2}-\d{2}$/, "Invalid date format (YYYY-MM-DD)"),
  endDate: z
    .string()
    .regex(/^\d{4}-\d{2}-\d{2}$/, "Invalid date format (YYYY-MM-DD)")
    .optional(),
  current: z.boolean(),
  url: z.string().url("Invalid URL").optional().or(z.literal("")),
  github: z.string().url("Invalid GitHub URL").optional().or(z.literal("")),
});

export const certificationSchema = z.object({
  id: z.string().uuid("Invalid ID format"),
  name: z
    .string()
    .min(1, "Certification name is required")
    .max(100, "Name must be less than 100 characters"),
  issuer: z
    .string()
    .min(1, "Issuer is required")
    .max(100, "Issuer must be less than 100 characters"),
  date: z
    .string()
    .regex(/^\d{4}-\d{2}-\d{2}$/, "Invalid date format (YYYY-MM-DD)"),
  expiryDate: z
    .string()
    .regex(/^\d{4}-\d{2}-\d{2}$/, "Invalid date format (YYYY-MM-DD)")
    .optional(),
  credentialId: z
    .string()
    .max(100, "Credential ID must be less than 100 characters")
    .optional(),
  url: z.string().url("Invalid URL").optional().or(z.literal("")),
});

export const awardSchema = z.object({
  id: z.string().uuid("Invalid ID format"),
  title: z
    .string()
    .min(1, "Award title is required")
    .max(100, "Title must be less than 100 characters"),
  issuer: z
    .string()
    .min(1, "Issuer is required")
    .max(100, "Issuer must be less than 100 characters"),
  date: z
    .string()
    .regex(/^\d{4}-\d{2}-\d{2}$/, "Invalid date format (YYYY-MM-DD)"),
  description: z
    .string()
    .max(500, "Description must be less than 500 characters")
    .optional(),
});

export const publicationSchema = z.object({
  id: z.string().uuid("Invalid ID format"),
  title: z
    .string()
    .min(1, "Publication title is required")
    .max(200, "Title must be less than 200 characters"),
  publisher: z
    .string()
    .min(1, "Publisher is required")
    .max(100, "Publisher must be less than 100 characters"),
  date: z
    .string()
    .regex(/^\d{4}-\d{2}-\d{2}$/, "Invalid date format (YYYY-MM-DD)"),
  url: z.string().url("Invalid URL").optional().or(z.literal("")),
  description: z
    .string()
    .max(500, "Description must be less than 500 characters")
    .optional(),
});

export const volunteerWorkSchema = z.object({
  id: z.string().uuid("Invalid ID format"),
  organization: z
    .string()
    .min(1, "Organization name is required")
    .max(100, "Organization name must be less than 100 characters"),
  position: z
    .string()
    .min(1, "Position is required")
    .max(100, "Position must be less than 100 characters"),
  startDate: z
    .string()
    .regex(/^\d{4}-\d{2}-\d{2}$/, "Invalid date format (YYYY-MM-DD)"),
  endDate: z
    .string()
    .regex(/^\d{4}-\d{2}-\d{2}$/, "Invalid date format (YYYY-MM-DD)")
    .optional(),
  current: z.boolean(),
  description: z
    .string()
    .max(1000, "Description must be less than 1000 characters"),
});

export const resumeDataSchema = z.object({
  personalInfo: personalInfoSchema,
  experience: z
    .array(workExperienceSchema)
    .max(20, "Maximum 20 work experiences allowed"),
  education: z
    .array(educationSchema)
    .max(10, "Maximum 10 education entries allowed"),
  skills: z.array(skillSchema).max(50, "Maximum 50 skills allowed"),
  projects: z.array(projectSchema).max(20, "Maximum 20 projects allowed"),
  certifications: z
    .array(certificationSchema)
    .max(20, "Maximum 20 certifications allowed"),
  awards: z.array(awardSchema).max(20, "Maximum 20 awards allowed"),
  publications: z
    .array(publicationSchema)
    .max(20, "Maximum 20 publications allowed"),
  volunteerWork: z
    .array(volunteerWorkSchema)
    .max(20, "Maximum 20 volunteer experiences allowed"),
});

export const resumeSchema = z.object({
  id: z.string().uuid("Invalid ID format"),
  userId: z.string().uuid("Invalid user ID format"),
  title: z
    .string()
    .min(1, "Resume title is required")
    .max(100, "Title must be less than 100 characters"),
  templateId: z.string().min(1, "Template ID is required"),
  data: resumeDataSchema,
  createdAt: z.date(),
  updatedAt: z.date(),
  lastEdited: z.date(),
});

export const createResumeSchema = z.object({
  title: z
    .string()
    .min(1, "Resume title is required")
    .max(100, "Title must be less than 100 characters"),
  templateId: z.string().min(1, "Template ID is required"),
  data: resumeDataSchema,
});

export const updateResumeSchema = z.object({
  title: z
    .string()
    .min(1, "Resume title is required")
    .max(100, "Title must be less than 100 characters")
    .optional(),
  templateId: z.string().min(1, "Template ID is required").optional(),
  data: resumeDataSchema.optional(),
});
