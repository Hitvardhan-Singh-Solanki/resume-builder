import { getServerSession } from "next-auth/next";
import { authOptions } from "@/lib/auth/config";
import { redirect } from "next/navigation";
import type { Session } from "next-auth";
import { ResumeService } from "@/lib/services/resume.service";
import { AppLayout } from "@/components/layout/AppLayout";
import { Heading1, Caption } from "@/design-system/components/Typography";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default async function DashboardPage() {
  const session: Session | null = await getServerSession(authOptions);

  if (!session?.user?.id) {
    redirect("/auth/signin");
  }

  const service = new ResumeService();
  const resumes = await service.getResumesByUserId(session.user.id);

  return (
    <AppLayout>
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <Heading1 className="text-gray-900 dark:text-gray-100">
            Dashboard
          </Heading1>
          <Caption className="mt-2 text-gray-600 dark:text-gray-400">
            Manage your resumes
          </Caption>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {resumes.map((resume) => (
            <Card key={resume.id}>
              <CardHeader>
                <CardTitle className="text-gray-900 dark:text-gray-100">
                  {resume.title}
                </CardTitle>
                <CardDescription>
                  Last updated:{" "}
                  {new Date(resume.updatedAt).toLocaleDateString()}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex gap-2">
                  <Button>Edit</Button>
                  <Button variant="outline">Download PDF</Button>
                </div>
              </CardContent>
            </Card>
          ))}

          <Card className="border-2 border-dashed border-gray-300 dark:border-gray-600 flex items-center justify-center">
            <CardContent className="text-center">
              <div className="text-4xl mb-2">+</div>
              <Button variant="ghost">Create New Resume</Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </AppLayout>
  );
}
