import { ChangeEventHandler } from 'react'

const Select = ({
  label,
  value,
  options,
  isDisabled,
  onChange,
}: {
  label: string
  value: string | number
  options: { name: string; value: string | number }[]
  isDisabled?: boolean
  onChange: ChangeEventHandler<HTMLSelectElement>
}) => {
  return (
    <div className='flex flex-col items-start gap-1'>
      <label className='text-xs text-gray-300 ml-1'>{label}</label>
      <select
        className='bg-gray-700 disabled:pointer-events-none rounded-md cursor-pointer hover:bg-gray-800 focus:ring-1 focus:ring-purple-400 focus:outline-none px-2 py-1 min-w-[200px] sm:min-w-full transition ease-in'
        disabled={isDisabled}
        value={value}
        onChange={onChange}
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.name}
          </option>
        ))}
      </select>
    </div>
  )
}

export default Select
