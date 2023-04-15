import { getErrorAPI, getNotificationTypeByErrorCode } from '@/shared/interceptors'
import { useState } from 'react'
import { useIsFetching, useMutation, useQuery } from '@tanstack/react-query'
import { useAuth } from '@/shared/hooks'
import { getUserModules, signIn } from '@/app/authentication/services'
import { AUTHENTICATION_KEYS } from '@/app/authentication/adapters'
import { setSession } from '@/shared/utils'

export const useSignIn = (options = {}) => {
  const [customError, setCustomError] = useState(null)
  const [tokenExists, setTokenExists] = useState(false)
  const { login } = useAuth()

  const isFetching = useIsFetching([AUTHENTICATION_KEYS.USER_MODULES])

  const signInMutation = useMutation(signIn, {
    onSuccess: response => {
      setCustomError(null)
      setSession(response?.token)
      setTokenExists(true)
    },
    onError: error => {
      setTokenExists(false)
      setSession(null)
      setCustomError({
        message: getErrorAPI(error, 'Ocurrio un error inesperado. Intente nuevamente o reportelo al área de sistemas'),
        code: getNotificationTypeByErrorCode(error?.response?.status)
      })
    },
    ...options
  })

  const userModules = useQuery([AUTHENTICATION_KEYS.USER_MODULES], getUserModules, {
    onSuccess: data => {
      login()
      setCustomError(null)
      setTokenExists(false)
    },
    onError: error => {
      setTokenExists(false)
      setSession(null)
      setCustomError({
        message: getErrorAPI(error, 'Ocurrio un error inesperado. Intente nuevamente o reportelo al área de sistemas'),
        code: getNotificationTypeByErrorCode(error?.response?.status)
      })
    },
    enabled: !!tokenExists,
    retry: false
  })

  return {
    ...signInMutation,
    setCustomError,
    isError: signInMutation.isError || userModules.isError,
    isSuccess: signInMutation.isSuccess && userModules.isSuccess,
    isLoading: signInMutation.isLoading || isFetching === 1,
    error: customError ?? null
  }
}
