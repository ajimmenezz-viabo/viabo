import { useMutation } from '@tanstack/react-query'
import { toast } from 'react-toastify'

import { generatePaymentByVirtualTerminal } from '../services'

import { getErrorAPI, getNotificationTypeByErrorCode } from '@/shared/interceptors'

export const useGeneratePaymentByVirtualTerminal = (options = {}) => {
  const payment = useMutation(generatePaymentByVirtualTerminal, options)
  const transaction = async (formData, options) => {
    const { onSuccess, onError, mutationOptions } = options

    try {
      await toast.promise(payment.mutateAsync(formData, mutationOptions), {
        pending: 'Realizando Pago ...',
        success: {
          render({ data }) {
            onSuccess(data)
            return 'Se completó la transacción y se envió el comprobante con éxito'
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
    ...payment,
    mutate: transaction
  }
}
