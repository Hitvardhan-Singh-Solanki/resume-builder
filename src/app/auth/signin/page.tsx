import { getServerSession } from "next-auth/next";
import { authOptions } from "@/lib/auth/config";
import { redirect } from "next/navigation";
import type { Session } from "next-auth";
import { SignInButton } from "@/components/auth/SignInButton";
import { AppLayout } from "@/components/layout/AppLayout";

export default async function SignInPage() {
  const session: Session | null = await getServerSession(authOptions);

  if (session?.user?.id) {
    redirect("/dashboard");
  }

  return (
    <AppLayout>
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex items-center justify-center">
        <div className="max-w-md w-full space-y-8">
          <div>
            <h2 className="h1 text-center text-gray-900 dark:text-gray-100">
              Sign in to your account
            </h2>
            <p className="mt-2 caption text-center text-gray-600 dark:text-gray-400">
              Create and manage your professional resumes
            </p>
          </div>
          <div className="mt-8 space-y-6">
            <SignInButton />
          </div>
        </div>
      </div>
    </AppLayout>
  );
}
