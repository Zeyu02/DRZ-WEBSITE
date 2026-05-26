"use client"

import { useEffect, useState } from "react"
import { usePathname } from "next/navigation"
import UnicornScene from "unicornstudio-react"
import HeroCta from "./hero-cta"
import HeroHeader from "./hero-header"

export default function Hero() {
  const [sceneKey, setSceneKey] = useState(0)
  const pathname = usePathname()

  useEffect(() => {
    const refreshMs = 2 * 60 * 1000

    function handleVisibilityChange() {
      if (document.visibilityState === "visible") {
        setSceneKey((current) => current + 1)
      }
    }

    window.addEventListener("focus", handleVisibilityChange)
    document.addEventListener("visibilitychange", handleVisibilityChange)

    const intervalId = window.setInterval(() => {
      if (document.visibilityState === "visible") {
        setSceneKey((current) => current + 1)
      }
    }, refreshMs)

    return () => {
      window.removeEventListener("focus", handleVisibilityChange)
      document.removeEventListener("visibilitychange", handleVisibilityChange)
      window.clearInterval(intervalId)
    }
  }, [])

  useEffect(() => {
    setSceneKey((current) => current + 1)
  }, [pathname])

  return (
    <section className="hero-shell relative min-h-screen overflow-hidden">
      <div className="hero-fallback absolute inset-0" aria-hidden />
      <div className="absolute inset-0">
        <UnicornScene
          key={sceneKey}
          projectId="ChqBbkpRHNv0QLmZxLxG"
          className="unicorn-scene"
          width="100%"
          height="100%"
          scale={1}
          dpi={1.5}
          sdkUrl="https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@2.1.12/dist/unicornStudio.umd.js"
        />
      </div>
      <div className="hero-overlay absolute inset-0" aria-hidden />
      <div className="relative z-10 mx-auto flex min-h-screen w-full max-w-7xl flex-col justify-between px-5 py-6 sm:px-8 lg:px-10">
        <HeroHeader />
        <HeroCta />
      </div>
    </section>
  )
}
