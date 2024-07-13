import { Speed, Tile } from '../types/types'
import { MAX_COLS, MAX_ROWS, SPEEDS, WALL_TILE_STYLE } from './contants'
import { setTileStyle } from './helpers'

export default function createWall(
  startTile: Tile,
  endTile: Tile,
  speed: Speed
) {
  console.log(SPEEDS)
  const delay = 6 * SPEEDS.find((s) => s.value === speed)!.value - 1
  console.log(delay)
  for (let row = 0; row < MAX_ROWS; row++) {
    setTimeout(() => {
      for (let col = 0; col < MAX_COLS; col++) {
        // Is Start or End Tile
        if (
          (row === startTile.row && col === startTile.col) ||
          (row === endTile.row && col === endTile.col)
        ) {
          continue
        }
        // Skip Odd Tiles
        if (row % 2 !== 0 && col % 2 !== 0) continue
        // Update The Tile Style
        setTimeout(() => {
          setTileStyle(row, col, WALL_TILE_STYLE)
        }, delay * col)
      }
    }, delay * (MAX_ROWS / 2) * row)
  }
}
