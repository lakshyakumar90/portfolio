"use client"

import { PlayIcon } from "lucide-react"
import Image from "next/image"
import { useMemo, useState } from "react"

import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog"

type ProjectHeroMediaProps = {
  title: string
  imageUrl: string
  videoUrl?: string
}

export function ProjectHeroMedia({
  title,
  imageUrl,
  videoUrl,
}: ProjectHeroMediaProps) {
  const [open, setOpen] = useState(false)
  const video = useMemo(() => getVideoConfig(videoUrl), [videoUrl])

  return (
    <>
      <figure className="relative mb-4 overflow-hidden rounded-xl border border-edge">
        <Image
          src={imageUrl}
          alt={`${title} hero image`}
          width={1400}
          height={800}
          className="h-[400px] w-full object-cover"
          unoptimized
        />

        {video && (
          <button
            type="button"
            aria-label={`Play ${title} video`}
            onClick={() => setOpen(true)}
            className="absolute inset-0 flex items-center justify-center bg-black/20 transition-colors hover:bg-black/30 focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
          >
            <span className="inline-flex size-16 items-center justify-center rounded-full bg-background/90 text-foreground shadow-lg ring-1 ring-black/10">
              <PlayIcon className="size-7 fill-current" />
            </span>
          </button>
        )}
      </figure>

      {video && (
        <Dialog open={open} onOpenChange={setOpen}>
          <DialogContent className="max-w-5xl border-edge bg-black p-0">
            <DialogTitle className="sr-only">{title} video</DialogTitle>
            {open && (
              <>
                {video.type === "youtube" && (
                  <iframe
                    className="aspect-video w-full"
                    src={video.embedUrl}
                    title={`${title} video`}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                  />
                )}

                {video.type === "file" && (
                  <video
                    className="aspect-video w-full"
                    src={video.url}
                    controls
                    autoPlay
                    playsInline
                    preload="metadata"
                  />
                )}

                {video.type === "iframe" && (
                  <iframe
                    className="aspect-video w-full"
                    src={video.url}
                    title={`${title} video`}
                    allow="autoplay; fullscreen; picture-in-picture"
                    allowFullScreen
                  />
                )}
              </>
            )}
          </DialogContent>
        </Dialog>
      )}
    </>
  )
}

type VideoConfig =
  | { type: "youtube"; embedUrl: string }
  | { type: "file"; url: string }
  | { type: "iframe"; url: string }

function getVideoConfig(videoUrl?: string): VideoConfig | null {
  if (!videoUrl) return null

  const youtubeId = getYouTubeVideoId(videoUrl)
  if (youtubeId) {
    return {
      type: "youtube",
      embedUrl: `https://www.youtube.com/embed/${youtubeId}?autoplay=1&rel=0`,
    }
  }

  if (isVideoFile(videoUrl)) {
    return { type: "file", url: videoUrl }
  }

  return { type: "iframe", url: videoUrl }
}

function isVideoFile(url: string) {
  return /\.(mp4|webm|ogg)(?:$|[?#])/i.test(url)
}

function getYouTubeVideoId(url: string) {
  try {
    const parsed = new URL(url, "https://localhost")
    const host = parsed.hostname.replace(/^www\./, "")

    if (host === "youtu.be") {
      const id = parsed.pathname.split("/").filter(Boolean)[0]
      return id || null
    }

    if (host === "youtube.com" || host === "m.youtube.com") {
      if (parsed.pathname === "/watch") {
        return parsed.searchParams.get("v")
      }

      if (parsed.pathname.startsWith("/embed/")) {
        const id = parsed.pathname.split("/")[2]
        return id || null
      }
    }

    return null
  } catch {
    return null
  }
}
