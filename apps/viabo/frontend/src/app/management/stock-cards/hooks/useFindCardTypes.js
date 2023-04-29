import { useSnackbar } from 'notistack'
import { useState } from 'react'
import { useQuery } from '@tanstack/react-query'
import { MANAGEMENT_STOCK_CARDS_KEYS } from '@/app/management/stock-cards/adapters'
import { getErrorAPI } from '@/shared/interceptors'
import { getCardTypes } from '@/app/management/stock-cards/services'

export const useFindCardTypes = (options = {}) => {
  const { enqueueSnackbar } = useSnackbar()
  const [customError, setCustomError] = useState(null)
  const commerces = useQuery([MANAGEMENT_STOCK_CARDS_KEYS.CARD_TYPES_LIST], getCardTypes, {
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
