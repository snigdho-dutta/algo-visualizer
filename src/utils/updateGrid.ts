import { Grid } from '../types/types'

export default function updateGrid(grid: Grid, row: number, col: number) {
  // For Instant State Update
  const newGrid = grid.slice()
  newGrid[row][col].isWall = true
  return newGrid
}
