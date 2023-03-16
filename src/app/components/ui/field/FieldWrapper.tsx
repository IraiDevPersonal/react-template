
interface Props {
  children: React.ReactNode
  htmlFor: string
  error: boolean
  disabled: boolean
  className?: string
  onClick?: () => void
}

type Styles = Pick<Props, 'disabled' | 'error'>

const styles = ({ error, disabled }: Styles): string => {
  if (error) {
    return 'focus-within:ring-red-500 focus-within:border-red-500 border-red-500'
  }
  if (disabled) {
    return 'focus-within:ring-transparent focus-within:border-transparent border-transparent text-gray-400 bg-gray-100'
  }
  return 'focus-within:ring-indigo-500 focus-within:border-indigo-500 border-gray-200 hover:focus-within:border-indigo-500 hover:border-gray-400/60'
}

export function FieldWrapper({ children, htmlFor, error, disabled, className = '', onClick }: Props) {
  return (
    <label
      onClick={onClick}
      htmlFor={htmlFor}
      className={`relative flex items-center gap-2 overflow-hidden rounded-xl border px-3 pt-3 shadow-sm focus-within:ring-1 text-neutral-700 transition
      ${styles({ error, disabled })}
      ${className}
    `}>
      {children}
    </label>
  )
}
