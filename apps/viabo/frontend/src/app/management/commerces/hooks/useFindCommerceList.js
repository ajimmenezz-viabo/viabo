import { useSnackbar } from 'notistack'
import { useQuery } from '@tanstack/react-query'
import { getErrorAPI } from '@/shared/interceptors'
import { MANAGEMENT_COMMERCES_KEYS } from '@/app/management/commerces/adapters'
import { getCommerceList } from '@/app/management/commerces/services'
import { useState } from 'react'

export const useFindCommerceList = (options = {}) => {
  const { enqueueSnackbar } = useSnackbar()
  const [customError, setCustomError] = useState(null)
  const commerces = useQuery([MANAGEMENT_COMMERCES_KEYS.COMMERCE_LIST], getCommerceList, {
    staleTime: 60 * 5000,
    onError: error => {
      const errorMessage = getErrorAPI(error, 'No se puede obtener la lista de comercios')
      setCustomError(errorMessage)
      enqueueSnackbar(errorMessage, {
        variant: 'error',
        autoHideDuration: 5000
      })
    },
    ...options
  })
  return {
    ...commerces,
    error: customError || null
  }
}
