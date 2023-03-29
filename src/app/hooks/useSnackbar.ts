import { v4 as uuid } from 'uuid'
import { useSnackbarStore, type Snackbar } from '@app/store/SnackbarStore'

const MAX_STACKS = 3

interface SnacbarApiResponse {
  ok: boolean
  message: string
}

export function useSnackbar () {
  const { snackbar: snackbarController } = useSnackbarStore()

  const snackbarApiResponse = ({ message, ok }: SnacbarApiResponse) => {
    const normalizedItem: Snackbar = {
      color: ok ? 'success' : 'error',
      message,
      id: uuid(),
      duration: ok ? 2000 : 4000
    }

    snackbarController(normalizedItem, MAX_STACKS)
  }

  const snackbar = (item: Snackbar) => {
    snackbarController(item, MAX_STACKS)
  }

  return {
    snackbar,
    snackbarApiResponse
  }
}
