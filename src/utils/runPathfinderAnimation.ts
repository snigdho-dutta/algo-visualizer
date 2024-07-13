import { Speed, Tile } from '../types/types'
import {
  EXTENDED_SLEEP_TIME,
  PATH_TILE_STYLE,
  SLEEP_TIME,
  SPEEDS,
  TRAVERSED_TILE_STYLE,
} from './contants'
import { isTileEqual, setTileStyle } from './helpers'

export default function runPathfinderAnimation(
  traversedTiles: Tile[],
  path: Tile[],
  startTile: Tile,
  endTile: Tile,
  speed: Speed
) {
  for (let i = 0; i < traversedTiles.length; i++) {
    setTimeout(() => {
      const tile = traversedTiles[i]
      if (!isTileEqual(tile, startTile) && !isTileEqual(tile, endTile)) {
        setTileStyle(tile.row, tile.col, TRAVERSED_TILE_STYLE)
      }
    }, SLEEP_TIME * i * SPEEDS.find((s) => s.value === speed)!.value)
  }

  setTimeout(() => {
    for (let i = 0; i < path.length; i++) {
      setTimeout(() => {
        const tile = path[i]
        setTileStyle(tile.row, tile.col, PATH_TILE_STYLE)
      }, EXTENDED_SLEEP_TIME * i * SPEEDS.find((s) => s.value === speed)!.value)
    }
  }, SLEEP_TIME * traversedTiles.length * SPEEDS.find((s) => s.value === speed)!.value)
}
