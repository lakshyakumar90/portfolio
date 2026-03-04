export type Project = {
  /** Stable unique identifier (used as list key/anchor). */
  id: string
  /** URL-safe slug for /projects/[slug]. Falls back to `id` when omitted. */
  slug?: string
  title: string
  /**
   * Project period for display and sorting.
   * Use "MM.YYYY" format. Omit `end` for ongoing projects.
   */
  period: {
    /** Start date (e.g., "05.2025"). */
    start: string
    /** End date; leave undefined for "Present". */
    end?: string
  }
  /** Public URL (site, repository, demo, or video). */
  link: string
  /** Tags/technologies for chips or filtering. */
  skills: string[]
  /** Optional rich description; Markdown and line breaks supported. */
  description?: string
  /** Logo image URL (absolute or path under /public). */
  logo?: string
  /** Optional hero image shown on project detail page. */
  heroImage?: string
  /** Optional project video URL shown in a modal from the hero image. */
  videoUrl?: string
  /** Optional role played in the project (e.g. Full Stack). */
  role?: string
  /** Optional team composition (e.g. Solo, Team of 3). */
  team?: string
  /** Optional delivery status label (e.g. Completed, In Progress). */
  status?: string
  /** Optional public demo URL. */
  liveDemoUrl?: string
  /** Optional source code URL. */
  sourceCodeUrl?: string
  /** Optional short summary paragraph for project detail page. */
  overview?: string
  /** Optional section: what the project offers. */
  offers?: string[]
  /** Optional section: motivation behind building the project. */
  whyBuilt?: string[]
  /** Optional section: lessons and outcomes. */
  learnings?: string[]
  /** Optional section: next roadmap items. */
  futurePlans?: string[]
  /** Whether the project card is expanded by default in the UI. */
  isExpanded?: boolean
}
