export type Algorithm = 'DIJKSTRA' | 'BFS' | 'DFS' | 'ASTAR'

export type AlgorithSelect = {
  name: string
  value: Algorithm
}

export type Maze = 'NONE' | 'BINARY_TREE' | 'RECURSIVE_DIVISION'

export type MazeSelect = {
  name: string
  value: Maze
}

export type Tile = {
  row: number
  col: number
  isStart: boolean
  isEnd: boolean
  isWall: boolean
  isPath: boolean
  isTraversed: boolean
  parent: Tile | null
  distance: number
}

export type Grid = Tile[][]

export type Speed = 2 | 1 | 0.5

export type SpeedSelect = {
  name: string
  value: Speed
}
