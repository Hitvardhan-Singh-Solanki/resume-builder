import { getServerSession } from "next-auth/next";
import { authOptions } from "@/lib/auth/config";
import { redirect } from "next/navigation";
import type { Session } from "next-auth";

export default async function Home() {
  const session: Session | null = await getServerSession(authOptions);

  if (session?.user?.id) {
    redirect("/dashboard");
  } else {
    redirect("/auth/signin");
  }
}
