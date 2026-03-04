import { useMemo } from "react"
import { useQueryState } from "nuqs"

export const PROJECT_FILTER_OPTIONS = [
  { label: "Fullstack", value: "fullstack" },
  { label: "Backend", value: "backend" },
  { label: "Frontend", value: "frontend" },
  { label: "Upcoming", value: "upcoming" },
  { label: "Ongoing", value: "ongoing" },
  { label: "Completed", value: "completed" },
] as const

function parseFilters(value: string) {
  if (!value) return []
  return value
    .split(",")
    .map((item) => item.trim())
    .filter(Boolean)
}

export function useProjectFilters() {
  const [rawFilters, setRawFilters] = useQueryState("filters", {
    defaultValue: "",
  })

  const selectedFilters = useMemo(
    () =>
      parseFilters(rawFilters).filter((filter, index, items) => {
        return items.indexOf(filter) === index
      }),
    [rawFilters]
  )

  const setSelectedFilters = (filters: string[]) => {
    setRawFilters(filters.join(","))
  }

  const toggleFilter = (filter: string) => {
    if (selectedFilters.includes(filter)) {
      setSelectedFilters(selectedFilters.filter((item) => item !== filter))
      return
    }

    setSelectedFilters([...selectedFilters, filter])
  }

  const clearFilters = () => {
    setRawFilters(null)
  }

  return {
    selectedFilters,
    toggleFilter,
    clearFilters,
  }
}
