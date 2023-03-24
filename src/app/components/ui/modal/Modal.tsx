import { createPortal } from 'react-dom'
import { Backdrop, CloseButton, ModalWrapper } from '../'
import { type Size } from '@/utils/types'

const MODAL_ROOT = document.getElementById('modal-root')

interface Props {
  onClose: () => void
  isOpen: boolean
  title?: string
  maxWidth?: Size
  hideCloseBtn?: boolean
  children: React.ReactNode
}

export function Modal ({
  children,
  isOpen,
  onClose,
  maxWidth = 'md',
  title,
  hideCloseBtn = false
}: Props) {
  return createPortal(
    <Backdrop>
      <ModalWrapper maxWidth={maxWidth}>
        {title !== undefined &&
          <header className='p-3'>
            <CloseButton hidden={hideCloseBtn} onClick={onClose} />
            <h1 className='text-xl font-semibold'>{title}</h1>
          </header>
        }
        <>{children}</>
      </ModalWrapper>
    </Backdrop>,
    MODAL_ROOT!
  )
}
