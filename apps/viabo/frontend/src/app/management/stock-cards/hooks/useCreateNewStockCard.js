import { useState } from 'react'
import { useSnackbar } from 'notistack'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { getErrorAPI, getNotificationTypeByErrorCode } from '@/shared/interceptors'
import { MANAGEMENT_STOCK_CARDS_KEYS } from '@/app/management/stock-cards/adapters'
import { createNewStockCard } from '@/app/management/stock-cards/services'

export const useCreateNewStockCard = (options = {}) => {
  const { enqueueSnackbar } = useSnackbar()
  const [customError, setCustomError] = useState(null)
  const client = useQueryClient()

  const register = useMutation(createNewStockCard, {
    onSuccess: () => {
      setCustomError(null)
      client.removeQueries([MANAGEMENT_STOCK_CARDS_KEYS.STOCK_CARDS_LIST])
      enqueueSnackbar('Se agrego una nueva tarjeta al stock', {
        variant: 'success',
        autoHideDuration: 5000
      })
    },
    onError: error => {
      const errorFormatted = getErrorAPI(error, 'No se puede agregar la tarjeta al stock')
      enqueueSnackbar(errorFormatted, {
        variant: getNotificationTypeByErrorCode(error),
        autoHideDuration: 5000
      })
      setCustomError(errorFormatted)
    },
    ...options
  })

  return {
    ...register,
    error: customError || null
  }
}
