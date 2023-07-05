import { useState } from 'react'
import { useQuery } from '@tanstack/react-query'
import { CARDS_COMMERCES_KEYS } from '@/app/business/cards/adapters'
import { getMainCardCommerce } from '@/app/business/cards/services'
import { getErrorAPI } from '@/shared/interceptors'
import { useCommerceDetailsCard } from '@/app/business/cards/store'

export const useFindMainCard = (options = {}) => {
  const [customError, setCustomError] = useState(null)
  const setMainCard = useCommerceDetailsCard(state => state.setMainCard)
  const commerces = useQuery([CARDS_COMMERCES_KEYS.MAIN_CARD], getMainCardCommerce, {
    staleTime: 60000,
    refetchOnWindowFocus: false,
    onError: error => {
      const errorMessage = getErrorAPI(error, 'No se puede obtener la informacion de la tarjeta principal')
      setCustomError(errorMessage)
      setMainCard(null)
    },
    onSuccess: data => {
      setMainCard(data)
    },
    ...options
  })
  return {
    ...commerces,
    error: customError || null
  }
}
