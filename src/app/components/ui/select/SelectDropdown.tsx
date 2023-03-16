import { type SelectOption } from '@/utils/types'
import { useState } from 'react'
import { AvatarSelect } from './AvatarSelect'

interface Props {
  items: SelectOption[]
  isOpen: boolean
  selectedValue?: SelectOption
  helpertext: string
  onSelect: (option: SelectOption) => void
}

export function SelectDropdown({ items = [], isOpen, onSelect, selectedValue, helpertext }: Props) {
  const [selected, setSelected] = useState<SelectOption | undefined>(selectedValue)

  const handleSelectItem = (option: SelectOption) => {
    setSelected(option)
    onSelect?.(option)
  }

  if (!isOpen) return null

  return (
    <div
      className={`
         absolute bg-white rounded-xl w-full text-sm shadow-sm
         overflow-hidden z-50 border transition-colors border-gray-200
         ${helpertext === '' ? 'top-full' : selectedValue === undefined ? 'top-[75%]' : 'top-[70%]'}
      `}
    // dropdown-wrapper
    >
      {/* dropdown-list */}
      <ul className="p-1.5 max-h-52 overflow-auto">
        {items.length > 0 &&
          items.map((item) => (
            <li
              key={item.value}
              onClick={() => { handleSelectItem(item) }}
              className={`
                transition flex items-center p-2 gap-2 rounded-lg cursor-pointer
                ${selected?.value === item.value ? 'bg-indigo-500 hover:bg-indigo-600 text-white' : 'hover:bg-gray-100'}
              `}
            >
              <AvatarSelect avatar={item.avatar} alt={item.label} />
              <span>{item.label}</span>
            </li>
          ))}
        {items.length === 0 &&
          <li className="px-1 py-2 text-neutral-300">No hay opciones...</li>
        }
      </ul>
    </div>
  )
}
