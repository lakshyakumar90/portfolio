import { ArrowLeftIcon, Code2Icon, ExternalLinkIcon } from "lucide-react"
import type { Metadata } from "next"
import Link from "next/link"
import { notFound } from "next/navigation"

import { Button } from "@/components/ui/button"
import { Prose } from "@/components/ui/typography"
import { ProjectHeroMedia } from "@/features/portfolio/components/projects/project-hero-media"
import {
  getProjectBySlug,
  getProjectSlug,
  PROJECTS,
} from "@/features/portfolio/data/projects"
import { cn } from "@/lib/utils"

export async function generateStaticParams() {
  return PROJECTS.map((project) => ({ slug: getProjectSlug(project) }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const slug = (await params).slug
  const project = getProjectBySlug(slug)

  if (!project) return notFound()

  return {
    title: project.title,
    description:
      project.overview ??
      project.description ??
      `Details about ${project.title}.`,
  }
}

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const slug = (await params).slug
  const project = getProjectBySlug(slug)

  if (!project) {
    notFound()
  }

  const overviewText =
    project.overview ?? project.description ?? "No details provided yet."
  const timelineLabel = getTimelineLabel(project.period)

  return (
    <>
      <div className="flex items-center justify-between p-2 pl-4">
        <Button
          className="h-7 gap-2 rounded-lg px-0 font-mono text-muted-foreground transition-[color] hover:text-foreground"
          variant="link"
          asChild
        >
          <Link href="/projects">
            <ArrowLeftIcon />
            Projects
          </Link>
        </Button>

        <div className="flex items-center gap-2">
          <Button variant="secondary" size="sm" className="gap-2" asChild>
            <a
              href={project.liveDemoUrl ?? project.link}
              target="_blank"
              rel="noopener"
            >
              <ExternalLinkIcon className="size-4" />
              Live Demo
            </a>
          </Button>

          <Button variant="secondary" size="sm" className="gap-2" asChild>
            <a
              href={project.sourceCodeUrl ?? project.link}
              target="_blank"
              rel="noopener"
            >
              <Code2Icon className="size-4" />
              Source Code
            </a>
          </Button>
        </div>
      </div>

      <div className="screen-line-before screen-line-after">
        <div
          className={cn(
            "h-8",
            "before:absolute before:-left-[100vw] before:-z-1 before:h-full before:w-[200vw]",
            "before:bg-[repeating-linear-gradient(315deg,var(--pattern-foreground)_0,var(--pattern-foreground)_1px,transparent_0,transparent_50%)] before:bg-size-[10px_10px] before:[--pattern-foreground:var(--color-edge)]/56"
          )}
        />
      </div>

      <Prose className="px-4 py-4">
        {project.heroImage && (
          <ProjectHeroMedia
            title={project.title}
            imageUrl={project.heroImage}
            videoUrl={project.videoUrl}
          />
        )}

        <div className="screen-line-before screen-line-after">
        <div
          className={cn(
            "h-8",
            "before:absolute before:-left-[100vw] before:-z-1 before:h-full before:w-[200vw]",
            "before:bg-[repeating-linear-gradient(315deg,var(--pattern-foreground)_0,var(--pattern-foreground)_1px,transparent_0,transparent_50%)] before:bg-size-[10px_10px] before:[--pattern-foreground:var(--color-edge)]/56"
          )}
        />
      </div>

        <div className="not-prose mb-6 space-y-5 rounded-xl border border-edge bg-card/80 p-4 my-4">
          <div className="flex flex-wrap items-center gap-2">
            <span className="inline-flex items-center rounded-full border border-edge bg-secondary px-3 py-1 text-xs font-medium text-secondary-foreground">
              {project.status ?? "Completed"}
            </span>

            {project.skills.map((skill) => (
              <span
                key={skill}
                className="inline-flex items-center rounded-full border border-edge px-3 py-1 text-xs text-foreground"
              >
                {skill}
              </span>
            ))}

            {/* {project.skills.length > 3 && (
              <span className="inline-flex items-center rounded-full border border-edge px-3 py-1 text-xs text-muted-foreground">
                +{project.skills.length - 3} more
              </span>
            )} */}
          </div>

          <div className="space-y-3">
            <h1 className="text-3xl font-semibold tracking-tight max-sm:text-4xl">
              {project.title}
            </h1>
            <p className="max-w-4xl text-muted-foreground">
              {overviewText}
            </p>
          </div>

          <div className="grid overflow-hidden rounded-xl border border-edge sm:grid-cols-4">
            <MetaCell label="Timeline" value={timelineLabel} />
            <MetaCell label="Role" value={project.role ?? "Full Stack"} />
            <MetaCell label="Team" value={project.team ?? "Solo"} />
            <MetaCell label="Status" value={project.status ?? "Completed"} />
          </div>

          <div className="flex flex-wrap items-center gap-2">
            <Button variant="secondary" size="sm" className="gap-2" asChild>
              <a
                href={project.liveDemoUrl ?? project.link}
                target="_blank"
                rel="noopener"
              >
                <ExternalLinkIcon className="size-4" />
                Live Demo
              </a>
            </Button>

            <Button variant="outline" size="sm" className="gap-2" asChild>
              <a
                href={project.sourceCodeUrl ?? project.link}
                target="_blank"
                rel="noopener"
              >
                <Code2Icon className="size-4" />
                Source Code
              </a>
            </Button>
          </div>
        </div>

        <div className="screen-line-before screen-line-after">
        <div
          className={cn(
            "h-8",
            "before:absolute before:-left-[100vw] before:-z-1 before:h-full before:w-[200vw]",
            "before:bg-[repeating-linear-gradient(315deg,var(--pattern-foreground)_0,var(--pattern-foreground)_1px,transparent_0,transparent_50%)] before:bg-size-[10px_10px] before:[--pattern-foreground:var(--color-edge)]/56"
          )}
        />
      </div>

        <h2>Tech Stack</h2>
        <ul>
          {project.skills.map((skill) => (
            <li key={skill}>{skill}</li>
          ))}
        </ul>

        {project.offers && project.offers.length > 0 && (
          <>
            <h2>What This Project Offers</h2>
            <ul>
              {project.offers.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </>
        )}

        {project.whyBuilt && project.whyBuilt.length > 0 && (
          <>
            <h2>Why I Built This Project</h2>
            <ul>
              {project.whyBuilt.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </>
        )}

        {project.learnings && project.learnings.length > 0 && (
          <>
            <h2>After Launch &amp; Impact</h2>
            <ul>
              {project.learnings.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </>
        )}

        {project.futurePlans && project.futurePlans.length > 0 && (
          <>
            <h2>Future Plans</h2>
            <ul>
              {project.futurePlans.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </>
        )}
      </Prose>

      <div className="screen-line-before h-4 w-full" />
    </>
  )
}

function MetaCell({ label, value }: { label: string; value: string }) {
  return (
    <div className="space-y-1 border-r border-edge p-4 last:border-r-0 max-sm:border-b sm:last:border-b-0">
      <p className="text-xs text-muted-foreground">{label}</p>
      <p className="text-base font-medium">{value}</p>
    </div>
  )
}

function getTimelineLabel(period: { start: string; end?: string }) {
  const start = parseMonthYear(period.start)
  const end = period.end ? parseMonthYear(period.end) : new Date()

  if (!start || !end) {
    return period.end ? `${period.start} - ${period.end}` : `${period.start} - Present`
  }

  const months =
    (end.getFullYear() - start.getFullYear()) * 12 +
    (end.getMonth() - start.getMonth()) +
    1

  if (months <= 1) return "1 month"
  return `${months} months`
}

function parseMonthYear(value: string) {
  const [mm, yyyy] = value.split(".")
  if (!mm || !yyyy) return null
  const month = Number(mm)
  const year = Number(yyyy)
  if (!Number.isInteger(month) || !Number.isInteger(year)) return null
  if (month < 1 || month > 12) return null
  return new Date(year, month - 1, 1)
}
