"use client"

import { MousePointer2Icon } from "lucide-react"

import { useDuckFollowerVisibility } from "@/hooks/use-duck-follower-visibility"

export function DuckFollowerToggle() {
  const [isVisible, setIsVisible] = useDuckFollowerVisibility()

  return (
    <button
      type="button"
      onClick={() => setIsVisible((value) => !value)}
      className="inline-flex items-center gap-1.5 font-mono text-xs font-medium text-muted-foreground transition-[color] hover:text-foreground"
      aria-pressed={isVisible}
      aria-label={isVisible ? "Disable duck follower" : "Enable duck follower"}
      title={isVisible ? "Disable duck follower" : "Enable duck follower"}
    >
      <MousePointer2Icon className="size-3.5" />
      {isVisible ? "Duck On" : "Duck Off"}
    </button>
  )
}
