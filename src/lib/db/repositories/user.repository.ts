import { eq } from "drizzle-orm";
import { db } from "../connection";
import { users, type User, type NewUser } from "../schema";

export class UserRepository {
  async findById(id: string): Promise<User | null> {
    const result = await db
      .select()
      .from(users)
      .where(eq(users.id, id))
      .limit(1);
    return result[0] || null;
  }

  async findByEmail(email: string): Promise<User | null> {
    const result = await db
      .select()
      .from(users)
      .where(eq(users.email, email))
      .limit(1);
    return result[0] || null;
  }

  async create(userData: NewUser): Promise<User> {
    const result = await db.insert(users).values(userData).returning();
    if (!result[0]) {
      throw new Error("Failed to create user");
    }
    return result[0];
  }

  async update(id: string, userData: Partial<NewUser>): Promise<User> {
    const result = await db
      .update(users)
      .set({ ...userData, updatedAt: new Date() })
      .where(eq(users.id, id))
      .returning();

    if (!result[0]) {
      throw new Error("User not found or update failed");
    }
    return result[0];
  }

  async delete(id: string): Promise<void> {
    const result = await db.delete(users).where(eq(users.id, id));
    if (result.rowCount === 0) {
      throw new Error("User not found");
    }
  }
}
