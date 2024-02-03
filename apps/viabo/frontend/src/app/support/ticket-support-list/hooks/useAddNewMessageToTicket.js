import { useMutation, useQueryClient } from '@tanstack/react-query'
import { toast } from 'react-toastify'

import { TICKETS_SUPPORT_LIST_KEYS } from '../adapters'
import { addMessageToSupportTicketConversation } from '../services'

import { getErrorAPI, getNotificationTypeByErrorCode } from '@/shared/interceptors'
import { isFunction } from '@/shared/utils'

export const useAddNewMessageToTicket = (options = {}) => {
  const client = useQueryClient()
  const setMessage = useMutation({
    mutationFn: addMessageToSupportTicketConversation,
    ...options
  })
  const mutate = async (formData, options) => {
    const { onSuccess, onError, ...mutationOptions } = options

    try {
      await toast.promise(setMessage.mutateAsync(formData, mutationOptions), {
        pending: 'Agregando Mensaje al Ticket...',
        success: {
          render({ data }) {
            client.invalidateQueries([TICKETS_SUPPORT_LIST_KEYS.TICKET_CONVERSATION])
            isFunction(onSuccess) && onSuccess(data)
            return 'Se envió el mensaje con éxito'
          }
        }
      })
    } catch (error) {
      const errorFormatted = getErrorAPI(
        error,
        `No se puede realizar esta operación en este momento. Intente nuevamente o reporte a sistemas`
      )
      isFunction(onError) && onError(errorFormatted)
      toast.error(errorFormatted, {
        type: getNotificationTypeByErrorCode(error)
      })
    }
  }

  return {
    ...setMessage,
    mutate
  }
}
