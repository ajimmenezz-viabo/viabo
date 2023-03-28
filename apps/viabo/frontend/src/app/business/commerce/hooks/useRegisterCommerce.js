import { useMutation } from 'react-query'
import { useSnackbar } from 'notistack'
import { getErrorAPI } from '@/shared/interceptors'
import { createNewCommerce } from '@/app/business/commerce/services'
import { useState } from 'react'

export const useRegisterCommerce = (options = {}) => {
  const { enqueueSnackbar } = useSnackbar()
  const [customError, setCustomError] = useState(null)

  const register = useMutation(createNewCommerce, {
    onSuccess: () => {
      setCustomError(null)
      enqueueSnackbar('Se creo el comercio', {
        variant: 'success',
        autoHideDuration: 5000
      })
    },
    onError: error => {
      setCustomError(getErrorAPI(error, 'No se puede crear el comercio'))
    },
    ...options
  })

  return {
    ...register,
    error: customError || null
  }
}
