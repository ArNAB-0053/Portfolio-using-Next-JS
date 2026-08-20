import { revalidateTag } from "next/cache";
import { NextResponse } from "next/server";

// curl.exe -X POST -H "x-revalidate-secret: MY_REVALIDATE_SECRET" http://localhost:3000/api/revalidate

export async function POST(req: Request) {
  const secret = req.headers.get("x-revalidate-secret");
  if (secret !== process.env.REVALIDATE_SECRET) {
    return NextResponse.json({ revalidated: false }, { status: 401 });
  }
  revalidateTag("revalidate");
  return NextResponse.json({ revalidated: true, now: Date.now() });
}