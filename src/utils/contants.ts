import { twJoin } from 'tailwind-merge'
import { AlgorithSelect, MazeSelect, SpeedSelect } from '../types/types'

export const MAX_ROWS = 39
export const MAX_COLS = 39

export const START_TILE_CONFIGURATION = {
  row: 1,
  col: 1,
  isStart: false,
  isEnd: false,
  isWall: false,
  isPath: false,
  isTraversed: false,
  parent: null,
  distance: 0,
}

export const END_TILE_CONFIGURATION = {
  row: MAX_ROWS - 2,
  col: MAX_COLS - 2,
  isStart: false,
  isEnd: false,
  isWall: false,
  isPath: false,
  isTraversed: false,
  parent: null,
  distance: 0,
}

export const TILE_STYLE =
  'lg:w-[17px] md:w-[15px] xs:w-[8px] w-[7px] lg:h-[17px] md:h-[15px] xs:h-[8px] h-[7px] border-t border-r border-sky-300'

export const START_TILE_STYLE = twJoin(TILE_STYLE, 'bg-green-500')

export const END_TILE_STYLE = twJoin(TILE_STYLE, 'bg-red-600')

export const TRAVERSED_TILE_STYLE = twJoin(
  TILE_STYLE,
  'bg-cyan-500',
  'animate-traversed'
)

export const PATH_TILE_STYLE = twJoin(
  TILE_STYLE,
  'bg-green-600',
  'animate-path'
)

export const WALL_TILE_STYLE = twJoin(TILE_STYLE, 'bg-gray-200', 'animate-wall')

export const MAZES: MazeSelect[] = [
  {
    name: 'None',
    value: 'NONE',
  },
  {
    name: 'Binary Tree',
    value: 'BINARY_TREE',
  },
  {
    name: 'Recursive Division',
    value: 'RECURSIVE_DIVISION',
  },
]

export const SPEEDS: SpeedSelect[] = [
  {
    name: 'Slow',
    value: 2,
  },
  {
    name: 'Medium',
    value: 1,
  },
  {
    name: 'Fast',
    value: 0.5,
  },
]

export const ALGORITHMS: AlgorithSelect[] = [
  {
    name: 'Dijkstra',
    value: 'DIJKSTRA',
  },
  {
    name: 'Breadth First Search',
    value: 'BFS',
  },
  {
    name: 'Depth First Search',
    value: 'DFS',
  },
  {
    name: 'A-Star',
    value: 'ASTAR',
  },
]

export const SLEEP_TIME = 8

export const EXTENDED_SLEEP_TIME = 30
