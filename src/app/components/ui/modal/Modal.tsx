import { createPortal } from 'react-dom'
import { Backdrop, ModalHeader, ModalWrapper } from '../'
import { type Size } from '@/utils/types'

const MODAL_ROOT = document.getElementById('modal-root')

export interface ModalProps {
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
  maxWidth,
  title,
  hideCloseBtn
}: ModalProps) {
  return createPortal(
    <Backdrop isOpen={isOpen}>
      <ModalWrapper isOpen={isOpen} maxWidth={maxWidth}>
        <ModalHeader onClose={onClose} hideCloseBtn={hideCloseBtn} title={title} />
        <>{children}</>
      </ModalWrapper>
    </Backdrop>,
    MODAL_ROOT!
  )
}
