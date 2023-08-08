import { useMutation } from '@tanstack/react-query'
import { toast } from 'react-toastify'

import { generateChargeFromPaymentLink } from '../services'

import { getErrorAPI, getNotificationTypeByErrorCode } from '@/shared/interceptors'

export const useCreatePaymentCharge = (options = {}) => {
  const paymenLink = useMutation(generateChargeFromPaymentLink, options)
  const payment = async (formData, options) => {
    const { onSuccess, onError, mutationOptions } = options

    try {
      await toast.promise(paymenLink.mutateAsync(formData, mutationOptions), {
        pending: 'Realizando cargo ...',
        success: {
          render({ data }) {
            onSuccess(data)
            return 'Se realizo el pago con éxito'
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
