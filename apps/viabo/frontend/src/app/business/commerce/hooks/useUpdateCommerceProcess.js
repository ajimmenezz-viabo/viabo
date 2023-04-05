import { useSnackbar } from 'notistack'
import { useMutation } from 'react-query'
import { updateCommerceProcess } from '@/app/business/commerce/services'
import { getErrorAPI } from '@/shared/interceptors'

export const useUpdateCommerceProcess = (options = {}) => {
  const { enqueueSnackbar } = useSnackbar()
  return useMutation({
    mutationFn: updateCommerceProcess,
    onSuccess: () => {
      enqueueSnackbar('Se actualizo la información del proceso!', {
        variant: 'success'
      })
    },
    onError: error => {
      const message = getErrorAPI(error, 'No se puede agregar la información al proceso')
      enqueueSnackbar(message, {
        variant: error?.status === 500 ? 'error' : 'warning',
        autoHideDuration: 5000
      })
    },
    ...options
  })
}
