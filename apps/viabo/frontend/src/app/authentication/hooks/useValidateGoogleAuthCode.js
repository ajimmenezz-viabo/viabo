import { useMutation } from '@tanstack/react-query'
import { toast } from 'react-toastify'

import { validateGoogleAuthCode } from '../services'

import { getErrorAPI, getNotificationTypeByErrorCode } from '@/shared/interceptors'
import { isFunction } from '@/shared/utils'

export const useValidateGoogleAuthCode = (options = {}) => {
  const googleAuth = useMutation(validateGoogleAuthCode, options)
  const mutate = async (formData, options) => {
    const { onSuccess, onError, mutationOptions } = options

    try {
      const data = await toast.promise(googleAuth.mutateAsync(formData, mutationOptions), {
        pending: 'Validando Código...'
      })
      isFunction(onSuccess) && onSuccess(data)
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
    ...googleAuth,
    mutate
  }
}
