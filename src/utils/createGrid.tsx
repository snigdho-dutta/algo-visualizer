import { Grid, Tile } from '../types/types'
import { MAX_COLS, MAX_ROWS } from './contants'

export default function createGrid(startTile: Tile, endTile: Tile) {
  const grid: Grid = []
  for (let row = 0; row < MAX_ROWS; row++) {
    grid.push([])
    for (let col = 0; col < MAX_COLS; col++) {
      grid[row].push({
        row,
        col,
        isStart: row === startTile.row && col === startTile.col,
        isEnd: row === endTile.row && col === endTile.col,
        isWall: false,
        isPath: false,
        isTraversed: false,
        parent: null,
        distance: Infinity,
      })
    }
  }
  return grid
}
