import { selectedColor } from '@/utils/styles'
import { type BtnProps } from '@/utils/types'

export function Button ({
  onClick,
  children,
  endIcon,
  startIcon,
  hidden = false,
  custom = false,
  disabled = false,
  fullWidth = false,
  color = 'default',
  variant = 'filled',
  className: customClassName = '',
  type = 'button'
}: BtnProps) {
  const styles = (): string => {
    let className = `
      flex items-center gap-2 px-4 py-1.5 font-medium overflow-hidden 
      rounded-2xl outline-none focus:outline-none ring-0 focus:ring-0 
      transition-colors duration-200
    `

    const baseStyles = `
      ${fullWidth ? 'w-full justify-center' : 'w-max'}
      ${className}
    `

    if (custom) {
      className = customClassName
      return className
    }

    if (disabled) {
      return `
        bg-neutral-200/80 text-neutral-400 
        dark:text-neutral-500 dark:bg-neutral-700/70
        ${baseStyles}
      `
    }

    return `
      ${selectedColor({ variant, color })}
      ${baseStyles}
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
      {startIcon}
      {children}
      {endIcon}
    </button>
  )
}
