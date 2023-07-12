import { useSnackbar } from 'notistack'
import { useMutation } from '@tanstack/react-query'
import { getErrorAPI, getNotificationTypeByErrorCode } from '@/shared/interceptors'
import { validateDemoCard } from '@/app/business/register-cards/services'

export const useValidateDemoCard = (options = {}) => {
  const { enqueueSnackbar } = useSnackbar()
  return useMutation({
    mutationFn: validateDemoCard,
    onError: error => {
      const message = getErrorAPI(error, 'No se puede validar la tarjeta.')
      enqueueSnackbar(message, {
        variant: getNotificationTypeByErrorCode(error),
        autoHideDuration: 5000
      })
    },
    ...options
  })
}
