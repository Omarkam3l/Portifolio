import { NextResponse } from "next/server";
import fs from "fs/promises";
import path from "path";
import initialContent from "@/data/portfolio-content.json";

const CONTENT_FILE_PATH = path.join(process.cwd(), "src", "data", "portfolio-content.json");

export async function GET() {
  try {
    const fileData = await fs.readFile(CONTENT_FILE_PATH, "utf-8");
    const json = JSON.parse(fileData);
    return NextResponse.json(json);
  } catch (error) {
    console.warn("Failed to read from file, falling back to bundled data:", error);
    return NextResponse.json(initialContent);
  }
}

export async function POST(request: Request) {
  try {
    const updatedContent = await request.json();

    if (!updatedContent || typeof updatedContent !== "object") {
      return NextResponse.json({ error: "Invalid content format" }, { status: 400 });
    }

    // Write permanently to src/data/portfolio-content.json
    await fs.writeFile(
      CONTENT_FILE_PATH,
      JSON.stringify(updatedContent, null, 2),
      "utf-8"
    );

    return NextResponse.json({
      success: true,
      message: "Changes permanently saved to codebase.",
    });
  } catch (error) {
    console.error("Error writing to content file:", error);
    return NextResponse.json(
      { error: "Failed to write to file system", details: String(error) },
      { status: 500 }
    );
  }
}
