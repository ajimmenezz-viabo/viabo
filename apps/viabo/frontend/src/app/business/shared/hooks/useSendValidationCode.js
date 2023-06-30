import { useSnackbar } from 'notistack'
import { getErrorAPI } from '@/shared/interceptors'
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
        variant: error?.status === 500 ? 'error' : 'warning',
        autoHideDuration: 5000
      })
    },
    ...options
  })
}
