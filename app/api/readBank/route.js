import fs from 'fs';
import path from 'path';
import { NextResponse } from 'next/server';

export async function GET() {
  const filePath = path.join(process.cwd(), 'tests/testFolderForWrittenTests/Wonderland_Objets.abk');
  try {
    const data = await fs.promises.readFile(filePath);
    return NextResponse.json({ data: Array.from(data) });
  } catch (error) {
    console.error("Error reading file:", error);
    return NextResponse.json({ error: "Error reading file" }, { status: 500 });
  }
}