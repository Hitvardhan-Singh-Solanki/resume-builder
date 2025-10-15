import { NextRequest, NextResponse } from "next/server";
import { getServerSession } from "next-auth/next";
import { authOptions } from "@/lib/auth/config";
import type { Session } from "next-auth";
import { ResumeService } from "@/lib/services/resume.service";
import { apiRateLimit, standardRateLimit } from "@/lib/security/rate-limit";
import { z } from "zod";

export async function GET(request: NextRequest): Promise<NextResponse> {
  try {
    // Rate limiting
    const rateLimitResult = await apiRateLimit(request, standardRateLimit);
    if (!rateLimitResult.success) {
      return NextResponse.json(
        { error: rateLimitResult.message },
        { status: 429 }
      );
    }

    // Authentication
    const session: Session | null = await getServerSession(authOptions);
    if (!session?.user?.id) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    // Get user's resumes
    const service = new ResumeService();
    const resumes = await service.getResumesByUserId(session.user.id);

    return NextResponse.json({ success: true, data: resumes });
  } catch (error) {
    console.error("Error fetching resumes:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}

export async function POST(request: NextRequest): Promise<NextResponse> {
  try {
    // Rate limiting
    const rateLimitResult = await apiRateLimit(request, standardRateLimit);
    if (!rateLimitResult.success) {
      return NextResponse.json(
        { error: rateLimitResult.message },
        { status: 429 }
      );
    }

    // Authentication
    const session: Session | null = await getServerSession(authOptions);
    if (!session?.user?.id) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    // Parse and validate body
    const body: unknown = await request.json();

    // Create resume
    const service = new ResumeService();
    const resume = await service.createResume(session.user.id, body);

    return NextResponse.json({ success: true, data: resume }, { status: 201 });
  } catch (error) {
    console.error("Error creating resume:", error);

    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { error: "Invalid input", details: error.issues },
        { status: 400 }
      );
    }

    if (error instanceof Error) {
      return NextResponse.json({ error: error.message }, { status: 400 });
    }

    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
