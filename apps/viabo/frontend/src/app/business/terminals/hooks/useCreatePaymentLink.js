import { useMutation } from '@tanstack/react-query'
import { toast } from 'react-toastify'

import { createPaymentLink } from '../services'

import { getErrorAPI, getNotificationTypeByErrorCode } from '@/shared/interceptors'

export const useCreatePaymentLink = (options = {}) => {
  const paymenLink = useMutation(createPaymentLink, options)
  const payment = async (formData, options) => {
    const { onSuccess, onError, mutationOptions } = options

    try {
      await toast.promise(paymenLink.mutateAsync(formData, mutationOptions), {
        pending: 'generando Liga de Pago ...',
        success: {
          render({ data }) {
            onSuccess(data)
            return 'Se creó la liga de pago con éxito'
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
    ...paymenLink,
    mutate: payment
  }
}
