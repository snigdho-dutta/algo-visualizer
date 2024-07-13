import { Grid, Speed } from '../types/types'
import { SPEEDS, TILE_STYLE } from './contants'
import { setTileStyle, sleep } from './helpers'

export default async function destroyWall(
  grid: Grid,
  row: number,
  col: number,
  isRight: number,
  speed: Speed
) {
  const s = async () =>
    await sleep(20 * SPEEDS.find((s) => s.value === speed)!.value - 5)
  if (isRight && grid[row][col + 1]) {
    grid[row][col + 1].isWall = false
    setTileStyle(row, col + 1, TILE_STYLE)
    await s()
  } else if (grid[row + 1]) {
    grid[row + 1][col].isWall = false
    setTileStyle(row + 1, col, TILE_STYLE)
    await s()
  } else {
    grid[row][col].isWall = false
    setTileStyle(row, col, TILE_STYLE)
    await s()
  }
}
