import { Grid, Speed, Tile } from '../../../types/types'
import { MAX_COLS, MAX_ROWS } from '../../../utils/contants'
import createWall from '../../../utils/createWall'
import destroyWall from '../../../utils/destroyWall'
import { isTileEqual, randInt, sleep } from '../../../utils/helpers'

export default async function binaryTree(
  grid: Grid,
  startTile: Tile,
  endTile: Tile,
  speed: Speed
) {
  createWall(startTile, endTile, speed)
  await sleep(MAX_ROWS * MAX_COLS)

  for (const tiles of grid) {
    for (const tile of tiles) {
      if (tile.row % 2 === 0 || tile.col % 2 === 0) {
        if (!isTileEqual(tile, startTile) || !isTileEqual(tile, endTile)) {
          tile.isWall = true
        }
      }
    }
  }
  for (let r = 1; r < MAX_ROWS; r += 2) {
    for (let c = 1; c < MAX_COLS; c += 2) {
      if (r === MAX_ROWS - 2 && c === MAX_COLS - 2) {
        continue
      } else if (r == MAX_ROWS - 2) {
        await destroyWall(grid, r, c, 1, speed)
      } else if (c == MAX_COLS - 2) {
        await destroyWall(grid, r, c, 0, speed)
      } else {
        await destroyWall(grid, r, c, randInt(0, 2), speed)
      }
    }
  }
}
