import { useState } from 'react'

import { useQuery } from '@tanstack/react-query'
import { format } from 'date-fns'
import { toast } from 'react-toastify'

import { CARDS_COMMERCES_KEYS } from '@/app/business/viabo-card/cards/adapters'
import { getCardMovements } from '@/app/business/viabo-card/cards/services'
import { useCommerceDetailsCard } from '@/app/business/viabo-card/cards/store'
import { getErrorAPI, getNotificationTypeByErrorCode } from '@/shared/interceptors'
import { fDate } from '@/shared/utils'

export const useFindCardMovements = (cardId, startDate, endDate, options = {}) => {
  if (!startDate || !endDate) {
    return null
  }
  const initialDate = format(startDate, 'yyyy-MM-dd')
  const finalDate = format(endDate, 'yyyy-MM-dd')
  const month = `${fDate(startDate)} - ${fDate(endDate)}` ?? null
  const [customError, setCustomError] = useState(null)
  const addInfoCard = useCommerceDetailsCard(state => state.addInfoCard)
  const commerces = useQuery(
    [CARDS_COMMERCES_KEYS.CARD_MOVEMENTS, cardId],
    ({ signal }) => getCardMovements(cardId, initialDate, finalDate, signal),
    {
      staleTime: 60000,
      retry: false,
      refetchOnWindowFocus: false,
      onError: error => {
        const errorMessage = getErrorAPI(
          error,
          'No se puede obtener la lista de movimientos de la tarjeta. Intente nuevamente o reporte a sistemas'
        )
        setCustomError(errorMessage)
        toast.error(errorMessage, {
          type: getNotificationTypeByErrorCode(error)
        })
        addInfoCard({
          monthBalance: month,
          movements: [],
          expenses: '$0.00',
          income: '$0.00',
          balanceMovements: '$0.00'
        })
      },
      ...options
    }
  )
  return {
    ...commerces,
    error: customError || null
  }
}
