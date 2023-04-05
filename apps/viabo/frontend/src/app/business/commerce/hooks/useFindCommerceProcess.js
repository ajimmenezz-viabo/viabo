import { useSnackbar } from 'notistack'
import { useQuery } from 'react-query'
import { COMMERCE_KEYS } from '@/app/business/commerce/adapters'
import { getCommerceProcess } from '@/app/business/commerce/services'
import { getErrorAPI } from '@/shared/interceptors'

export const useFindCommerceProcess = (token, options = {}) => {
  const { enqueueSnackbar } = useSnackbar()
  return useQuery([COMMERCE_KEYS.COMMERCE_PROCESS], () => getCommerceProcess(token), {
    staleTime: 60 * 5000,
    onError: error => {
      const errorMessage = getErrorAPI(error, '😟 Error al obtener el proceso del comercio')
      enqueueSnackbar(errorMessage, {
        variant: 'error',
        autoHideDuration: 5000
      })
    },
    ...options
  })
}
