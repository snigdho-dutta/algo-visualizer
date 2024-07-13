import { Grid, Tile } from '../../../types/types'
import getUntraversedNeighbors from '../../../utils/getUntraversedNeighbors'
import { isTileEqual } from '../../../utils/helpers'

export default function bfs(grid: Grid, startTile: Tile, endTile: Tile) {
  const traversedTiles: Tile[] = []
  // Initialize an array to store traversed tiles
  const base = grid[startTile.row][startTile.col]
  base.distance = 0
  base.isTraversed = true
  //   Initialize an array to store untravesed tiles starting with the base tile
  const unTraversedTiles = [base]
  //   Continue while there are untravered tiles
  while (unTraversedTiles.length > 0) {
    // get the first untraversed tile
    const tile = unTraversedTiles.shift()!
    // SKip the walls
    if (tile.isWall) continue
    if (tile.distance === Infinity) break
    // Mark the tile as traversed
    tile.isTraversed = true
    traversedTiles.push(tile)
    // Break at the end tile
    if (isTileEqual(tile, endTile)) break
    // Get untraversed neighbors of the tile
    const neighbors = getUntraversedNeighbors(grid, tile)

    for (const neighbor of neighbors) {
      let isInQueue = false
      for (let i = 0; i < unTraversedTiles.length; i++) {
        if (isTileEqual(neighbor, unTraversedTiles[i])) {
          isInQueue = true
          break
        }
      }
      if (isInQueue) continue
      neighbor.distance = tile.distance + 1
      neighbor.parent = tile
      unTraversedTiles.push(neighbor)
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
