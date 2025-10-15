import { NextRequest, NextResponse } from "next/server";
import { getServerSession } from "next-auth/next";
import { authOptions } from "@/lib/auth/config";
import type { Session } from "next-auth";
import { ResumeService } from "@/lib/services/resume.service";
import { apiRateLimit, standardRateLimit } from "@/lib/security/rate-limit";
import { z } from "zod";

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
): Promise<NextResponse> {
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

    // Validate ID
    const { id } = await params;
    if (!id || typeof id !== "string") {
      return NextResponse.json({ error: "Invalid resume ID" }, { status: 400 });
    }

    // Get resume
    const service = new ResumeService();
    const resume = await service.getResumeById(id, session.user.id);

    return NextResponse.json({ success: true, data: resume });
  } catch (error) {
    console.error("Error fetching resume:", error);

    if (error instanceof Error) {
      if (error.message === "Resume not found") {
        return NextResponse.json(
          { error: "Resume not found" },
          { status: 404 }
        );
      }
      if (error.message === "Unauthorized access to resume") {
        return NextResponse.json({ error: "Unauthorized" }, { status: 403 });
      }
    }

    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}

export async function PUT(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
): Promise<NextResponse> {
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

    // Validate ID
    const { id } = await params;
    if (!id || typeof id !== "string") {
      return NextResponse.json({ error: "Invalid resume ID" }, { status: 400 });
    }

    // Parse and validate body
    const body: unknown = await request.json();

    // Update resume
    const service = new ResumeService();
    const resume = await service.updateResume(id, session.user.id, body);

    return NextResponse.json({ success: true, data: resume });
  } catch (error) {
    console.error("Error updating resume:", error);

    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { error: "Invalid input", details: error.issues },
        { status: 400 }
      );
    }

    if (error instanceof Error) {
      if (error.message === "Resume not found") {
        return NextResponse.json(
          { error: "Resume not found" },
          { status: 404 }
        );
      }
      if (error.message === "Unauthorized access to resume") {
        return NextResponse.json({ error: "Unauthorized" }, { status: 403 });
      }
    }

    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}

export async function DELETE(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
): Promise<NextResponse> {
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

    // Validate ID
    const { id } = await params;
    if (!id || typeof id !== "string") {
      return NextResponse.json({ error: "Invalid resume ID" }, { status: 400 });
    }

    // Delete resume
    const service = new ResumeService();
    await service.deleteResume(id, session.user.id);

    return NextResponse.json({
      success: true,
      message: "Resume deleted successfully",
    });
  } catch (error) {
    console.error("Error deleting resume:", error);

    if (error instanceof Error) {
      if (error.message === "Resume not found") {
        return NextResponse.json(
          { error: "Resume not found" },
          { status: 404 }
        );
      }
      if (error.message === "Unauthorized access to resume") {
        return NextResponse.json({ error: "Unauthorized" }, { status: 403 });
      }
    }

    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
