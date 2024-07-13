import { createContext, FC, PropsWithChildren,  useState } from 'react'
import { Tile } from '../types/types'
import { END_TILE_CONFIGURATION, START_TILE_CONFIGURATION } from '../utils/contants'

export const TileContext = createContext<
  | {
      startTile: Tile
      endTile: Tile
      setStartTile: (startTile: Tile) => void
      setEndTile: (endTile: Tile) => void
    }
  | undefined
>(undefined)

const TileContextProvider: FC<PropsWithChildren> = ({ children }) => {
  const [startTile, setStartTile] = useState<Tile>(START_TILE_CONFIGURATION)
  const [endTile, setEndTile] = useState<Tile>(END_TILE_CONFIGURATION)

  return (
    <TileContext.Provider
      value={{
        startTile,
        endTile,
        setStartTile,
        setEndTile,
      }}
    >
      {children}
    </TileContext.Provider>
  )
}

export default TileContextProvider

