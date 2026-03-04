import { RssIcon } from "lucide-react"

import { SOURCE_CODE_GITHUB_URL } from "@/config/site"
import { SOCIAL_LINKS } from "@/features/portfolio/data/social-links"
import { cn } from "@/lib/utils"

import { DuckFollowerToggle } from "./duck-follower-toggle"
import { Icons } from "./icons"

const FOOTER_SOCIAL_ICON_BY_TITLE = {
  github: Icons.github,
  linkedin: Icons.linkedin,
  x: Icons.x,
  twitter: Icons.x,
} as const

export function SiteFooter() {
  const creatorXLink =
    SOCIAL_LINKS.find((item) => item.title.toLowerCase().includes("x"))?.href ??
    SOCIAL_LINKS.find((item) => item.title.toLowerCase().includes("twitter"))
      ?.href ??
    "https://x.com/lakshyakumar90"

  const footerSocialLinks = SOCIAL_LINKS.filter((item) =>
    Object.keys(FOOTER_SOCIAL_ICON_BY_TITLE).some((key) =>
      item.title.toLowerCase().includes(key)
    )
  )

  return (
    <footer className="max-w-screen overflow-x-hidden px-2">
      <div className="screen-line-before mx-auto border-x border-edge pt-4 md:max-w-3xl">
        <p className="mb-1 px-4 text-center font-mono text-sm text-balance text-muted-foreground">
          Inspired by tailwindcss.com & ui.shadcn.com
        </p>

        <p className="mb-4 px-4 text-center font-mono text-sm text-balance text-muted-foreground">
          Built by{" "}
          <a
            className="link transition-[color] hover:text-foreground"
            href={creatorXLink}
            target="_blank"
            rel="noopener"
          >
            Lakshya Kumar
          </a>
          . The source code is available on{" "}
          <a
            className="link transition-[color] hover:text-foreground"
            href={SOURCE_CODE_GITHUB_URL}
            target="_blank"
            rel="noopener"
          >
            GitHub
          </a>
          .
        </p>

        <div className="screen-line-before flex justify-center gap-2 py-3 font-mono text-xs text-muted-foreground sm:hidden">
          <a
            className="font-medium transition-[color] hover:text-foreground"
            href="/llms.txt"
            target="_blank"
            rel="noopener noreferrer"
          >
            llms.txt
          </a>
        </div>

        <div className="screen-line-before screen-line-after flex w-full before:z-1 after:z-1">
          <div className="mx-auto flex items-center justify-center gap-3 border-x border-edge bg-background px-4">
            <a
              className="flex font-mono text-xs font-medium text-muted-foreground transition-[color] hover:text-foreground max-sm:hidden"
              href="/llms.txt"
              target="_blank"
              rel="noopener noreferrer"
            >
              llms.txt
            </a>

            <Separator className="max-sm:hidden" />

            {footerSocialLinks.map((item) => {
              const normalizedTitle = item.title.toLowerCase()
              const key = Object.keys(FOOTER_SOCIAL_ICON_BY_TITLE).find((name) =>
                normalizedTitle.includes(name)
              )

              if (!key) return null

              const Icon =
                FOOTER_SOCIAL_ICON_BY_TITLE[
                  key as keyof typeof FOOTER_SOCIAL_ICON_BY_TITLE
                ]

              return (
                <a
                  key={item.href}
                  className="flex items-center text-muted-foreground transition-[color] hover:text-foreground"
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Icon className="size-4" />
                  <span className="sr-only">{item.title}</span>
                </a>
              )
            })}

            <Separator />

            <DuckFollowerToggle />

            <Separator />

            <a
              className="flex items-center text-muted-foreground transition-[color] hover:text-foreground"
              href="/rss"
              target="_blank"
              rel="noopener noreferrer"
            >
              <RssIcon className="size-4" />
              <span className="sr-only">RSS</span>
            </a>
          </div>
        </div>
      </div>
      <div className="pb-[env(safe-area-inset-bottom,0px)]">
        <div className="flex h-2" />
      </div>
    </footer>
  )
}

function Separator({ className, ...props }: React.ComponentProps<"div">) {
  return <div className={cn("flex h-11 w-px bg-edge", className)} {...props} />
}
