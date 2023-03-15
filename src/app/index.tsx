import { useState } from 'react'
import { Input, MultiSelect, Select, Textarea } from './components/ui'
import '@css/index.css'
import { type SelectOption } from '@/utils/types'
import { color } from '@/utils/styles'

const OPTIONS: SelectOption[] = [
  { label: 'valor 1', value: '1' },
  { label: 'valor 2', value: '2' },
  { label: 'valor 3', value: '3' },
  { label: 'valor 4', value: '4' }
]

export default function App() {
  const [value, setValue] = useState('')
  const [multiselect, setMultiselect] = useState<string[]>(['1'])
  const [select, setSelect] = useState<SelectOption>({ label: 'ninguno', value: '' })
  return (
    <div className='container mx-auto h-screen w-full grid place-content-center gap-3'>

      <Input label='test' value={value} onChange={(e) => { setValue(e.target.value) }} helperText={value} />
      <Textarea label='test' value={value} onChange={(e) => { setValue(e.target.value) }} helperText={value} />
      <Select label='select' value={select} onChange={(e) => { setSelect(e.target.value) }} options={OPTIONS} helperText={value} />
      <MultiSelect label='multi-select' value={multiselect} onChange={e => { setMultiselect(e.target.value) }} options={OPTIONS} helperText={value} />

      <button className={`py-2 px-4 transition-colors duration-300 font-semibold ${color({ variant: 'outlined', color: 'error' })}`}>
        boton
      </button>
    </div>
  )
}
