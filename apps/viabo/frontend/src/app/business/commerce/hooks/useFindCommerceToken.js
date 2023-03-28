import { useSnackbar } from 'notistack'
import { useQuery } from 'react-query'
import { getCommerceToken } from '@/app/business/commerce/services'
import { COMMERCE_KEYS } from '@/app/business/commerce/adapters'

export const useFindCommerceToken = (options = {}) => {
  const { enqueueSnackbar } = useSnackbar()
  return useQuery([COMMERCE_KEYS.TOKEN_COMMERCE], getCommerceToken, {
    staleTime: 60 * 5000,
    onError: () => {
      enqueueSnackbar(`Algo salio mal 😟 !! : Error al obtener el comercio`, {
        variant: 'error',
        autoHideDuration: 5000
      })
    },
    ...options
  })
}
