import { eq, and } from "drizzle-orm";
import { db } from "../connection";
import { templates, type Template, type NewTemplate } from "../schema";

export class TemplateRepository {
  async findById(id: string): Promise<Template | null> {
    const result = await db
      .select()
      .from(templates)
      .where(eq(templates.id, id))
      .limit(1);
    return result[0] || null;
  }

  async findAll(): Promise<Template[]> {
    return await db
      .select()
      .from(templates)
      .where(eq(templates.isActive, true));
  }

  async findByCategory(category: string): Promise<Template[]> {
    return await db
      .select()
      .from(templates)
      .where(
        and(eq(templates.category, category), eq(templates.isActive, true))
      );
  }

  async findAtsFriendly(): Promise<Template[]> {
    return await db
      .select()
      .from(templates)
      .where(
        and(eq(templates.isAtsFriendly, true), eq(templates.isActive, true))
      );
  }

  async create(templateData: NewTemplate): Promise<Template> {
    const result = await db.insert(templates).values(templateData).returning();
    if (!result[0]) {
      throw new Error("Failed to create template");
    }
    return result[0];
  }

  async update(
    id: string,
    templateData: Partial<NewTemplate>
  ): Promise<Template> {
    const result = await db
      .update(templates)
      .set({ ...templateData, updatedAt: new Date() })
      .where(eq(templates.id, id))
      .returning();

    if (!result[0]) {
      throw new Error("Template not found or update failed");
    }
    return result[0];
  }

  async delete(id: string): Promise<void> {
    const result = await db.delete(templates).where(eq(templates.id, id));
    if (result.rowCount === 0) {
      throw new Error("Template not found");
    }
  }
}
