import binaryTree from '../lib/algorithms/maze/binaryTree'
import recursiveDivision from '../lib/algorithms/maze/recursiveDivision'
import { Grid, Maze, Speed, Tile } from '../types/types'
import constructBorders from './constructBorders'
import { MAX_COLS, MAX_ROWS } from './contants'
import resetGrid from './resetGrid'

export default async function runMazeAlgorithm({
  grid,
  maze,
  startTile,
  endTile,
  speed,
}: {
  grid: Grid
  maze: Maze
  startTile: Tile
  endTile: Tile
  speed: Speed
}) {
  switch (maze) {
    case 'NONE':
      resetGrid(grid)
      break
    case 'BINARY_TREE':
      // resetGrid(grid)
      await binaryTree(grid, startTile, endTile, speed)
      break
    case 'RECURSIVE_DIVISION':
      // resetGrid(grid)  
      await constructBorders(grid, startTile, endTile)
      // eslint-disable-next-line no-case-declarations
      const row = 1,
        col = 1,
        height = Math.floor((MAX_ROWS - 1) / 2),
        width = Math.floor((MAX_COLS - 1) / 2)

      await recursiveDivision({
        grid,
        startTile,
        endTile,
        row,
        col,
        height,
        width,
        speed,
      })
      break
    default:
      break
  }
}
