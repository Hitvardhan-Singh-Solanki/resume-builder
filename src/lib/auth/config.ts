/* eslint-disable @typescript-eslint/no-explicit-any */
import GoogleProvider from "next-auth/providers/google";
import { UserService } from "@/lib/services/user.service";

export const authOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
  ],
  callbacks: {
    async signIn({ user, account }: { user: any; account: any }) {
      if (account?.provider === "google") {
        try {
          const userService = new UserService();

          // Check if user exists
          const existingUser = await userService.getUserByEmail(user.email!);

          if (!existingUser) {
            // Create new user
            await userService.createUser({
              email: user.email!,
              name: user.name!,
              image: user.image,
            });
          }

          return true;
        } catch (error) {
          console.error("Error during sign in:", error);
          return false;
        }
      }
      return true;
    },
    async session({ session }: { session: any }) {
      if (session.user?.email) {
        try {
          const userService = new UserService();
          const user = await userService.getUserByEmail(session.user.email);

          if (user) {
            session.user.id = user.id;
            session.user.name = user.name;
            session.user.image = user.image || undefined;
          }
        } catch (error) {
          console.error("Error fetching user in session:", error);
        }
      }
      return session;
    },
    async jwt({ token, user }: { token: any; user: any }) {
      if (user) {
        token.id = user.id;
      }
      return token;
    },
  },
  pages: {
    signIn: "/auth/signin",
    error: "/auth/error",
  },
  session: {
    strategy: "jwt" as const,
    maxAge: 30 * 24 * 60 * 60, // 30 days
  },
  secret: process.env.NEXTAUTH_SECRET,
};
