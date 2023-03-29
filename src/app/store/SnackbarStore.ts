import { create } from 'zustand'
import { type Colors } from '@/utils/types'

export interface Snackbar {
  duration: number
  message: string
  color?: Colors
  id: string
}

export type SnackbarId = Pick<Snackbar, 'id'>

interface Store {
  items: Snackbar[]
  snackbar: (item: Snackbar, maxStack: number) => void
  removeItem: (key: SnackbarId) => void
}

export const useSnackbarStore = create<Store>()((set) => ({
  items: [],
  snackbar: (item, maxStack) => {
    set(({ items: prevState }) => ({ items: snackbar(item, maxStack, prevState) }))
  },
  removeItem: (id) => {
    set(({ items: prevState }) => ({ items: removeItem(id, prevState) }))
  }
}))

function snackbar (item: Snackbar, maxStack: number, prevState: Snackbar[]) {
  if (prevState.length === 0) {
    return [item]
  }

  if (prevState.length === maxStack) {
    const filteredItems = prevState.filter((_, idx) => idx !== 0)
    return [...filteredItems, item]
  }

  return [...prevState, item]
}

function removeItem (id: SnackbarId, prevState: Snackbar[]) {
  return prevState.filter(item => item.id as unknown as SnackbarId !== id)
}
