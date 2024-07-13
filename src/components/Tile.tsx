import { ComponentProps } from 'react'
import { Tile as _Tile } from '../types/types'
import {
  END_TILE_STYLE,
  MAX_ROWS,
  PATH_TILE_STYLE,
  START_TILE_STYLE,
  TILE_STYLE,
  TRAVERSED_TILE_STYLE,
  WALL_TILE_STYLE,
} from '../utils/contants'
import { twMerge } from 'tailwind-merge'

interface Props
  extends Pick<
      _Tile,
      'row' | 'col' | 'isStart' | 'isEnd' | 'isWall' | 'isPath' | 'isTraversed'
    >,
    ComponentProps<'div'> {}

const Tile = ({
  row,
  col,
  isStart,
  isEnd,
  isWall,
  isPath,
  isTraversed,
  ...props
}: Props) => {
  let tileStyle

  if (isStart) {
    tileStyle = START_TILE_STYLE
  } else if (isEnd) {
    tileStyle = END_TILE_STYLE
  } else if (isWall) {
    tileStyle = WALL_TILE_STYLE
  } else if (isPath) {
    tileStyle = PATH_TILE_STYLE
  } else if (isTraversed) {
    tileStyle = TRAVERSED_TILE_STYLE
  } else {
    tileStyle = TILE_STYLE
  }
  const leftBorderStyle = col === 0 ? 'border-l' : ''
  const bottomBorderStyle = row === MAX_ROWS - 1 ? 'border-b' : ''
  return (
    <div
      className={twMerge(tileStyle, leftBorderStyle, bottomBorderStyle)}
      {...props}
    ></div>
  )
}

export default Tile
