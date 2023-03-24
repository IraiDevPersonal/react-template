import { selectedSize } from '@/utils/styles'
import { type Size } from '@/utils/types'

interface Props {
  maxWidth: Size
  children: React.ReactNode
}

export function ModalWrapper ({ children, maxWidth }: Props) {
  return (
    <div className={`p-3 ${selectedSize({ size: maxWidth, variant: 'width' })}`}>
      <div
        className='
          bg-white dark:bg-neutral-800 rounded-xl divide-y divide-neutral-200
          dark:divide-neutral-600 ring-2 ring-neutral-100 dark:ring-neutral-700
          relative w-full
        '
      >
        {children}
      </div>
    </div>
  )
}
