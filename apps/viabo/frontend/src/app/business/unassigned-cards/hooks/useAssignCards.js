import { useMutation, useQueryClient } from '@tanstack/react-query'
import { toast } from 'react-toastify'
import { getErrorAPI, getNotificationTypeByErrorCode } from '@/shared/interceptors'
import { UNASSIGNED_CARDS_KEYS } from '@/app/business/unassigned-cards/adapters'
import { assignCards } from '@/app/business/unassigned-cards/services'
import { CARDS_COMMERCES_KEYS } from '@/app/business/cards/adapters'

export const useAssignCards = (options = {}) => {
  const client = useQueryClient()

  const transactionMutate = useMutation(assignCards, options)
  const transaction = async (formData, options) => {
    const { onSuccess, onError, mutationOptions } = options

    try {
      await toast.promise(transactionMutate.mutateAsync(formData, mutationOptions), {
        pending: 'Asignando Tarjetas ...',
        success: {
          render({ data }) {
            client.invalidateQueries([UNASSIGNED_CARDS_KEYS.LIST])
            client.invalidateQueries([CARDS_COMMERCES_KEYS.CARDS_COMMERCE_LIST])
            onSuccess()
            return 'Se asignaron las tarjetas con éxito'
          }
        }
      })
    } catch (error) {
      const errorFormatted = getErrorAPI(
        error,
        `No se puede realizar esta operacion en este momento. Intente nuevamente o reporte a sistemas`
      )
      onError(errorFormatted)
      toast.error(errorFormatted, {
        type: getNotificationTypeByErrorCode(error)
      })
    }
  }

  return {
    ...transactionMutate,
    mutate: transaction
  }
}
