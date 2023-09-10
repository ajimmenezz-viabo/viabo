import { useState } from 'react'

import { useMutation, useQueryClient } from '@tanstack/react-query'
import { useSnackbar } from 'notistack'

import { CARDS_COMMERCES_KEYS } from '@/app/business/viabo-card/cards/adapters'
import { changeStatusCard } from '@/app/business/viabo-card/cards/services'
import { getErrorAPI, getNotificationTypeByErrorCode } from '@/shared/interceptors'

export const useToggleStatusCard = (options = {}) => {
  const { enqueueSnackbar } = useSnackbar()
  const [customError, setCustomError] = useState(null)
  const client = useQueryClient()

  const register = useMutation(changeStatusCard, {
    onSuccess: card => {
      setCustomError(null)
      client.refetchQueries([CARDS_COMMERCES_KEYS.CARD_INFO, card?.id])
      enqueueSnackbar(card?.cardON ? 'Se encendió la tarjeta con éxito' : 'Se apagó la tarjeta con éxito', {
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
