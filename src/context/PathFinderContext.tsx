import {
  createContext,
  Dispatch,
  FC,
  PropsWithChildren,
  SetStateAction,
  useState,
} from 'react'
import { Algorithm, Grid, Maze } from '../types/types'
import createGrid from '../utils/createGrid'
import {
  END_TILE_CONFIGURATION,
  START_TILE_CONFIGURATION,
} from '../utils/contants'

export const PathFinderContext = createContext<
  | {
      algorithm: Algorithm
      setAlgorithm: Dispatch<SetStateAction<Algorithm>>
      maze: Maze
      setMaze: Dispatch<SetStateAction<Maze>>
      grid: Grid
      setGrid: Dispatch<SetStateAction<Grid>>
      isGraphVisualized: boolean
      setIsGraphVisualized: (isGraphVisualized: boolean) => void
    }
  | undefined
>(undefined)

const PathFinderContextProvider: FC<PropsWithChildren> = ({ children }) => {
  const [algorithm, setAlgorithm] = useState<Algorithm>('BFS')
  const [maze, setMaze] = useState<Maze>('NONE')
  const [grid, setGrid] = useState<Grid>(
    createGrid(START_TILE_CONFIGURATION, END_TILE_CONFIGURATION)
  )
  const [isGraphVisualized, setIsGraphVisualized] = useState(false)

  return (
    <PathFinderContext.Provider
      value={{
        algorithm,
        setAlgorithm,
        maze,
        setMaze,
        grid,
        setGrid,
        isGraphVisualized,
        setIsGraphVisualized,
      }}
    >
      {children}
    </PathFinderContext.Provider>
  )
}

export default PathFinderContextProvider
