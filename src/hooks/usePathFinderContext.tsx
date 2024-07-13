import { useContext } from "react"
import { PathFinderContext } from "../context/PathFinderContext"
export const usePathFinderContext = () => {
  const ctx = useContext(PathFinderContext)
  if (!ctx) {
    throw new Error(
      'usePathFinderContext must be used within a PathFinderProvider'
    )
  }
  return ctx
}
