import { NextResponse } from "next/server";
import { getProjectReadme } from "@/services/readme.service";

export async function GET(request, { params }) {
  try {
    const { repo } = await params;

    const readme = await getProjectReadme(repo);

    return new NextResponse(readme, {
      status: 200,
      headers: {
        "Content-Type": "text/markdown; charset=utf-8",
      },
    });
  } catch (error) {
    console.error("Error fetching project README:", error);

    return NextResponse.json(
      {
        error: error.message || "Failed to fetch project README",
      },
      { status: 500 }
    );
  }
}