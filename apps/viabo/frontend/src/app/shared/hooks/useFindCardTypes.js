import { useSnackbar } from 'notistack'
import { useState } from 'react'
import { useQuery } from '@tanstack/react-query'
import { getErrorAPI } from '@/shared/interceptors'
import { getCardTypes } from '@/app/shared/services'
import { SHARED_CARD_KEYS } from '@/app/shared/adapters'

export const useFindCardTypes = (options = {}) => {
  const { enqueueSnackbar } = useSnackbar()
  const [customError, setCustomError] = useState(null)
  const commerces = useQuery([SHARED_CARD_KEYS.CARD_TYPES_LIST], getCardTypes, {
    staleTime: 60 * 5000,
    onError: error => {
      const errorMessage = getErrorAPI(error, 'No se puede obtener la lista de los tipos de tarjeta')
      setCustomError(errorMessage)
      enqueueSnackbar(errorMessage, {
        variant: 'error',
        autoHideDuration: 5000
      })
    },
    ...options
  })
  return {
    ...commerces,
    error: customError || null
  }
}
