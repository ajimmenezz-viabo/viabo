import { useState } from 'react'

import { useQuery } from '@tanstack/react-query'

import { ALL_COMMERCE_CARDS_KEYS } from '@/app/business/all-commerce-cards/adapters'
import { getCommerceCards } from '@/app/business/all-commerce-cards/services'
import { getErrorAPI } from '@/shared/interceptors'

export const useFindAllCommerceCards = (options = {}) => {
  const [customError, setCustomError] = useState(null)
  const commerces = useQuery([ALL_COMMERCE_CARDS_KEYS.LIST], getCommerceCards, {
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
