import { selectedColor } from '@/utils/styles'
import { type IconBtnProps } from '@/utils/types'

export function IconButton ({
  onClick,
  children,
  hidden = false,
  custom = false,
  disabled = false,
  color = 'default',
  variant = 'filled',
  className: customClassName = '',
  type = 'button'
}: IconBtnProps) {
  const styles = (): string => {
    let className = `
      h-9 w-9 grid place-content-center overflow-hidden
      rounded-full outline-none focus:outline-none ring-0 focus:ring-0 
      transition-colors duration-200
    `

    if (custom) {
      className = customClassName
      return className
    }

    if (disabled) {
      return `
        bg-neutral-200/80 text-neutral-400 
        dark:text-neutral-500 dark:bg-neutral-700/70
        ${className}
      `
    }

    return `
      ${selectedColor({ variant, color })}
      ${className}
    `
  }

  if (hidden) return null
  return (
    <button
      type={type}
      disabled={disabled}
      onClick={onClick}
      className={styles()}
    >
      {children}
    </button>
  )
}
