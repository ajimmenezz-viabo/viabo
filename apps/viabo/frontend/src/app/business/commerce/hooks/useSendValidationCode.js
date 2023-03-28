import { useMutation } from 'react-query'
import { useSnackbar } from 'notistack'
import { sendValidationCode } from '@/app/business/commerce/services'
import { getErrorAPI } from '@/shared/interceptors'

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
