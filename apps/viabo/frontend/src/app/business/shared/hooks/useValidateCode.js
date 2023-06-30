import { useSnackbar } from 'notistack'
import { getErrorAPI } from '@/shared/interceptors'
import { useMutation } from '@tanstack/react-query'
import { validateCode } from '@/app/business/shared/services'

export const useValidateCode = (options = {}) => {
  const { enqueueSnackbar } = useSnackbar()
  return useMutation({
    mutationFn: validateCode,
    onError: error => {
      const message = getErrorAPI(error, 'No se puede validar el código')
      enqueueSnackbar(message, {
        variant: error?.status === 500 ? 'error' : 'warning',
        autoHideDuration: 5000
      })
    },
    ...options
  })
}
