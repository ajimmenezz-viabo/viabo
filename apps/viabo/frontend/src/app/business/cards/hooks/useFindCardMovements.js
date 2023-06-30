import { useState } from 'react'
import { useQuery } from '@tanstack/react-query'
import { CARDS_COMMERCES_KEYS } from '@/app/business/cards/adapters'
import { getCardMovements } from '@/app/business/cards/services'
import { getErrorAPI, getNotificationTypeByErrorCode } from '@/shared/interceptors'
import { endOfMonth, format, startOfMonth } from 'date-fns'
import { toast } from 'react-toastify'
import { useCommerceDetailsCard } from '@/app/business/cards/store'

export const useFindCardMovements = (cardId, date, options = {}) => {
  const primerDiaMes = startOfMonth(date)
  const ultimoDiaMes = endOfMonth(date)
  const initialDate = format(primerDiaMes, 'yyyy-MM-dd')
  const finalDate = format(ultimoDiaMes, 'yyyy-MM-dd')
  const [customError, setCustomError] = useState(null)
  const addInfoCard = useCommerceDetailsCard(state => state.addInfoCard)
  const commerces = useQuery(
    [CARDS_COMMERCES_KEYS.CARD_MOVEMENTS, cardId],
    () => getCardMovements(cardId, initialDate, finalDate),
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
          movements: [],
          expenses: '$0.00',
          income: '$0.00',
          balanceMovements: '$0.00'
        })
      },
      onSuccess: data => {
        addInfoCard(data)
      },
      ...options
    }
  )
  return {
    ...commerces,
    error: customError || null
  }
}
