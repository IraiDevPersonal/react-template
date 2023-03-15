import { type VARIANTS, type FILLED_COLORS } from './styles'

type ChangeEvent<El> = React.ChangeEvent<El>
interface OptionsRef { name: string, id: string }
interface SyntheticEvent<Value> {
  target: {
    name: string
    value: Value
    type: 'text'
  }
}

interface FieldProps<Event, Value> {
  defaultValue?: string
  value?: Value
  checked?: boolean
  name?: string
  label?: string
  helperText?: string
  placeholder?: string
  maxLength?: number
  error?: boolean
  disabled?: boolean
  options: Options
  type?: InputTypes
  rows?: number
  cols?: number
  findBy?: 'value' | 'label'
  enableEmptyOption?: boolean
  labelDisplay?: LabelDisplay
  onChange?: (e: Event) => void
  onBlur?: (e: Event) => void
}

export interface ObjectType<T> {
  [key: string]: T
}
export type LabelDisplay = 'label' | 'avatar' | 'both'
export interface SelectOption {
  label: string
  value: string
  avatar?: string | React.ReactNode
  ref?: OptionRef[]
}

export type InputTypes = 'text' | 'password' | 'email'
export type Options = SelectOption[]

export type InputChangeEvent = ChangeEvent<HTMLInputElement>
export type TextareaChangeEvent = ChangeEvent<HTMLTextAreaElement>
export type SelectChangeEvent = SyntheticEvent<SelectOption>
export type MultiSelectChangeEvent = SyntheticEvent<string[]>

export type InputProps = Omit<FieldProps<InputChangeEvent, string>, 'rows' | 'cols' | 'checked' | 'options' | 'findBy' | 'enableEmptyOption'>
export type TextareaProps = Omit<FieldProps<TextareaChangeEvent, string>, 'type' | 'checked' | 'options' | 'findBy' | 'enableEmptyOption'>
export type CheckboxProps = Pick<FieldProps<InputChangeEvent, any>, 'checked' | 'disabled' | 'label' | 'name' | 'onChange' | 'findBy' | 'enableEmptyOption'>
export type SelectProps = Omit<FieldProps<SelectChangeEvent, SelectOption>, 'maxLength' | 'type' | 'defaultValue' | 'checked'>
export type MultiSelectProps = Omit<FieldProps<MultiSelectChangeEvent, string[]>, 'maxLength' | 'type' | 'defaultValue' | 'checked' | 'enableEmptyOption'>

export type ReactRef = React.LegacyRef<HTMLInputElement> | undefined

export type Variant = keyof typeof VARIANTS
export type Colors = keyof typeof FILLED_COLORS

export interface ColorsProps {
  variant: Variant
  color: Colors
}
