import { ChangeEventHandler, MutableRefObject, useState } from 'react'
import Select from './Select'
import {
  ALGORITHMS,
  EXTENDED_SLEEP_TIME,
  MAZES,
  SLEEP_TIME,
  SPEEDS,
} from '../utils/contants'
import { usePathFinderContext } from '../hooks/usePathFinderContext'
import { Algorithm, Maze, Speed } from '../types/types'
import runMazeAlgorithm from '../utils/runMazeAlgorithm'
import { useTileContext } from '../hooks/useTileContext'
import { useSpeedContext } from '../hooks/useSpeedContext'
import runPathfinderAlgorithm from '../utils/runPathfinderAlgorithm'
import resetGrid from '../utils/resetGrid'
import PlayButton from './PlayButton'
import runPathfinderAnimation from '../utils/runPathfinderAnimation'

const Nav = ({
  isVisualizationRunningRef,
}: {
  isVisualizationRunningRef: MutableRefObject<boolean>
}) => {
  const {
    maze,
    grid,
    setGrid,
    setMaze,
    algorithm,
    setAlgorithm,
    isGraphVisualized,
    setIsGraphVisualized,
  } = usePathFinderContext()
  const { startTile, endTile } = useTileContext()
  const { speed, setSpeed } = useSpeedContext()
  const [isDisabled, setIsDisabled] = useState(false)
  const handleMazeSelect: ChangeEventHandler<HTMLSelectElement> = async ({
    target: { value },
  }) => {
    if (isVisualizationRunningRef.current || isDisabled) return
    setIsDisabled(true)
    // Run maze Algorithm
    setMaze(value as Maze)
    await runMazeAlgorithm({
      grid,
      maze: value as Maze,
      startTile,
      endTile,
      speed,
    })
    setIsDisabled(false)
  }

  const handleAlgorithmSelect: ChangeEventHandler<HTMLSelectElement> = async ({
    target: { value },
  }) => {
    setAlgorithm(value as Algorithm)
  }

  const runPathfinder = async () => {
    if (isGraphVisualized) {
      setIsGraphVisualized(false)
      resetGrid(grid)
      return
    }
    const { traversedTiles, path } = runPathfinderAlgorithm(
      grid,
      algorithm,
      startTile,
      endTile
    )!
    // Run Animation
    setIsDisabled(true)
    isVisualizationRunningRef.current = true
    runPathfinderAnimation(traversedTiles, path, startTile, endTile, speed)
    setTimeout(() => {
      const newGrid = grid.slice()
      setGrid(newGrid)
      setIsGraphVisualized(true)
      setIsDisabled(false)
      isVisualizationRunningRef.current = false
    }, SLEEP_TIME * (traversedTiles.length + SLEEP_TIME * 2) + EXTENDED_SLEEP_TIME * (path.length + 60) * SPEEDS.find((s) => s.value === speed)!.value)
  }
  const handleSpeedSelect: ChangeEventHandler<HTMLSelectElement> = async ({
    target: { value },
  }) => {
    if (isVisualizationRunningRef.current || isDisabled) return
    setSpeed(Number(value) as Speed)
  }

  return (
    <div className='flex items-center justify-center min-h-[4.5rem] border-b shadow-gray-600 sm:px-5 px-0'>
      <div className='flex items-center lg:justify-between justify-center w-full sm:w-[52rem]'>
        <h1 className='lg:flex hidden w-[40%] text-2xl pl-1'>
          Pathfinding Visualizer
        </h1>
        <div className='flex sm:items-end items-center justify-start sm:justify-between sm:flex-row flex-col sm:space-y-0 py-4 sm:py-0 sm:space-x-4'>
          <Select
            label='Maze'
            value={maze}
            options={MAZES}
            isDisabled={isDisabled}
            onChange={handleMazeSelect}
          />
          <Select
            label='Algorithm'
            value={algorithm}
            options={ALGORITHMS}
            isDisabled={isDisabled}
            onChange={handleAlgorithmSelect}
          />
          <Select
            label='Speed'
            value={speed}
            options={SPEEDS}
            isDisabled={isDisabled}
            onChange={handleSpeedSelect}
          />
          <PlayButton
            isDisabled={isDisabled}
            isGraphVisualized={isGraphVisualized}
            onClick={() => {
              runPathfinder()
            }}
          />
        </div>
      </div>
    </div>
  )
}

export default Nav
