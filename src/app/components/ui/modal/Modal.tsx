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
  backdropCloseModal?: boolean
}

export function Modal ({
  children,
  isOpen,
  onClose,
  maxWidth,
  title,
  hideCloseBtn,
  backdropCloseModal
}: ModalProps) {
  return createPortal(
    <Backdrop
      backdropCloseModal={backdropCloseModal}
      isOpen={isOpen}
      onClose={onClose}
    >
      <ModalWrapper isOpen={isOpen} maxWidth={maxWidth}>
        <ModalHeader onClose={onClose} hideCloseBtn={hideCloseBtn} title={title} />
        <>{children}</>
      </ModalWrapper>
    </Backdrop>,
    MODAL_ROOT!
  )
}
