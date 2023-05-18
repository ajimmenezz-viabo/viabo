import { useSnackbar } from 'notistack'
import { useState } from 'react'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { transactionsCard } from '@/app/business/cards/services'
import { CARDS_COMMERCES_KEYS } from '@/app/business/cards/adapters'
import { getErrorAPI, getNotificationTypeByErrorCode } from '@/shared/interceptors'

export const useTransactionCard = (options = {}) => {
  const { enqueueSnackbar } = useSnackbar()
  const [customError, setCustomError] = useState(null)
  const client = useQueryClient()

  const register = useMutation(transactionsCard, {
    onSuccess: transactions => {
      setCustomError(null)
      client.refetchQueries([CARDS_COMMERCES_KEYS.CARD_INFO, transactions?.cardId])
      enqueueSnackbar('Se realizo la transacción con éxito', {
        variant: 'success',
        autoHideDuration: 5000
      })
    },
    onError: error => {
      const errorFormatted = getErrorAPI(
        error,
        `No se puede realizar esta operacion en este momento. Intente nuevamente o reporte a sistemas`
      )
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
