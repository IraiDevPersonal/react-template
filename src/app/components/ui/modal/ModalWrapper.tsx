import { useTransition, animated } from '@react-spring/web'
import { selectedSize } from '@/utils/styles'
import { type ModalProps } from './Modal'

type Props = Pick<ModalProps, 'children' | 'isOpen' | 'maxWidth'>

export function ModalWrapper ({ children, maxWidth = 'md', isOpen }: Props) {
  const transition = useTransition(isOpen, {
    from: { opacity: 0, transform: 'translateY(-40px)' },
    enter: { opacity: 1, transform: 'translateY(0px)' },
    leave: { opacity: 0, transform: 'translateY(-40px)' }
  })

  return transition((style, item) => item && (
    <animated.div
      style={style}
      className={`
        bg-white dark:bg-neutral-800 rounded-xl divide-y divide-neutral-200
        dark:divide-neutral-600 ring-transparent dark:ring-neutral-700
        relative w-full ring-[0.6rem] border-2 border-neutral-200 
        dark:border-neutral-700
        ${selectedSize({ size: maxWidth, variant: 'width' })}
      `}
    >
      {children}
    </animated.div>
  ))
}
