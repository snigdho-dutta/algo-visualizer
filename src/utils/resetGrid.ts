import { Grid } from '../types/types'
import {
  END_TILE_CONFIGURATION,
  END_TILE_STYLE,
  START_TILE_CONFIGURATION,
  START_TILE_STYLE,
} from './contants'
import { isTileEqual, resetTileStyle, setTileStyle } from './helpers'

export default function resetGrid(
  grid: Grid,
  startTile = START_TILE_CONFIGURATION,
  endTile = END_TILE_CONFIGURATION
) {
  for (const tiles of grid) {
    for (const tile of tiles) {
      tile.isTraversed = false
      tile.isPath = false
      tile.isWall = false
      tile.parent = null
      if (isTileEqual(tile, startTile)) {
        tile.isStart = true
        tile.distance = 0
        setTileStyle(tile.row, tile.col, START_TILE_STYLE)
        console.log('start tile', tile)
      } else if (isTileEqual(tile, endTile)) {
        tile.isEnd = true
        tile.distance = 0
        setTileStyle(tile.row, tile.col, END_TILE_STYLE)
        console.log('start tile', tile)
      } else {
        tile.distance = Infinity
        resetTileStyle(tile.row, tile.col)
        console.log('reset tile', tile)
      }
    }
  }
}
