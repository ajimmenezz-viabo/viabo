import { useSnackbar } from 'notistack'
import { useMutation } from 'react-query'
import { setServicesToCommerce } from '@/app/business/commerce/services'
import { getErrorAPI } from '@/shared/interceptors'

export const useSetCommerceServices = (options = {}) => {
  const { enqueueSnackbar } = useSnackbar()
  return useMutation({
    mutationFn: setServicesToCommerce,
    onSuccess: () => {
      enqueueSnackbar('Servicios agregados al comercio!', {
        variant: 'success'
      })
    },
    onError: error => {
      const message = getErrorAPI(error, 'No se puede agregar los servicios al comercio')
      enqueueSnackbar(message, {
        variant: error?.status === 500 ? 'error' : 'warning',
        autoHideDuration: 5000
      })
    },
    ...options
  })
}
