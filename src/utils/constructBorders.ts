import { Grid, Tile } from '../types/types'
import { MAX_COLS, MAX_ROWS, SLEEP_TIME, WALL_TILE_STYLE } from './contants'
import { isTileEqual, setTileStyle, sleep } from './helpers'

export default async function constructBorders(
  grid: Grid,
  startTile: Tile,
  endTile: Tile
) {
  const shapes = [
    { row: 0, col: 1 },
    { row: 1, col: 0 },
    { row: 0, col: -1 },
    { row: -1, col: 0 },
  ]
  let row = 0,
    col = 0

  for (let i = 0; i < shapes.length; i++) {
    const direction = shapes[i]
    while (
      row + direction.row >= 0 &&
      row + direction.row < MAX_ROWS &&
      col + direction.col >= 0 &&
      col + direction.col < MAX_COLS
    ) {
      row += direction.row
      col += direction.col
      if (
        !isTileEqual(grid[row][col], startTile) &&
        !isTileEqual(grid[row][col], endTile)
      ) {
        grid[row][col].isWall = true
        setTileStyle(row, col, WALL_TILE_STYLE)
      }

      await sleep(SLEEP_TIME)
    }
    if (row < 0) row = 0
    if (col < 0) col = 0
    if (row >= MAX_ROWS) row = MAX_ROWS - 1
    if (col >= MAX_COLS) col = MAX_COLS - 1
  }
}
