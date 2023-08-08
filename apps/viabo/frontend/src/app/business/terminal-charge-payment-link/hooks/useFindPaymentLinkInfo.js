import { useState } from 'react'

import { useQuery } from '@tanstack/react-query'

import { CHARGE_PAYMENT_LINK } from '../adapters'
import { getPaymentLinkInfo } from '../services'

import { getErrorAPI } from '@/shared/interceptors'

export const useFindPaymentLinkInfo = (paymentId, options = {}) => {
  const [customError, setCustomError] = useState(null)
  const commerces = useQuery([CHARGE_PAYMENT_LINK.INFO], () => getPaymentLinkInfo(paymentId), {
    staleTime: 60000,
    onError: error => {
      const errorMessage = getErrorAPI(error, 'No se puede obtener la informacion de la liga de pago')
      setCustomError(errorMessage)
    },
    ...options
  })
  return {
    ...commerces,
    error: customError || null
  }
}
