import { useState } from 'react'
import { useAuth } from '@/shared/hooks'
import { useMutation } from '@tanstack/react-query'
import { getErrorAPI, getNotificationTypeByErrorCode } from '@/shared/interceptors'
import { logout } from '@/app/authentication/services'

export const useLogout = (options = {}) => {
  const [customError, setCustomError] = useState(null)
  const { logout: logoutContext } = useAuth()

  const register = useMutation(logout, {
    onSuccess: response => {
      setCustomError(null)
      logoutContext()
      // navigate('/dashboard')
    },
    onError: error => {
      setCustomError({
        message: getErrorAPI(error, 'Ocurrio un error inesperado. Intente nuevamente o reportelo al área de sistemas'),
        code: getNotificationTypeByErrorCode(error?.response?.status)
      })
    },
    ...options
  })

  return {
    ...register,
    error: customError || null
  }
}
