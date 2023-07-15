import { useState } from 'react'
import { useQuery } from '@tanstack/react-query'
import { CARDS_COMMERCES_KEYS } from '@/app/business/cards/adapters'
import { getMainCardCommerce } from '@/app/business/cards/services'
import { getErrorAPI, getNotificationTypeByErrorCode } from '@/shared/interceptors'
import { useCommerceDetailsCard } from '@/app/business/cards/store'
import { toast } from 'react-toastify'

export const useFindMainCard = (cardTypeId, options = {}) => {
  const [customError, setCustomError] = useState(null)
  const setMainCard = useCommerceDetailsCard(state => state.setMainCard)
  const commerces = useQuery(
    [CARDS_COMMERCES_KEYS.MAIN_CARD],
    ({ signal }) => getMainCardCommerce(cardTypeId, signal),
    {
      staleTime: 60000,
      refetchOnWindowFocus: false,
      onError: error => {
        const errorMessage = getErrorAPI(error, 'No se puede obtener la informacion de la tarjeta principal')
        setCustomError(errorMessage)
        setMainCard(null)
        toast.error(errorMessage, {
          type: getNotificationTypeByErrorCode(error)
        })
      },
      onSuccess: data => {
        setMainCard(data)
      },
      ...options
    }
  )
  return {
    ...commerces,
    error: customError || null
  }
}
