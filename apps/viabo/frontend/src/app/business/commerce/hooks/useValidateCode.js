import { useMutation } from 'react-query'
import { useSnackbar } from 'notistack'
import { validateCode } from '@/app/business/commerce/services'
import { getErrorAPI } from '@/shared/interceptors'

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
