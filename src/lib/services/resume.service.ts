import { ResumeRepository } from "@/lib/db/repositories/resume.repository";
import {
  createResumeSchema,
  updateResumeSchema,
} from "@/lib/validations/resume";
import { sanitizeInput, sanitizeStringArray } from "@/lib/security/sanitize";
import type { ResumeData } from "@/types/resume";

export class ResumeService {
  private repository: ResumeRepository;

  constructor() {
    this.repository = new ResumeRepository();
  }

  async getResumeById(id: string, userId: string) {
    if (!id || typeof id !== "string") {
      throw new Error("Invalid resume ID");
    }

    const resume = await this.repository.findById(id);
    if (!resume) {
      throw new Error("Resume not found");
    }

    if (resume.userId !== userId) {
      throw new Error("Unauthorized access to resume");
    }

    return resume;
  }

  async getResumesByUserId(userId: string) {
    if (!userId || typeof userId !== "string") {
      throw new Error("Invalid user ID");
    }

    return await this.repository.findByUserId(userId);
  }

  async createResume(userId: string, resumeData: unknown) {
    if (!userId || typeof userId !== "string") {
      throw new Error("Invalid user ID");
    }

    // Validate input
    const validatedData = createResumeSchema.parse(resumeData);

    // Sanitize inputs
    const sanitizedData = this.sanitizeResumeData(validatedData.data);

    return await this.repository.create({
      userId,
      title: sanitizeInput(validatedData.title),
      templateId: sanitizeInput(validatedData.templateId),
      data: sanitizedData,
    });
  }

  async updateResume(id: string, userId: string, resumeData: unknown) {
    if (!id || typeof id !== "string") {
      throw new Error("Invalid resume ID");
    }

    // Validate input
    const validatedData = updateResumeSchema.parse(resumeData);

    // Check ownership
    const existingResume = await this.repository.findById(id);
    if (!existingResume) {
      throw new Error("Resume not found");
    }

    if (existingResume.userId !== userId) {
      throw new Error("Unauthorized access to resume");
    }

    // Sanitize inputs
    const updateData: Partial<{
      title: string;
      templateId: string;
      data: unknown;
    }> = {};
    if (validatedData.title) {
      updateData.title = sanitizeInput(validatedData.title);
    }
    if (validatedData.templateId) {
      updateData.templateId = sanitizeInput(validatedData.templateId);
    }
    if (validatedData.data) {
      updateData.data = this.sanitizeResumeData(validatedData.data);
    }

    return await this.repository.update(id, updateData);
  }

  async deleteResume(id: string, userId: string) {
    if (!id || typeof id !== "string") {
      throw new Error("Invalid resume ID");
    }

    // Check ownership
    const existingResume = await this.repository.findById(id);
    if (!existingResume) {
      throw new Error("Resume not found");
    }

    if (existingResume.userId !== userId) {
      throw new Error("Unauthorized access to resume");
    }

    return await this.repository.delete(id);
  }

  async updateResumeData(id: string, userId: string, data: unknown) {
    if (!id || typeof id !== "string") {
      throw new Error("Invalid resume ID");
    }

    // Validate input
    const validatedData = createResumeSchema.shape.data.parse(data);

    // Check ownership
    const existingResume = await this.repository.findById(id);
    if (!existingResume) {
      throw new Error("Resume not found");
    }

    if (existingResume.userId !== userId) {
      throw new Error("Unauthorized access to resume");
    }

    // Sanitize inputs
    const sanitizedData = this.sanitizeResumeData(validatedData);

    return await this.repository.updateData(id, sanitizedData);
  }

  private sanitizeResumeData(data: ResumeData): ResumeData {
    return {
      personalInfo: {
        name: sanitizeInput(data.personalInfo.name),
        email: sanitizeInput(data.personalInfo.email),
        phone: sanitizeInput(data.personalInfo.phone),
        location: sanitizeInput(data.personalInfo.location),
        linkedin: data.personalInfo.linkedin
          ? sanitizeInput(data.personalInfo.linkedin)
          : undefined,
        portfolio: data.personalInfo.portfolio
          ? sanitizeInput(data.personalInfo.portfolio)
          : undefined,
        summary: data.personalInfo.summary
          ? sanitizeInput(data.personalInfo.summary)
          : undefined,
      },
      experience: data.experience.map((exp) => ({
        ...exp,
        company: sanitizeInput(exp.company),
        position: sanitizeInput(exp.position),
        description: sanitizeInput(exp.description),
        achievements: sanitizeStringArray(exp.achievements),
      })),
      education: data.education.map((edu) => ({
        ...edu,
        institution: sanitizeInput(edu.institution),
        degree: sanitizeInput(edu.degree),
        field: sanitizeInput(edu.field),
        location: edu.location ? sanitizeInput(edu.location) : undefined,
      })),
      skills: data.skills.map((skill) => ({
        ...skill,
        name: sanitizeInput(skill.name),
      })),
      projects: data.projects.map((project) => ({
        ...project,
        title: sanitizeInput(project.title),
        description: sanitizeInput(project.description),
        technologies: sanitizeStringArray(project.technologies),
        url: project.url ? sanitizeInput(project.url) : undefined,
        github: project.github ? sanitizeInput(project.github) : undefined,
      })),
      certifications: data.certifications.map((cert) => ({
        ...cert,
        name: sanitizeInput(cert.name),
        issuer: sanitizeInput(cert.issuer),
        credentialId: cert.credentialId
          ? sanitizeInput(cert.credentialId)
          : undefined,
        url: cert.url ? sanitizeInput(cert.url) : undefined,
      })),
      awards: data.awards.map((award) => ({
        ...award,
        title: sanitizeInput(award.title),
        issuer: sanitizeInput(award.issuer),
        description: award.description
          ? sanitizeInput(award.description)
          : undefined,
      })),
      publications: data.publications.map((pub) => ({
        ...pub,
        title: sanitizeInput(pub.title),
        publisher: sanitizeInput(pub.publisher),
        url: pub.url ? sanitizeInput(pub.url) : undefined,
        description: pub.description
          ? sanitizeInput(pub.description)
          : undefined,
      })),
      volunteerWork: data.volunteerWork.map((vol) => ({
        ...vol,
        organization: sanitizeInput(vol.organization),
        position: sanitizeInput(vol.position),
        description: sanitizeInput(vol.description),
      })),
    };
  }
}
