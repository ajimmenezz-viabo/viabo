import { useMutation, useQuery } from 'react-query'
import { useSnackbar } from 'notistack'
import { getErrorAPI } from '@/shared/interceptors'
import { createNewCommerce, getCommerceToken } from '@/app/business/commerce/services'
import { COMMERCE_KEYS } from '@/app/business/commerce/adapters'
import { useCallback } from 'react'

export const useRegisterCommerce = (options = {}) => {
  const { enqueueSnackbar } = useSnackbar()

  const register = useMutation(createNewCommerce, options)

  const token = useQuery([COMMERCE_KEYS.TOKEN_COMMERCE], () => getCommerceToken(register?.data?.email || ''), {
    staleTime: 60 * 5000,
    enabled: Boolean(register?.isSuccess),
    ...options
  })

  const handleSuccess = useCallback(
    data => {
      if (token.isSuccess && register.isSuccess) {
        enqueueSnackbar('Se creo el comercio', {
          variant: 'success',
          autoHideDuration: 5000
        })
        data.callback(token || register)
      }
    },
    [token.isSuccess, register.isSuccess, enqueueSnackbar]
  )

  const handleError = useCallback(
    data => {
      if (token.isError || register.isError) {
        const error = register.error || token.error
        console.log(error)
        const message = getErrorAPI(error, 'No se puede crear el comercio')
        enqueueSnackbar(message, {
          variant: error?.status === 500 ? 'error' : 'warning',
          autoHideDuration: 5000
        })
        data.callback(token || register)
      }
    },
    [token.isError, register.isError, enqueueSnackbar]
  )

  return {
    isError: token.isError || register.isError,
    isSuccess: token.isSuccess && register.isSuccess,
    isLoading: token.isLoading || register.isLoading,
    onSuccess: handleSuccess,
    onError: handleError,
    mutate: register.mutate,
    data: token.data
  }
}
