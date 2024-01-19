import { useEffect, useState } from 'react'

import { useQuery } from '@tanstack/react-query'

import { CATALOGS_SHARED_KEYS } from '../adapters'
import { getProfilesCatalog } from '../services'

import { getErrorAPI } from '@/shared/interceptors'

export const useFindCommerceInfoBySlug = (options = {}) => {
  const [customError, setCustomError] = useState(null)

  const query = useQuery({
    queryKey: [CATALOGS_SHARED_KEYS.PROFILES],
    queryFn: getProfilesCatalog,
    staleTime: 60000,
    ...options
  })

  useEffect(() => {
    if (query?.isError) {
      const errorMessage = getErrorAPI(
        query.error,
        'No se puede obtener los perfiles del sistema. Intente nuevamente o reporte a sistemas'
      )
      setCustomError(errorMessage)
    }
  }, [query.isError, query.error])

  return {
    ...query,
    error: customError || null
  }
}
