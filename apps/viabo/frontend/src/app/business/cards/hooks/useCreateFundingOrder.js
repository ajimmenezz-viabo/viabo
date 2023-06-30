import { useMutation } from '@tanstack/react-query'
import { createFundingOrder } from '@/app/business/cards/services'
import { toast } from 'react-toastify'
import { getErrorAPI, getNotificationTypeByErrorCode } from '@/shared/interceptors'

export const useCreateFundingOrder = (options = {}) => {
  const fundingOrder = useMutation(createFundingOrder, options)
  const funding = async (formData, options) => {
    const { onSuccess, onError, mutationOptions } = options

    try {
      await toast.promise(fundingOrder.mutateAsync(formData, mutationOptions), {
        pending: 'Creando Orden de Fondeo ...',
        success: {
          render({ data }) {
            onSuccess(data)
            return 'Se creó la orden de fondeo con éxito'
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
    ...fundingOrder,
    mutate: funding
  }
}