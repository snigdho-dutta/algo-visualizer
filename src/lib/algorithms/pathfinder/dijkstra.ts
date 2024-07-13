import { Grid, Tile } from '../../../types/types'
import getUntraversedNeighbors from '../../../utils/getUntraversedNeighbors'
import { isTileEqual } from '../../../utils/helpers'

export default function dijkstra(grid: Grid, startTile: Tile, endTile: Tile) {
  const traversedTiles = []
  const base = grid[startTile.row][startTile.col]
  base.distance = 0
  base.isTraversed = true
  const unTraversedTiles = [base]

  while (unTraversedTiles.length > 0) {
    // Sort the queue by distance
    unTraversedTiles.sort((a, b) => a.distance - b.distance)
    const tile = unTraversedTiles.shift()!
    if (tile) {
      if (tile.isWall) continue
      if (tile.distance === Infinity) break
      tile.isTraversed = true
      traversedTiles.push(tile)
      if (isTileEqual(tile, endTile)) break
      const neighbors = getUntraversedNeighbors(grid, tile)
      console.log(grid)
      for (const neighbor of neighbors) {
        console.log(neighbor)
        //   Check For Shorter Path From the Neighbor
        if (tile.distance + 1 < neighbor.distance) {
          // Drop The Neighbor From Untraversed Queue
          for (let i = 0; i < unTraversedTiles.length; i++) {
            if (isTileEqual(neighbor, unTraversedTiles[i])) {
              unTraversedTiles.splice(i, 1)
              break
            }
          }
          neighbor.distance = tile.distance + 1
          neighbor.parent = tile
          unTraversedTiles.push(neighbor)
        }
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
  console.log({ traversedTiles, path })
  return { traversedTiles, path }
}
