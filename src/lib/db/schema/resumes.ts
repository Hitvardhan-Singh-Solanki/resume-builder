import { pgTable, timestamp, uuid, varchar, jsonb } from "drizzle-orm/pg-core";
import { createInsertSchema, createSelectSchema } from "drizzle-zod";
import { z } from "zod";
import { resumeDataSchema } from "@/lib/validations/resume";

export const resumes = pgTable("resumes", {
  id: uuid("id").primaryKey().defaultRandom(),
  userId: uuid("user_id").notNull(),
  title: varchar("title", { length: 255 }).notNull(),
  templateId: varchar("template_id", { length: 100 }).notNull(),
  data: jsonb("data").notNull(),
  createdAt: timestamp("created_at").notNull().defaultNow(),
  updatedAt: timestamp("updated_at").notNull().defaultNow(),
  lastEdited: timestamp("last_edited").notNull().defaultNow(),
});

export const insertResumeSchema = createInsertSchema(resumes, {
  title: z.string().min(1).max(255),
  templateId: z.string().min(1).max(100),
  data: resumeDataSchema,
});

export const selectResumeSchema = createSelectSchema(resumes);

export type Resume = typeof resumes.$inferSelect;
export type NewResume = typeof resumes.$inferInsert;
