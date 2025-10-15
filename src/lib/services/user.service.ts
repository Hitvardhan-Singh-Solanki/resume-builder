import { UserRepository } from "@/lib/db/repositories/user.repository";
import { insertUserSchema } from "@/lib/db/schema";
import { sanitizeEmail, sanitizeInput } from "@/lib/security/sanitize";
import type { NewUser } from "@/lib/db/schema";

export class UserService {
  private repository: UserRepository;

  constructor() {
    this.repository = new UserRepository();
  }

  async getUserById(id: string) {
    if (!id || typeof id !== "string") {
      throw new Error("Invalid user ID");
    }

    return await this.repository.findById(id);
  }

  async getUserByEmail(email: string) {
    if (!email || typeof email !== "string") {
      throw new Error("Invalid email");
    }

    const sanitizedEmail = sanitizeEmail(email);
    return await this.repository.findByEmail(sanitizedEmail);
  }

  async createUser(userData: unknown) {
    // Validate input
    const validatedData = insertUserSchema.parse(userData);

    // Sanitize inputs
    const sanitizedData: NewUser = {
      email: sanitizeEmail(validatedData.email),
      name: sanitizeInput(validatedData.name),
      image: validatedData.image
        ? sanitizeInput(validatedData.image)
        : undefined,
    };

    // Check if user already exists
    const existingUser = await this.repository.findByEmail(sanitizedData.email);
    if (existingUser) {
      throw new Error("User with this email already exists");
    }

    return await this.repository.create(sanitizedData);
  }

  async updateUser(id: string, userData: unknown) {
    if (!id || typeof id !== "string") {
      throw new Error("Invalid user ID");
    }

    // Validate input
    const validatedData = insertUserSchema.partial().parse(userData);

    // Sanitize inputs
    const sanitizedData: Partial<NewUser> = {};
    if (validatedData.email) {
      sanitizedData.email = sanitizeEmail(validatedData.email);
    }
    if (validatedData.name) {
      sanitizedData.name = sanitizeInput(validatedData.name);
    }
    if (validatedData.image) {
      sanitizedData.image = sanitizeInput(validatedData.image);
    }

    return await this.repository.update(id, sanitizedData);
  }

  async deleteUser(id: string) {
    if (!id || typeof id !== "string") {
      throw new Error("Invalid user ID");
    }

    return await this.repository.delete(id);
  }
}
