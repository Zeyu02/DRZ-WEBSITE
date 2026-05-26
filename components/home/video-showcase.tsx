"use client"

import { useEffect, useRef, useState } from "react"

export default function VideoShowcase() {
  const [videos, setVideos] = useState<string[]>([])
  const [index, setIndex] = useState(0)
  const [muted, setMuted] = useState(true)
  const videoRef = useRef<HTMLVideoElement | null>(null)

  useEffect(() => {
    let mounted = true
    fetch("/api/videos")
      .then((response) => response.json())
      .then((list: string[]) => {
        if (mounted && Array.isArray(list) && list.length > 0) {
          setVideos(list)
        }
      })
      .catch(() => {})
    return () => {
      mounted = false
    }
  }, [])

  useEffect(() => {
    if (!videos.length || !videoRef.current) return
    const current = videos[index] ?? videos[0]
    videoRef.current.src = current
    videoRef.current.load()
    videoRef.current.muted = muted
    videoRef.current.play().catch(() => {})
  }, [videos, index, muted])

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.muted = muted
      videoRef.current.volume = 1
    }
  }, [muted])

  const handleEnded = () => {
    if (!videos.length) return
    setIndex((current) => (current + 1) % videos.length)
  }

  if (!videos.length) {
    return (
      <div className="video-placeholder rounded-lg border border-black/5 bg-black/5 h-48 flex items-center justify-center text-sm text-black/50">
        No videos found. Place MP4/WebM files in public/vids.
      </div>
    )
  }

  return (
    <div className="video-stack rounded-lg overflow-hidden relative bg-black">
      <video
        ref={videoRef}
        className="video-player absolute inset-0 w-full h-full object-cover"
        muted={muted}
        controls
        onClick={() => setMuted(false)}
        playsInline
        onEnded={handleEnded}
      />
      <div className="video-actions">
        <button
          type="button"
          className="video-action-button"
          onClick={() => setMuted((value) => !value)}
        >
          {muted ? "Tap for sound" : "Mute"}
        </button>
      </div>
    </div>
  )
}
