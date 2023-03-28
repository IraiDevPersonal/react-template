import { useTransition, animated } from '@react-spring/web'
import { type ModalProps } from './Modal'

type Props = Pick<ModalProps, 'children' | 'isOpen'>

export function Backdrop ({ children, isOpen }: Props) {
  const transition = useTransition(isOpen, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 }
  })

  return transition((style, item) => item && (
    <animated.main
      style={style}
      className='
        h-screen w-full grid place-content-center fixed inset-0
        bg-neutral-900/30 dark:bg-neutral-500/30
      '
    >
      {children}
    </animated.main>
  ))
}
