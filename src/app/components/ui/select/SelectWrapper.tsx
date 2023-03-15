import { IconSelector } from '@tabler/icons-react'
import { FieldHelper } from '../field/FieldHelper'
import { FieldWrapper } from '../field/FieldWrapper'

const CLASSNAME = 'flex flex-wrap items-center gap-2 w-full text-sm pr-9 cursor-pointer transition group '

interface Props {
  children: React.ReactNode
  htmlFor: string
  error: boolean
  disabled: boolean
  label?: string
  isMulti?: boolean
  helperText: string
  dropdown: React.ReactNode
  onClick: () => void
}

export function SelectWrapper({ children, label, isMulti = false, ...props }: Props) {
  const className = `${CLASSNAME} ${isMulti ? ' pt-5 pb-1.5' : ''}`
  return (
    <div className='space-y-1 relative'>
      <FieldWrapper {...props} className={className}>
        {children}
        <Label label={label!} />
        <Icon />
      </FieldWrapper>
      <FieldHelper isError={props.error} helperText={props.helperText} />
      <>{props.dropdown}</>
    </div>
  )
}

function Icon() {
  return (
    <span className="absolute top-1/2 -translate-y-1/2 right-2 text-gray-500 group-hover:text-gray-900 transition">
      <IconSelector size={20} />
    </span>
  )
}

function Label({ label }: { label: string }) {
  return (
    <span
      className="absolute left-3 top-3 -translate-y-1/2 text-xs text-gray-400 transition-all peer-placeholder-shown:top-1/2 w-max peer-placeholder-shown:text-sm peer-focus:top-3 peer-focus:text-xs peer-focus:text-indigo-500"
    >
      {label}:
    </span>
  )
}
