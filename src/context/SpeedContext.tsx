import { createContext, FC, PropsWithChildren, useState } from 'react'
import { Speed } from '../types/types'

export const SpeedContext = createContext<
  | {
      speed: Speed
      setSpeed: (speed: Speed) => void
    }
  | undefined
>(undefined)

export const SpeedContextProvider: FC<PropsWithChildren> = ({ children }) => {
  const [speed, setSpeed] = useState<Speed>(1)

  return (
    <SpeedContext.Provider
      value={{
        speed,
        setSpeed,
      }}
    >
      {children}
    </SpeedContext.Provider>
  )
}

export default SpeedContext
