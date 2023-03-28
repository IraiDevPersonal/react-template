import { IconX } from '@tabler/icons-react'
import { IconButton } from '../button/IconButton'
import { type ModalProps } from './Modal'

type Props = Pick<ModalProps, 'hideCloseBtn' | 'onClose' | 'title'>

export function ModalHeader({ onClose, hideCloseBtn = false, title }: Props) {
  if (title === undefined) return null
  return (
    <header className='p-3'>
      <Closer hidden={hideCloseBtn} onClick={onClose} />
      <h1 className='text-xl font-semibold'>{title}</h1>
    </header>
  )
}

export function Closer ({ onClick, hidden }: { onClick: () => void, hidden: boolean }) {
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
