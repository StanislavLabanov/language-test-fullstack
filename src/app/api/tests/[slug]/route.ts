import { TestsId } from "@/types/tests";
import { NextRequest, NextResponse } from "next/server";
import { getLongTest } from "./longTest";
import { getShortTest } from "./shortTest";

export async function GET(
  _: NextRequest,
  { params }: { params: Promise<{ slug: string }> }
) {
  const testId = (await params).slug;
  const testData = testId === TestsId.ACCURATE ? getLongTest() : getShortTest();

  if (!testData) {
    return NextResponse.json({ error: "Test not found" }, { status: 404 });
  }

  return NextResponse.json(testData, { status: 200 });
}
