import { useState } from 'react'

import { useQuery } from '@tanstack/react-query'
import { endOfMonth, format, getMonth, startOfMonth } from 'date-fns'
import { toast } from 'react-toastify'

import { CARDS_COMMERCES_KEYS } from '@/app/business/cards/adapters'
import { getCardMovements } from '@/app/business/cards/services'
import { useCommerceDetailsCard } from '@/app/business/cards/store'
import { getErrorAPI, getNotificationTypeByErrorCode } from '@/shared/interceptors'
import { monthOptions } from '@/shared/utils'

export const useFindCardMovements = (cardId, date, options = {}) => {
  const month = monthOptions[getMonth(date)] ?? null
  const primerDiaMes = startOfMonth(date)
  const ultimoDiaMes = endOfMonth(date)
  const initialDate = format(primerDiaMes, 'yyyy-MM-dd')
  const finalDate = format(ultimoDiaMes, 'yyyy-MM-dd')
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
