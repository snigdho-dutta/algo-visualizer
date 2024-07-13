import { Tile } from '../types/types'
import { MAX_COLS, MAX_ROWS } from './contants'

const retrieveHeuristicCost = (tile: Tile, endTile: Tile) => {
  const manhattanDistance = 1
  const r = Math.abs(tile.row - endTile.row)
  const c = Math.abs(tile.col - endTile.col)

  return manhattanDistance * (r + c)
}

export const initHeuristicCost = (grid: Tile[][], endTile: Tile) => {
  const heuristicCost = []
  for (let r = 0; r < MAX_ROWS; r++) {
    const rows = []
    for (let c = 0; c < MAX_COLS; c++) {
      rows.push(retrieveHeuristicCost(grid[r][c], endTile))
    }
    heuristicCost.push(rows)
  }
  return heuristicCost
}

export const initFunctionCost = () => {
  const functionCost = []
  for (let r = 0; r < MAX_ROWS; r++) {
    const rows = []
    for (let c = 0; c < MAX_COLS; c++) {
      rows.push(Infinity)
    }
    functionCost.push(rows)
  }
  return functionCost
}
