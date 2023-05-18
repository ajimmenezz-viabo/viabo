import { useState } from 'react'
import { useQuery } from '@tanstack/react-query'
import { CARDS_COMMERCES_KEYS } from '@/app/business/cards/adapters'
import { getCardInfo } from '@/app/business/cards/services'
import { getErrorAPI } from '@/shared/interceptors'

export const useFindCardDetails = (cardId, options = {}) => {
  const [customError, setCustomError] = useState(null)
  const commerces = useQuery([CARDS_COMMERCES_KEYS.CARD_INFO, cardId], () => getCardInfo(cardId), {
    staleTime: 60000,
    onError: error => {
      const errorMessage = getErrorAPI(
        error,
        'No se puede obtener la informacion de la tarjeta. Intente nuevamente o reporte a sistemas'
      )
      setCustomError(errorMessage)
    },
    ...options
  })
  return {
    ...commerces,
    error: customError || null
  }
}