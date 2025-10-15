import { eq, desc } from "drizzle-orm";
import { db } from "../connection";
import { resumes, type Resume, type NewResume } from "../schema";
import type { ResumeData } from "@/types/resume";

export class ResumeRepository {
  async findById(id: string): Promise<Resume | null> {
    const result = await db
      .select()
      .from(resumes)
      .where(eq(resumes.id, id))
      .limit(1);
    return result[0] || null;
  }

  async findByUserId(userId: string): Promise<Resume[]> {
    return await db
      .select()
      .from(resumes)
      .where(eq(resumes.userId, userId))
      .orderBy(desc(resumes.updatedAt));
  }

  async create(resumeData: NewResume): Promise<Resume> {
    const result = await db.insert(resumes).values(resumeData).returning();
    if (!result[0]) {
      throw new Error("Failed to create resume");
    }
    return result[0];
  }

  async update(id: string, resumeData: Partial<NewResume>): Promise<Resume> {
    const result = await db
      .update(resumes)
      .set({
        ...resumeData,
        updatedAt: new Date(),
        lastEdited: new Date(),
      })
      .where(eq(resumes.id, id))
      .returning();

    if (!result[0]) {
      throw new Error("Resume not found or update failed");
    }
    return result[0];
  }

  async delete(id: string): Promise<void> {
    const result = await db.delete(resumes).where(eq(resumes.id, id));
    if (result.rowCount === 0) {
      throw new Error("Resume not found");
    }
  }

  async updateData(id: string, data: ResumeData): Promise<Resume> {
    return this.update(id, { data });
  }

  async updateTitle(id: string, title: string): Promise<Resume> {
    return this.update(id, { title });
  }

  async updateTemplate(id: string, templateId: string): Promise<Resume> {
    return this.update(id, { templateId });
  }
}
