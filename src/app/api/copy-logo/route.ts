import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

export async function GET() {
  try {
    const sourcePath = 'C:\\Users\\amanr\\.gemini\\antigravity\\brain\\488c59a1-6fb8-4b1c-b500-e51ca97d9cdd\\media__1776007889515.png';
    // Fallback path just in case
    const altSourcePath = 'C:\\Users\\amanr\\.gemini\\antigravity\\brain\\488c59a1-6fb8-4b1c-b500-e51ca97d9cdd\\media__1776001626932.jpg';
    
    const destPath = path.join(process.cwd(), 'public', 'images', 'logo-wide.png');
    
    if (fs.existsSync(sourcePath)) {
      fs.copyFileSync(sourcePath, destPath);
      return NextResponse.json({ success: true, copiedFrom: sourcePath, dest: destPath });
    } else if (fs.existsSync(altSourcePath)) {
      fs.copyFileSync(altSourcePath, destPath);
      return NextResponse.json({ success: true, copiedFrom: altSourcePath, dest: destPath });
    } else {
      return NextResponse.json({ success: false, error: "Underlying file not found." });
    }
    
  } catch (error: any) {
    return NextResponse.json({ success: false, error: error.message });
  }
}
