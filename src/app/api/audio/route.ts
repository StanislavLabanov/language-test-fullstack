import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

export async function GET() {
  const audioDir = path.join(process.cwd(), "public", "audio");
  const files = fs.readdirSync(audioDir);
  const audioFiles = files.map((file) => `/audio/${file}`);

  return NextResponse.json(audioFiles);
}
