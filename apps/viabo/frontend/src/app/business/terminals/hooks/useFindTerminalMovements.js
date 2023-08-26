import { useState } from 'react'

import { useQuery } from '@tanstack/react-query'
import { endOfMonth, format, getMonth, startOfMonth } from 'date-fns'
import { toast } from 'react-toastify'

import { TERMINALS_KEYS } from '../adapters'
import { getTerminalMovements } from '../services'
import { useTerminals } from '../store'

import { getErrorAPI, getNotificationTypeByErrorCode } from '@/shared/interceptors'
import { monthOptions } from '@/shared/utils'

export const useFindTerminalMovements = (terminalId, date, options = {}) => {
  const setBalance = useTerminals(state => state.setBalance)
  const setGlobalBalance = useTerminals(state => state.setGlobalBalance)
  const resetBalance = useTerminals(state => state.resetBalance)
  const resetGlobalBalance = useTerminals(state => state.resetGlobalBalance)
  const month = monthOptions[getMonth(date)] ?? null
  const primerDiaMes = startOfMonth(date)
  const ultimoDiaMes = endOfMonth(date)
  const initialDate = format(primerDiaMes, 'yyyy-MM-dd')
  const finalDate = format(ultimoDiaMes, 'yyyy-MM-dd')
  const [customError, setCustomError] = useState(null)

  const key = terminalId ? [TERMINALS_KEYS.MOVEMENTS, terminalId] : [TERMINALS_KEYS.MOVEMENTS, 'global']
  const commerces = useQuery(key, ({ signal }) => getTerminalMovements(terminalId, initialDate, finalDate, signal), {
    staleTime: 60000,
    retry: false,
    refetchOnWindowFocus: false,
    onSuccess: data => {
      terminalId ? setBalance(data?.balance) : setGlobalBalance(data?.balance)
    },
    onError: error => {
      const errorMessage = getErrorAPI(
        error,
        'No se puede obtener la lista de movimientos de la terminal. Intente nuevamente o reporte a sistemas'
      )
      setCustomError(errorMessage)
      toast.error(errorMessage, {
        type: getNotificationTypeByErrorCode(error)
      })
      terminalId ? resetBalance() : resetGlobalBalance()
    },
    ...options
  })
  return {
    ...commerces,
    error: customError || null
  }
}
