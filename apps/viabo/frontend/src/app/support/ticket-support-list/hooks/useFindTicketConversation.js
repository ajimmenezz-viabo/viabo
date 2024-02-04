import { useEffect, useState } from 'react'

import { useQuery } from '@tanstack/react-query'
import { toast } from 'react-toastify'

import { TICKETS_SUPPORT_LIST_KEYS } from '../adapters'
import { getSupportTicketConversation } from '../services'

import { getErrorAPI, getNotificationTypeByErrorCode } from '@/shared/interceptors'

export const useFindTicketConversation = (tickedId, options = {}) => {
  const [customError, setCustomError] = useState(null)

  const query = useQuery({
    queryKey: [TICKETS_SUPPORT_LIST_KEYS.TICKET_CONVERSATION, tickedId],
    queryFn: getSupportTicketConversation,
    refetchOnWindowFocus: false,
    retry: false,
    staleTime: 300000,
    ...options
  })

  useEffect(() => {
    if (query?.isError) {
      const errorMessage = getErrorAPI(
        query.error,
        'No se puede obtener la conversación del ticket. Intente nuevamente o reporte a sistemas'
      )
      setCustomError(errorMessage)
      toast.error(errorMessage, {
        type: getNotificationTypeByErrorCode(query.error)
      })
    }
  }, [query.isError, query.error])

  return {
    ...query,
    error: customError || null
  }
}
