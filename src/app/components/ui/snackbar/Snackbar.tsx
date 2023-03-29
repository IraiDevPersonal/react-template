import { useMemo, useState } from 'react'
import { createPortal } from 'react-dom'
import { useTransition, animated } from '@react-spring/web'
import { useSnackbarStore } from '@/app/store/SnackbarStore'
import { SnackbarItem } from './SnackbarItem'

const SNACKBAR_EL = document.getElementById('snackbar-root')

export function Snackbar () {
  const { items = [], removeItem } = useSnackbarStore()
  const [isHover, setIsHover] = useState(false)
  const refMap = useMemo(() => new WeakMap(), [])
  const cancelMap = useMemo(() => new WeakMap(), [])
  const snackbars = useTransition(items, {
    keys: item => item.id,
    from: { opacity: 0, height: 0, life: '100%' },
    enter: item => async (next, cancel) => {
      cancelMap.set(item, cancel)
      await next({ opacity: 1, height: refMap.get(item).offsetHeight })
      await next({ life: '0%' })
    },
    leave: [{ opacity: 0 }, { height: 0 }]
  })

  return createPortal(
    <div
      onMouseEnter={() => { setIsHover(true) }}
      onMouseLeave={() => { setIsHover(false) }}
      className='fixed bottom-2 left-2'
    >
      <ul className='space-y-2'>
        {
          snackbars((style, item) => (
            <animated.li style={style}>
              <SnackbarItem
                {...item}
                ref={(ref) => refMap.set(item, ref)}
                isHover={isHover}
                onClose={removeItem}
              />
            </animated.li>
          ))
        }
      </ul>
    </div>,
    SNACKBAR_EL!
  )
}
