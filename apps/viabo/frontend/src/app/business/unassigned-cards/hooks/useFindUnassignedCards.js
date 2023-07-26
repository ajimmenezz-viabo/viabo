import { useState } from 'react'

import { useQuery } from '@tanstack/react-query'

import { UNASSIGNED_CARDS_KEYS } from '@/app/business/unassigned-cards/adapters'
import { getUnassignedCommerceCards } from '@/app/business/unassigned-cards/services'
import { getErrorAPI } from '@/shared/interceptors'

export const useFindUnassignedCards = (options = {}) => {
  const [customError, setCustomError] = useState(null)
  const commerces = useQuery([UNASSIGNED_CARDS_KEYS.LIST], getUnassignedCommerceCards, {
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
