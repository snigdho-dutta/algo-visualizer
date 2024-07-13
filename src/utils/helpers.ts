import { Tile } from '../types/types'
import {
  MAX_COLS,
  MAX_ROWS,
  TILE_STYLE,
} from './contants'

export const isStartOrEnd = (row: number, col: number) =>
  (row === 1 && col === 1) || (row === MAX_ROWS - 2 && col === MAX_COLS - 2)

export const isTileEqual = (a: Tile, b: Tile) =>
  a.row === b.row && a.col === b.col

export const resetTileStyle = (row: number, col: number) => {
  const tileElement = document.getElementById(`${row}-${col}`)
  if (tileElement) {
    tileElement.className = TILE_STYLE
    if (row === MAX_ROWS - 1) {
      tileElement.classList.add('border-b')
    }
    if (col === 0) {
      tileElement.classList.add('border-l')
    }
  }
}

export const setTileStyle = (row: number, col: number, styles: string) => {
  const tileElement = document.getElementById(`${row}-${col}`)
  if (tileElement) {
    tileElement.className = styles
  }
}

export const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms))

export const randInt = (min: number, max: number) =>
  Math.floor(Math.random() * (max - min) + min)
