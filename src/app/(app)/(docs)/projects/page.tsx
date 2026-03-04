import type { Metadata } from "next"
import { Suspense } from "react"

import { PROJECTS } from "@/features/portfolio/data/projects"
import { ProjectFilters } from "@/features/portfolio/components/projects/project-filters"
import { ProjectList } from "@/features/portfolio/components/projects/project-list"
import { ProjectListWithSearch } from "@/features/portfolio/components/projects/project-list-with-search"
import { ProjectSearchInput } from "@/features/portfolio/components/projects/project-search-input"

export const metadata: Metadata = {
  title: "Projects",
  description: "A complete list of projects with detailed case studies.",
}

export default function Page() {
  return (
    <div className="min-h-svh">
      <div className="screen-line-after px-4">
        <h1 className="text-3xl leading-none font-semibold tracking-tight">
          Projects
        </h1>
      </div>

      <div className="p-4">
        <p className="font-mono text-sm text-balance text-muted-foreground">
          Explore all projects and open each one for the full breakdown.
        </p>
      </div>

      <div className="screen-line-before screen-line-after p-2">
        <Suspense
          fallback={
            <div className="flex h-9 w-full rounded-lg border border-input shadow-xs dark:bg-input/30" />
          }
        >
          <ProjectSearchInput />
        </Suspense>
      </div>

      <div className="screen-line-after p-2">
        <Suspense fallback={<div className="h-7" />}>
          <ProjectFilters />
        </Suspense>
      </div>

      <Suspense fallback={<ProjectList projects={PROJECTS} />}>
        <ProjectListWithSearch projects={PROJECTS} />
      </Suspense>

      <div className="h-4" />
    </div>
  )
}
