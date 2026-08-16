import { NextResponse } from "next/server";
import { getProjectReadme } from "@/services/readme.service";

type RouteContext = {
  params: Promise<{
    repo: string;
  }>;
};

export async function GET(
  _request: Request,
  { params }: RouteContext,
): Promise<Response> {
  try {
    const { repo } = await params;

    const readme = await getProjectReadme(repo);

    return new NextResponse(readme, {
      status: 200,
      headers: {
        "Content-Type": "text/markdown; charset=utf-8",
      },
    });
  } catch (error: unknown) {
    console.error("Error fetching project README:", error);

    return NextResponse.json(
      {
        error:
          error instanceof Error
            ? error.message
            : "Failed to fetch project README",
      },
      { status: 500 }
    );
  }
}
