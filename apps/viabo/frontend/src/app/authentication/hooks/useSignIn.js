import { getErrorAPI, getNotificationTypeByErrorCode } from '@/shared/interceptors'
import { useState } from 'react'
import { useMutation } from '@tanstack/react-query'
import { useAuth } from '@/shared/hooks'
import { setSession } from '@/shared/utils'
import { signIn } from '@/app/authentication/services'

export const useSignIn = (options = {}) => {
  const [customError, setCustomError] = useState(null)
  const { dispatch } = useAuth()

  const register = useMutation(signIn, {
    onSuccess: response => {
      setCustomError(null)
      setSession(response?.token)
      dispatch({
        type: 'LOGIN',
        payload: {
          user: {}
        }
      })
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
