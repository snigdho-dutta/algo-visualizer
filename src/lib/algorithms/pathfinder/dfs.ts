import { Grid, Tile } from '../../../types/types'
import getUntraversedNeighbors from '../../../utils/getUntraversedNeighbors'
import { isTileEqual } from '../../../utils/helpers'

export default function dfs(grid: Grid, startTile: Tile, endTile: Tile) {
  const traversedTiles: Tile[] = []
  const base = grid[startTile.row][startTile.col]
  base.distance = 0
  base.isTraversed = true
  const unTraversedTiles = [base]
  while (unTraversedTiles.length > 0) {
    const tile = unTraversedTiles.pop()
    if (tile) {
      if (tile.isWall) continue
      if (tile.distance === Infinity) break
      tile.isTraversed = true
      traversedTiles.push(tile)
      if (isTileEqual(tile, endTile)) break
      const neighbors = getUntraversedNeighbors(grid, tile)
      for (const neighbor of neighbors) {
        let isInStack = false
        for (let i = 0; i < unTraversedTiles.length; i++) {
          if (isTileEqual(neighbor, unTraversedTiles[i])) {
            isInStack = true
            break
          }
        }
        if (isInStack) continue
        neighbor.distance = tile.distance + 1
        neighbor.parent = tile
        unTraversedTiles.push(neighbor)
      }
    }
  }
  const path = []
  let tile = grid[endTile.row][endTile.col]
  while (tile !== null) {
    tile.isPath = true
    path.unshift(tile)
    tile = tile.parent!
  }
  return { traversedTiles, path }
}
