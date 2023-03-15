import { type InputProps } from '@/utils/types'
import { useId } from 'react'
import { FieldHelper } from './FieldHelper'
import { FieldWrapper } from './FieldWrapper'

export function Input(props: InputProps) {
  const { error = false, helperText = '', label, type = 'text', placeholder = label, disabled = false, ...rest } = props
  const inputId = useId()

  return (
    <div className='space-y-1'>
      <FieldWrapper disabled={disabled} error={error} htmlFor={inputId}>
        <input
          {...rest}
          id={inputId}
          type={type}
          disabled={disabled}
          placeholder={placeholder}
          className="peer h-8 w-full border-none bg-transparent p-0 placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm"
        />

        <span
          className="absolute left-3 top-3 -translate-y-1/2 text-xs text-gray-400 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-3 peer-focus:text-xs peer-focus:text-indigo-500"
        >
          {label}:
        </span>
      </FieldWrapper>
      <FieldHelper
        isError={error}
        helperText={helperText}
        maxLength={props.maxLength}
        currentLength={props.value?.length} />
    </div>
  )
}
