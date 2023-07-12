import { useSnackbar } from 'notistack'
import { getErrorAPI, getNotificationTypeByErrorCode } from '@/shared/interceptors'
import { useMutation } from '@tanstack/react-query'
import { sendValidationCode } from '@/app/business/shared/services/ValidationUserRepository'

export const useSendValidationCode = (options = {}) => {
  const { enqueueSnackbar } = useSnackbar()
  return useMutation({
    mutationFn: sendValidationCode,
    onSuccess: () => {
      enqueueSnackbar('Código Enviado!', {
        variant: 'success'
      })
    },
    onError: error => {
      const message = getErrorAPI(error, 'No se puede enviar el código')
      enqueueSnackbar(message, {
        variant: getNotificationTypeByErrorCode(error),
        autoHideDuration: 5000
      })
    },
    ...options
  })
}
