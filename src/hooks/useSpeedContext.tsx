import { useContext } from 'react'
import SpeedContext from '../context/SpeedContext'

export const useSpeedContext = () => {
  const ctx = useContext(SpeedContext)
  if (!ctx) {
    throw new Error(
      'useSpeedContext must be used within a SpeedContextProvider'
    )
  }
  return ctx
}
