"use client"

import { Button } from "@/components/ui/button"

import {
  PROJECT_FILTER_OPTIONS,
  useProjectFilters,
} from "./hooks/use-project-filters"

export function ProjectFilters() {
  const { selectedFilters, toggleFilter, clearFilters } = useProjectFilters()

  return (
    <div className="flex flex-wrap gap-2">
      {PROJECT_FILTER_OPTIONS.map((option) => {
        const isActive = selectedFilters.includes(option.value)

        return (
          <Button
            key={option.value}
            type="button"
            size="sm"
            variant={isActive ? "default" : "outline"}
            onClick={() => toggleFilter(option.value)}
          >
            {option.label}
          </Button>
        )
      })}

      {selectedFilters.length > 0 && (
        <Button type="button" size="sm" variant="ghost" onClick={clearFilters}>
          Clear
        </Button>
      )}
    </div>
  )
}
