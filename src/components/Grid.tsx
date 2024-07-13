import { MutableRefObject, useState } from 'react'
import { usePathFinderContext } from '../hooks/usePathFinderContext'
import Tile from './Tile'
import { twMerge } from 'tailwind-merge'
import { MAX_COLS, MAX_ROWS } from '../utils/contants'
import { isStartOrEnd } from '../utils/helpers'
import updateGrid from '../utils/updateGrid'

const Grid = ({
  isVisualizationRunningRef,
}: {
  isVisualizationRunningRef: MutableRefObject<boolean>
}) => {
  const { grid, setGrid } = usePathFinderContext()
  const [isMouseDown, setIsMouseDown] = useState(false)

  const handleMouseDown = (row: number, col: number) => {
    if (isVisualizationRunningRef.current || isStartOrEnd(row, col)) return
    setIsMouseDown(true)
    // Create Wall on Click
    const newGrid = updateGrid(grid, row, col)
    setGrid(newGrid)
  }

  const handleMouseUp = (row: number, col: number) => {
    if (isVisualizationRunningRef.current || isStartOrEnd(row, col)) return
    setIsMouseDown(false)
  }

  const handleMouseEnter = (row: number, col: number) => {
    if (isVisualizationRunningRef.current || isStartOrEnd(row, col)) return
    if (!isMouseDown) return
    // Create Wall on Hover
    const newGrid = updateGrid(grid, row, col)
    setGrid(newGrid)
  }

  return (
    <div
      className={twMerge(
        'flex flex-col items-center justify-center border-sky-300 mt-10',
        `lg:min-h-[${MAX_ROWS * 17}px] md:min-h-[${
          MAX_ROWS * 15
        }px] xs:min-h-[${MAX_ROWS * 8}px] min-h-[${MAX_ROWS * 7}px]`,
        `lg:min-w-[${MAX_COLS * 17}px] md:min-w-[${
          MAX_COLS * 15
        } px] xs:min-w-[${MAX_COLS * 8}px] min-w-[${MAX_COLS * 7}px]`
      )}
    >
      {grid.map((tiles, idx) => (
        <div key={idx} className='flex'>
          {tiles.map((tile) => {
            const { row, col, isStart, isEnd, isWall, isPath, isTraversed } =
              tile

            return (
              <Tile
                key={`${row}-${col}`}
                id={`${row}-${col}`}
                {...{ row, col, isStart, isEnd, isWall, isPath, isTraversed }}
                onMouseDown={() => handleMouseDown(row, col)}
                onMouseEnter={() => handleMouseEnter(row, col)}
                onMouseUp={() => handleMouseUp(row, col)}
              />
            )
          })}
        </div>
      ))}
    </div>
  )
}

export default Grid
