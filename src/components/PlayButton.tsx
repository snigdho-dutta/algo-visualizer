import { MouseEventHandler } from 'react'
import { BsFillPlayFill } from 'react-icons/bs'
import { GrPowerReset } from 'react-icons/gr'

type Props = {
  isDisabled: boolean
  isGraphVisualized: boolean
  onClick: MouseEventHandler<HTMLButtonElement>
}

const PlayButton = ({ isDisabled, isGraphVisualized, onClick }: Props) => {
  return (
    <button
      className={`disabled:pointer-events-none disabled:opacity-50 transition ease-in rounded-full p-2.5 shadow-md bg-green-500 hover:bg-green-600 border-none active:ring-green-300 focus:ring-green-300 focus:outline-none
        focus:ring-opacity-30`}
      disabled={isDisabled}
      onClick={onClick}
    >
      {isGraphVisualized ? (
        <GrPowerReset className='w-5 h-5' />
      ) : (
        <BsFillPlayFill className='w-5 h-5' />
      )}
    </button>
  )
}

export default PlayButton
