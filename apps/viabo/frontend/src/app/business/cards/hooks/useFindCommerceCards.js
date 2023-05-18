import { useState } from 'react'
import { useQuery } from '@tanstack/react-query'
import { getErrorAPI } from '@/shared/interceptors'
import { CARDS_COMMERCES_KEYS } from '@/app/business/cards/adapters'
import { getCommerceCards } from '@/app/business/cards/services'

export const useFindCommerceCards = (options = {}) => {
  const [customError, setCustomError] = useState(null)
  const commerces = useQuery([CARDS_COMMERCES_KEYS.CARDS_COMMERCE_LIST], getCommerceCards, {
    staleTime: 60000,
    onError: error => {
      const errorMessage = getErrorAPI(
        error,
        'No se puede obtener la lista de tarjetas. Intente nuevamente o reporte a sistemas'
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