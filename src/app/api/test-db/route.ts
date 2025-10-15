import { NextResponse } from "next/server";
import { db } from "@/lib/db/connection";

export async function GET(): Promise<NextResponse> {
  try {
    // Test database connection
    const result = await db.execute("SELECT 1 as test");

    return NextResponse.json({
      success: true,
      message: "Database connection successful",
      data: result.rows[0],
    });
  } catch (error) {
    console.error("Database connection error:", error);
    return NextResponse.json(
      {
        success: false,
        message: "Database connection failed",
        error: error instanceof Error ? error.message : "Unknown error",
      },
      { status: 500 }
    );
  }
}
