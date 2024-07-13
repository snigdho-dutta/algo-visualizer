import { Grid, Tile } from '../../../types/types'
import getUntraversedNeighbors from '../../../utils/getUntraversedNeighbors'
import { isTileEqual } from '../../../utils/helpers'
import { initFunctionCost, initHeuristicCost } from '../../../utils/heuristics'

export default function astar(grid: Grid, startTile: Tile, endTile: Tile) {
  const traversedTiles: Tile[] = []
  const heuristicCosts = initHeuristicCost(grid, endTile)
  const functionCosts = initFunctionCost()

  const base = grid[startTile.row][startTile.col]
  base.distance = 0
  base.isTraversed = true
  const unTraversedTiles = [base]

  while (unTraversedTiles.length > 0) {
    unTraversedTiles.sort((a, b) => {
      if (functionCosts[a.row][b.row] === functionCosts[a.row][b.row]) {
        return a.distance - b.distance
      }
      return functionCosts[a.row][a.col] - functionCosts[b.row][b.col]
    })
    const curTile = unTraversedTiles.shift()!
    if (curTile) {
      if (curTile.isWall) continue
      if (curTile.distance === Infinity) break
      curTile.isTraversed = true
      traversedTiles.push(curTile)
      if (isTileEqual(curTile, endTile)) break
      const neighbors = getUntraversedNeighbors(grid, curTile)
      // Iterate through the neighbors and update their costs
      for (const neighbor of neighbors) {
        neighbor.distance = curTile.distance + 1
        functionCosts[neighbor.row][neighbor.col] = neighbor.distance
        heuristicCosts[neighbor.row][neighbor.col] = neighbor.distance
        neighbor.parent = curTile
        unTraversedTiles.push(neighbor)
      }
    }
  }

  const path = []
  let current = grid[endTile.row][endTile.col]

  while (current !== null) {
    current.isPath = true
    path.unshift(current)
    current = current.parent!
  }

  return { traversedTiles, path }
}
