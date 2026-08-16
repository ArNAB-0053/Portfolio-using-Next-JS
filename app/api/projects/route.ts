import { NextResponse } from "next/server";
import { getProjects } from "@/services/project.service";

export async function GET(): Promise<NextResponse> {
  try {
    const projects = await getProjects();
    return NextResponse.json(projects);
  } catch (error: unknown) {
    console.error("Error in projects API route:", error);
    return NextResponse.json(
      {
        error: error instanceof Error ? error.message : "Failed to fetch project data",
      },
      { status: 500 }
    );
  }
}
