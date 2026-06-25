import { NextResponse } from "next/server";
import { getProjects } from "@/services/project.service";

export async function GET() {
  try {
    const projects = await getProjects();
    return NextResponse.json(projects);
  } catch (error) {
    console.error("Error in projects API route:", error);
    return NextResponse.json(
      { error: error.message || "Failed to fetch project data" },
      { status: 500 }
    );
  }
}
