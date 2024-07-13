import astar from '../lib/algorithms/pathfinder/astar'
import bfs from '../lib/algorithms/pathfinder/bfs'
import dfs from '../lib/algorithms/pathfinder/dfs'
import dijkstra from '../lib/algorithms/pathfinder/dijkstra'
import { Algorithm, Grid, Tile } from '../types/types'

export default function runPathfinderAlgorithm(
  grid: Grid,
  algorithm: Algorithm,
  startTile: Tile,
  endTile: Tile
) {
  switch (algorithm) {
    case 'BFS':
      return bfs(grid, startTile, endTile)
    case 'DFS':
      console.log('dfs')
      return dfs(grid, startTile, endTile)
    case 'DIJKSTRA':
      return dijkstra(grid, startTile, endTile)
    case 'ASTAR':
      return astar(grid, startTile, endTile)
    default:
      break
  }
}
