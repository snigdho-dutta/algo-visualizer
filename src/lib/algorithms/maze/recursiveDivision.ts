import { Grid, Speed, Tile } from '../../../types/types'
import horizontalDivision from '../../../utils/horizontalDivision'
import verticalDivision from '../../../utils/verticalDivision'

export default async function recursiveDivision({
  grid,
  startTile,
  endTile,
  row,
  col,
  height,
  width,
  speed,
}: {
  grid: Grid
  startTile: Tile
  endTile: Tile
  row: number
  col: number
  height: number
  width: number
  speed: Speed
}) {
  // speed = SPEEDS.find((s) => s.value === speed)!.value

//   Base Case
  if (height <= 1 || width <= 1) {
    return
  }
  if (height > width) {
    await horizontalDivision(
      grid,
      startTile,
      endTile,
      row,
      col,
      height,
      width,
      speed
    )
  } else {
    await verticalDivision(
      grid,
      startTile,
      endTile,
      row,
      col,
      height,
      width,
      speed
    )
  }
}
