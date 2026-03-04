"use client"

import type { Project } from "@/features/portfolio/types/projects"

import { useFilteredProjects } from "./hooks/use-filtered-projects"
import { ProjectList } from "./project-list"

export function ProjectListWithSearch({ projects }: { projects: Project[] }) {
  const filteredProjects = useFilteredProjects(projects)
  return <ProjectList projects={filteredProjects} />
}
