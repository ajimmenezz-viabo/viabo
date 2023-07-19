import { useMutation, useQueryClient } from '@tanstack/react-query'
import { transactionsCard } from '@/app/business/cards/services'
import { CARDS_COMMERCES_KEYS } from '@/app/business/cards/adapters'
import { getErrorAPI, getNotificationTypeByErrorCode } from '@/shared/interceptors'
import { toast } from 'react-toastify'

export const useTransactionCard = (options = {}) => {
  const client = useQueryClient()

  const transactionMutate = useMutation(transactionsCard, options)
  const transaction = async (formData, options) => {
    const { onSuccess, onError, mutationOptions } = options

    try {
      await toast.promise(transactionMutate.mutateAsync(formData, mutationOptions), {
        pending: 'Procesando Transferencia ...',
        success: {
          render({ data: transactions }) {
            client.fetchQuery([CARDS_COMMERCES_KEYS.TRANSIT_BALANCE])
            client.invalidateQueries([CARDS_COMMERCES_KEYS.CARD_INFO, transactions?.cardId])
            client.fetchQuery([CARDS_COMMERCES_KEYS.CARD_MOVEMENTS, transactions?.cardId])
            client.fetchQuery([CARDS_COMMERCES_KEYS.MAIN_CARD])
            onSuccess(transactions)
            return 'Se realizo la transferencia con éxito'
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
    transaction
  }
}
