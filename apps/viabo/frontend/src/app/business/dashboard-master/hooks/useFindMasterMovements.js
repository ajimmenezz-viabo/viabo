import { useState } from 'react'

import { useQuery } from '@tanstack/react-query'
import { endOfMonth, format, startOfMonth } from 'date-fns'
import { toast } from 'react-toastify'

import { DASHBOARD_MASTER_KEYS } from '@/app/business/dashboard-master/adapters/dashboardMasterKeys'
import { getMasterMovements } from '@/app/business/dashboard-master/services'
import { getErrorAPI, getNotificationTypeByErrorCode } from '@/shared/interceptors'

export const useFindMasterMovements = (date, options = {}) => {
  const primerDiaMes = startOfMonth(date)
  const ultimoDiaMes = endOfMonth(date)
  const initialDate = format(primerDiaMes, 'yyyy-MM-dd')
  const finalDate = format(ultimoDiaMes, 'yyyy-MM-dd')
  const [customError, setCustomError] = useState(null)
  const movements = useQuery(
    [DASHBOARD_MASTER_KEYS.MOVEMENTS],
    ({ signal }) => getMasterMovements(initialDate, finalDate, signal),
    {
      staleTime: 60000,
      retry: false,
      refetchOnWindowFocus: false,
      onError: error => {
        const errorMessage = getErrorAPI(
          error,
          'No se puede obtener la lista de movimientos. Intente nuevamente o reporte a sistemas'
        )
        setCustomError(errorMessage)
        toast.error(errorMessage, {
          type: getNotificationTypeByErrorCode(error)
        })
      },
      ...options
    }
  )
  return {
    ...movements,
    error: customError || null
  }
}
