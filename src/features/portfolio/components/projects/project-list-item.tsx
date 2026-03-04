import Image from "next/image"
import Link from "next/link"

import { Tag } from "@/components/ui/tag"
import { getProjectSlug } from "@/features/portfolio/data/projects"
import { cn } from "@/lib/utils"

import type { Project } from "../../types/projects"

export function ProjectListItem({
  project,
  shouldPreloadImage,
}: {
  project: Project
  shouldPreloadImage?: boolean
}) {
  const visibleSkills = project.skills.slice(0, 4)
  const remainingSkills = Math.max(0, project.skills.length - visibleSkills.length)

  const periodLabel = project.period.end
    ? `${project.period.start} - ${project.period.end}`
    : `${project.period.start} - Present`

  return (
    <Link
      href={`/projects/${getProjectSlug(project)}`}
      className={cn(
        "group flex flex-col gap-2 p-2",
        "max-sm:screen-line-before max-sm:screen-line-after",
        "sm:nth-[2n+1]:screen-line-before sm:nth-[2n+1]:screen-line-after"
      )}
    >
      {(project.heroImage || project.logo) && (
        <div className="relative select-none [&_img]:aspect-1200/630 [&_img]:rounded-xl">
          {project.heroImage ? (
            <Image
              src={project.heroImage}
              alt={`${project.title} cover`}
              width={1200}
              height={630}
              quality={100}
              priority={shouldPreloadImage}
              unoptimized
            />
          ) : (
            <div className="flex aspect-1200/630 items-center justify-center rounded-xl bg-muted">
              <Image
                src={project.logo!}
                alt={`${project.title} logo`}
                width={1200}
                height={630}
                quality={100}
                priority={shouldPreloadImage}
                className="h-20 w-20 rounded-none object-contain"
                unoptimized
              />
            </div>
          )}

          <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-black/10 ring-inset dark:ring-white/10" />
        </div>
      )}

      <div className="flex flex-col gap-2 p-2">
        <h3 className="text-lg leading-snug font-medium text-balance">
          {project.title}
        </h3>

        {project.description && (
          <p className="line-clamp-2 text-sm text-muted-foreground">
            {project.description}
          </p>
        )}

        <dl>
          <dt className="sr-only">Project period</dt>
          <dd className="text-sm text-muted-foreground">
            {periodLabel}
          </dd>
        </dl>

        {visibleSkills.length > 0 && (
          <ul className="flex flex-wrap items-center gap-1.5">
            {visibleSkills.map((skill) => (
              <li key={skill}>
                <Tag>{skill}</Tag>
              </li>
            ))}

            {remainingSkills > 0 && (
              <li>
                <Tag>+{remainingSkills} more</Tag>
              </li>
            )}
          </ul>
        )}
      </div>
    </Link>
  )
}
