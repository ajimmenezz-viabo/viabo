import { useSnackbar } from 'notistack'
import { useQuery } from 'react-query'
import { getCommerceToken } from '@/app/business/commerce/services'
import { COMMERCE_KEYS } from '@/app/business/commerce/adapters'
import { getErrorAPI } from '@/shared/interceptors'

export const useFindCommerceToken = (email, options = {}) => {
  const { enqueueSnackbar } = useSnackbar()
  return useQuery([COMMERCE_KEYS.TOKEN_COMMERCE], () => getCommerceToken(email), {
    staleTime: 60 * 5000,
    onError: error => {
      const errorMessage = getErrorAPI(error, '😟 Error al obtener el comercio')
      enqueueSnackbar(errorMessage, {
        variant: 'error',
        autoHideDuration: 5000
      })
    },
    ...options
  })
}
