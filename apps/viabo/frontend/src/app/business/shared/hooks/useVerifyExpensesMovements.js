import { useMutation, useQueryClient } from '@tanstack/react-query'
import { toast } from 'react-toastify'

import { verifyExpenses } from '../services'

import { getErrorAPI, getNotificationTypeByErrorCode } from '@/shared/interceptors'
import { isFunction } from '@/shared/utils'

export const useVerifyExpensesMovements = (options = {}) => {
  const client = useQueryClient()
  const verify = useMutation(verifyExpenses, options)
  const mutate = async (formData, options) => {
    const { onSuccess, onError, ...mutationOptions } = options

    try {
      await toast.promise(verify.mutateAsync(formData, mutationOptions), {
        pending: 'Comprobando movimientos ...',
        success: {
          render({ data }) {
            //  client.invalidateQueries([FUNDING_ORDERS_KEYS.LIST])
            isFunction(onSuccess) && onSuccess(data)
            return 'Se creó la comprobación con éxito'
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
    ...verify,
    mutate
  }
}
