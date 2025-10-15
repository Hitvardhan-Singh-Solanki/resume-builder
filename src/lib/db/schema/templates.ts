import {
  pgTable,
  text,
  timestamp,
  uuid,
  varchar,
  boolean,
} from "drizzle-orm/pg-core";
import { createInsertSchema, createSelectSchema } from "drizzle-zod";
import { z } from "zod";

export const templates = pgTable("templates", {
  id: uuid("id").primaryKey().defaultRandom(),
  name: varchar("name", { length: 255 }).notNull(),
  description: text("description"),
  previewImage: text("preview_image"),
  isActive: boolean("is_active").notNull().default(true),
  isAtsFriendly: boolean("is_ats_friendly").notNull().default(false),
  category: varchar("category", { length: 50 }).notNull(),
  createdAt: timestamp("created_at").notNull().defaultNow(),
  updatedAt: timestamp("updated_at").notNull().defaultNow(),
});

export const insertTemplateSchema = createInsertSchema(templates, {
  name: z.string().min(1).max(255),
  description: z.string().optional(),
  previewImage: z.string().url().optional(),
  category: z.enum([
    "modern",
    "classic",
    "minimal",
    "creative",
    "professional",
  ]),
});

export const selectTemplateSchema = createSelectSchema(templates);

export type Template = typeof templates.$inferSelect;
export type NewTemplate = typeof templates.$inferInsert;
