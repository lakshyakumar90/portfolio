import { USER } from "@/features/portfolio/data/user"
import type { NavItem } from "@/types/nav"

export type RegistryVisibility = "public" | "private"

const registryVisibilityFromEnv = process.env.REGISTRY_VISIBILITY
export const REGISTRY_VISIBILITY: RegistryVisibility =
  registryVisibilityFromEnv === "public" ? "public" : "private"
export const isRegistryPublic = REGISTRY_VISIBILITY === "public"

export const SITE_INFO = {
  name: USER.displayName,
  url: process.env.APP_URL || "https://lakshyakumar.in",
  ogImage: USER.ogImage,
  description: USER.bio,
  keywords: USER.keywords,
}

export const META_THEME_COLORS = {
  light: "#ffffff",
  dark: "#09090b",
}

export const MAIN_NAV: NavItem[] = [
  {
    title: "Home",
    href: "/",
  },
  ...(isRegistryPublic
    ? [
        {
          title: "UI",
          href: "/components",
        },
      ]
    : []),
  {
    title: "Blog",
    href: "/blog",
  },
  {
    title: "Projects",
    href: "/projects",
  },
]

export const GITHUB_USERNAME = "lakshyakumar90"
export const SOURCE_CODE_GITHUB_REPO = "lakshyakumar90/portfolio"
export const SOURCE_CODE_GITHUB_URL = "https://github.com/lakshyakumar90/portfolio"

export const UTM_PARAMS = {
  utm_source: "lakshyakumar.in",
}
