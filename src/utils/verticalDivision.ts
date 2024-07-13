import { Grid, Speed, Tile } from '../types/types'
import { SPEEDS, WALL_TILE_STYLE } from './contants'
import { randInt, isTileEqual, setTileStyle, sleep } from './helpers'
import recursiveDivision from '../lib/algorithms/maze/recursiveDivision'

export default async function verticalDivision(
  grid: Grid,
  startTile: Tile,
  endTile: Tile,
  row: number,
  col: number,
  height: number,
  width: number,
  speed: Speed
) {
  // Col To Construct Wall
  const wallColIdx = col + randInt(0, width - 1) * 2 + 1
  // Row To Leave a Passage
  const rowPassage = row + randInt(0, height) * 2
  // Create Vertical Wall
  for (let i = 0; i < 2 * height - 1; i++) {
    if (rowPassage !== row + i) {
      if (
        !isTileEqual(grid[row + i][wallColIdx], startTile) &&
        !isTileEqual(grid[row + i][wallColIdx], endTile)
      ) {
        grid[row + i][wallColIdx].isWall = true
        setTileStyle(row + i, wallColIdx, WALL_TILE_STYLE)
        await sleep(10 * SPEEDS.find((s) => s.value === speed)!.value - 5)
      }
    }
  }

  // Recursively Divide The Sections Of The Vertical Wall
  await recursiveDivision({
    grid,
    startTile,
    endTile,
    row,
    col,
    height,
    width: (wallColIdx - col + 1) / 2,
    speed,
  })

  await recursiveDivision({
    grid,
    startTile,
    endTile,
    row,
    col: wallColIdx + 1,
    height,
    width: width - (wallColIdx - col + 1) / 2,
    speed,
  })
}
