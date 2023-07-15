import { useState } from 'react'
import { useQuery } from '@tanstack/react-query'
import { CARDS_COMMERCES_KEYS } from '@/app/business/cards/adapters'
import { getTransitBalance } from '@/app/business/cards/services'
import { getErrorAPI, getNotificationTypeByErrorCode } from '@/shared/interceptors'
import { toast } from 'react-toastify'

export const useFindTransitBalanceCommerce = (cardTypeId, options = {}) => {
  const [customError, setCustomError] = useState(null)
  const commerces = useQuery([CARDS_COMMERCES_KEYS.TRANSIT_BALANCE], () => getTransitBalance(cardTypeId), {
    staleTime: 60000,
    onError: error => {
      const errorMessage = getErrorAPI(error, 'No se puede obtener la informacion del saldo en transito')
      setCustomError(errorMessage)
      toast.error(errorMessage, {
        type: getNotificationTypeByErrorCode(error)
      })
    },
    ...options
  })
  return {
    ...commerces,
    error: customError || null
  }
}
