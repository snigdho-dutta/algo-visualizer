import { Grid, Speed, Tile } from '../types/types'
import { isTileEqual, randInt, setTileStyle, sleep } from './helpers'
import { SPEEDS, WALL_TILE_STYLE } from './contants'
import recursiveDivision from '../lib/algorithms/maze/recursiveDivision'

export default async function horizontalDivision(
  grid: Grid,
  startTile: Tile,
  endTile: Tile,
  row: number,
  col: number,
  height: number,
  width: number,
  speed: Speed
) {
  // Row to contruct Wall
  const wallRowIdx = row + randInt(0, height - 1) * 2 + 1
  // Column to leave a passage
  const colPassage = col + randInt(0, width) * 2
  // Create Horizontal Wall
  for (let i = 0; i < 2 * width - 1; i++) {
    if (colPassage !== col + i) {
      if (
        !isTileEqual(grid[wallRowIdx][col + i], startTile) &&
        !isTileEqual(grid[wallRowIdx][col + i], endTile)
      ) {
        grid[wallRowIdx][col + i].isWall = true
        setTileStyle(wallRowIdx, col + i, WALL_TILE_STYLE)
        await sleep(10 * SPEEDS.find((s) => s.value === speed)!.value - 5)
      }
    }
  }
  // Recursively Divide The Sections Of The Horizontal Wall
  await recursiveDivision({
    grid,
    startTile,
    endTile,
    row,
    col,
    height: (wallRowIdx - row + 1) / 2,
    width,
    speed,
  })
  await recursiveDivision({
    grid,
    startTile,
    endTile,
    row: wallRowIdx + 1,
    col,
    height: height - (wallRowIdx - row + 1) / 2,
    width,
    speed,
  })
}
