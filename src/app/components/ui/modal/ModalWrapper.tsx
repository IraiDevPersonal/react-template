import { selectedSize } from '@/utils/styles'
import { useTransition, animated } from '@react-spring/web'
import { type ModalProps } from './Modal'

type Props = Pick<ModalProps, 'children' | 'isOpen' | 'maxWidth'>

export function ModalWrapper ({ children, maxWidth = 'md', isOpen }: Props) {
  const transition = useTransition(isOpen, {
    from: { opacity: 0, transform: 'translateY(-40px)' },
    enter: { opacity: 1, transform: 'translateY(0px)' },
    leave: { opacity: 0, transform: 'translateY(-40px)' }
  })

  return (
    <div className={`p-3 ${selectedSize({ size: maxWidth, variant: 'width' })}`}>
      {
        transition((style, item) => item && (
          <animated.div
            style={style}
            className='
              bg-white dark:bg-neutral-800 rounded-xl divide-y divide-neutral-200
              dark:divide-neutral-600 ring-2 ring-neutral-100 dark:ring-neutral-700
              relative w-full
            '
          >
            {children}
          </animated.div>
        ))
      }
    </div>
  )
}
