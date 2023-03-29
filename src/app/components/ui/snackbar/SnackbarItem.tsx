import { useEffect, forwardRef } from 'react'
import { IconX } from '@tabler/icons-react'
import { IconButton } from '../button/IconButton'
import { type SnackbarId, type Snackbar } from '@/app/store/SnackbarStore'
import { type ReactRef } from '@/utils/types'
import { selectedColor } from '@/utils/styles'

interface Props extends Snackbar {
  isHover: boolean
  onClose: (id: SnackbarId) => void
}

// eslint-disable-next-line react/display-name
export const SnackbarItem = forwardRef(({
  color = 'primary',
  duration,
  id,
  message,
  onClose,
  isHover
}: Props, ref: ReactRef) => {
  useEffect(() => {
    if (isHover) return
    const timer = setTimeout(() => {
      onClose(id as unknown as SnackbarId)
    }, duration)

    return () => { clearTimeout(timer) }
  }, [duration, isHover])
  return (
    <div
      ref={ref}
      className={`
        flex justify-between items-start gap-3 overflow-auto
        pl-3 pb-2 pr-1 pt-1.5 rounded-lg w-72 max-h-52
        ${selectedColor({ color, variant: 'filled' })}
      `}
    >
      <span className='pt-1'>{message}</span>
      <Closer onClick={() => { onClose(id as unknown as SnackbarId) }} />
    </div>
  )
})

function Closer ({ onClick }: { onClick: () => void }) {
  return (
    <IconButton
      custom
      onClick={onClick}
      className='
        h-8 min-w-[32px] grid place-content-center hover:bg-black/10 rounded-full
        transition duration-200 outline-none
      '
    >
      <IconX size={18} />
    </IconButton>
  )
}
