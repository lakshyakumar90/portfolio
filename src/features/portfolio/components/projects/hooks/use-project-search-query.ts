import { useQueryState } from "nuqs"

export function useProjectSearchQuery() {
  const [query, setQuery] = useQueryState("project-q", {
    defaultValue: "",
  })

  return { query, setQuery }
}
