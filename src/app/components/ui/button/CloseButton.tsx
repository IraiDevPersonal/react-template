import { IconX } from '@tabler/icons-react'
import { IconButton } from './IconButton'

interface Props {
  onClick: () => void
  hidden?: boolean
}

export function CloseButton ({ onClick, hidden }: Props) {
  return (
    <IconButton
      custom
      hidden={hidden}
      onClick={onClick}
      className='
        w-8 h-8 grid place-content-center bg-neutral-100 hover:bg-red-500
        hover:text-white absolute -top-3 -right-3 transition-colors
        duration-200 rounded-full outline-none
      '
    >
      <IconX />
    </IconButton>
  )
}
