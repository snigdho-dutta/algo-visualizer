import { useContext } from "react"
import { TileContext } from "../context/TileContext"

export const useTileContext = () => {
  const ctx = useContext(TileContext)
  if (!ctx) {
    throw new Error('useTileContext must be used within a TileContextProvider')
  }
  return ctx
}
