import type { Project } from "@/features/portfolio/types/projects"

import { useProjectFilters } from "./use-project-filters"
import { useProjectSearchQuery } from "./use-project-search-query"

const normalize = (text: string) => text.toLowerCase().replace(/\s+/g, "")

const matchesQuery = (project: Project, normalizedQuery: string) => {
  const normalizedTitle = normalize(project.title)
  const normalizedDescription = normalize(project.description ?? "")
  const normalizedOverview = normalize(project.overview ?? "")
  const normalizedRole = normalize(project.role ?? "")
  const normalizedSkills = normalize(project.skills.join(" "))

  return (
    normalizedTitle.includes(normalizedQuery) ||
    normalizedDescription.includes(normalizedQuery) ||
    normalizedOverview.includes(normalizedQuery) ||
    normalizedRole.includes(normalizedQuery) ||
    normalizedSkills.includes(normalizedQuery)
  )
}

const searchProjects = (projects: Project[], query: string | null) => {
  if (!query) return projects

  const normalizedQuery = normalize(query)
  return projects.filter((project) => matchesQuery(project, normalizedQuery))
}

const getStatusToken = (project: Project) => {
  const normalizedStatus = normalize(project.status ?? "")

  if (
    normalizedStatus.includes("upcoming") ||
    normalizedStatus.includes("planned")
  ) {
    return "upcoming"
  }

  if (
    normalizedStatus.includes("ongoing") ||
    normalizedStatus.includes("progress") ||
    normalizedStatus.includes("active")
  ) {
    return "ongoing"
  }

  if (
    normalizedStatus.includes("completed") ||
    normalizedStatus.includes("done") ||
    normalizedStatus.includes("shipped")
  ) {
    return "completed"
  }

  return project.period.end ? "completed" : "ongoing"
}

const getProjectFilterTokens = (project: Project) => {
  const tokens = new Set<string>()
  const normalizedRole = normalize(project.role ?? "")
  const normalizedSkills = project.skills.map((skill) => normalize(skill))

  const isFullstack =
    normalizedRole.includes("fullstack") ||
    normalizedRole.includes("full-stack") ||
    normalizedRole.includes("fullstackdeveloper")

  const isFrontend =
    isFullstack ||
    normalizedRole.includes("frontend") ||
    normalizedSkills.some(
      (skill) =>
        skill.includes("react") ||
        skill.includes("next") ||
        skill.includes("tailwind") ||
        skill.includes("ui")
    )

  const isBackend =
    isFullstack ||
    normalizedRole.includes("backend") ||
    normalizedSkills.some(
      (skill) =>
        skill.includes("node") ||
        skill.includes("express") ||
        skill.includes("database") ||
        skill.includes("api")
    )

  if (isFullstack) tokens.add("fullstack")
  if (isFrontend) tokens.add("frontend")
  if (isBackend) tokens.add("backend")

  tokens.add(getStatusToken(project))

  return tokens
}

const filterProjects = (projects: Project[], selectedFilters: string[]) => {
  if (!selectedFilters.length) return projects

  return projects.filter((project) => {
    const projectTokens = getProjectFilterTokens(project)
    return selectedFilters.every((filter) => projectTokens.has(filter))
  })
}

export function useFilteredProjects(projects: Project[]) {
  const { query } = useProjectSearchQuery()
  const { selectedFilters } = useProjectFilters()
  const searchedProjects = searchProjects(projects, query)
  return filterProjects(searchedProjects, selectedFilters)
}
