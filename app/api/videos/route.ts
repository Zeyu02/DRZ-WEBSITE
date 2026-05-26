import fs from 'fs'
import path from 'path'
import { NextResponse } from 'next/server'

export async function GET() {
  const publicDir = path.join(process.cwd(), 'public', 'vids')
  const fallbackDir = path.join(process.cwd(), 'vids')
  const videoDir = fs.existsSync(publicDir) ? publicDir : fallbackDir

  try {
    const files = await fs.promises.readdir(videoDir)
    const videos = files
      .filter((f) => /\.(mp4|webm|ogg|mov)$/i.test(f))
      .map((f) => `/vids/${encodeURIComponent(f)}`)
    return NextResponse.json(videos)
  } catch {
    return NextResponse.json([])
  }
}
