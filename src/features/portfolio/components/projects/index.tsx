import { ArrowRightIcon } from "lucide-react"
import Link from "next/link"

import { Button } from "@/components/ui/button"

import { PROJECTS } from "../../data/projects"
import { Panel, PanelHeader, PanelTitle, PanelTitleSup } from "../panel"
import { ProjectListItem } from "./project-list-item"

const MAX_HOME_PROJECTS = 4

export function Projects() {
  const visibleProjects = PROJECTS.slice(0, MAX_HOME_PROJECTS)

  return (
    <Panel id="projects">
      <PanelHeader>
        <PanelTitle>
          Projects
          <PanelTitleSup>({PROJECTS.length})</PanelTitleSup>
        </PanelTitle>
      </PanelHeader>

      <div className="relative py-4">
        <div className="pointer-events-none absolute inset-0 -z-1 grid grid-cols-1 gap-4 max-sm:hidden sm:grid-cols-2">
          <div className="border-r border-edge"></div>
          <div className="border-l border-edge"></div>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          {visibleProjects.map((project, index) => (
            <ProjectListItem
              key={project.id}
              project={project}
              shouldPreloadImage={index <= 4}
            />
          ))}
        </div>
      </div>

      <div className="screen-line-before flex justify-center py-2">
        <Button className="px-3" variant="default" asChild>
          <Link href="/projects">
            All Projects
            <ArrowRightIcon />
          </Link>
        </Button>
      </div>
    </Panel>
  )
}
