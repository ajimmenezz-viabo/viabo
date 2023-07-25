import { createContext, useEffect, useReducer } from 'react'
import PropTypes from 'prop-types'
import { isValidToken, setSession } from '@/shared/utils'
import jwtDecode from 'jwt-decode'
import { UseFindModulesByUser } from '@/app/authentication/hooks'
import { axios } from '@/shared/interceptors'
import { useQueryClient } from '@tanstack/react-query'
import { resetAllStores } from '@/app/shared/store'

const initialState = {
  isAuthenticated: false,
  isInitialized: false,
  isFetchingModules: false,
  user: null
}

const handlers = {
  INITIALIZE: (state, action) => {
    const { isAuthenticated, user } = action.payload
    return {
      ...state,
      isAuthenticated,
      isInitialized: true,
      user
    }
  },
  LOADING: (state, action) => ({
    ...state,
    isFetchingModules: action.payload
  }),
  LOGIN: (state, action) => {
    const { user } = action.payload

    return {
      ...state,
      isAuthenticated: true,
      isFetchingModules: false,
      user
    }
  },
  LOGOUT: state => ({
    ...state,
    isAuthenticated: false,
    isFetchingModules: false,
    user: null
  })
}

const reducer = (state, action) => (handlers[action.type] ? handlers[action.type](state, action) : state)

const AuthContext = createContext({
  ...initialState,
  method: 'jwt',
  login: () => Promise.resolve(),
  logout: () => Promise.resolve(),
  dispatch: () => {},
  state: initialState
})

AuthProvider.propTypes = {
  children: PropTypes.node
}

function AuthProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState)
  const client = useQueryClient()

  const {
    data: userModules,
    error,
    remove,
    isLoading
  } = UseFindModulesByUser({
    staleTime: 60 * 15000, // 15 minutos
    // cacheTime: 60 * 15000,
    refetchInterval: 60 * 15000, // 15 minutos,
    enabled: !!state.isAuthenticated
  })

  axios.interceptors.response.use(
    response => response,
    error => {
      if (error?.response?.status === 401) {
        logout(true)
      }
      return Promise.reject(error)
    }
  )

  useEffect(() => {
    if (error && state.isAuthenticated) {
      logout(true)
    }
  }, [error, state.isAuthenticated])

  useEffect(() => {
    if (userModules && state.isAuthenticated) {
      dispatch({
        type: 'INITIALIZE',
        payload: {
          isAuthenticated: true,
          user: {
            ...state.user,
            ...userModules
          }
        }
      })
    }
    dispatch({
      type: 'LOADING',
      payload: false
    })
  }, [userModules])

  useEffect(() => {
    dispatch({
      type: 'LOADING',
      payload: false
    })
    const initialize = async () => {
      try {
        const accessToken = localStorage.getItem('accessToken')
        if (accessToken && isValidToken(accessToken)) {
          setSession(accessToken)
          const decoded = jwtDecode(accessToken)
          dispatch({
            type: 'INITIALIZE',
            payload: {
              isAuthenticated: true,
              user: {
                ...state.user,
                name: decoded?.name,
                profile: decoded?.profile,
                email: decoded?.email,
                urlInit: decoded?.urlInit ?? '',
                ...userModules
              }
            }
          })
          if (isLoading) {
            dispatch({
              type: 'LOADING',
              payload: true
            })
          }
        } else {
          dispatch({
            type: 'INITIALIZE',
            payload: {
              isAuthenticated: false,
              user: null
            }
          })
          dispatch({
            type: 'LOADING',
            payload: false
          })
        }
      } catch (err) {
        console.error(err)
        dispatch({
          type: 'LOADING',
          payload: false
        })
        dispatch({
          type: 'INITIALIZE',
          payload: {
            isAuthenticated: false,
            user: null
          }
        })
      }
    }

    initialize()
  }, [isLoading])

  const logout = async (auto = false) => {
    setSession(null)
    dispatch({ type: 'LOGOUT' })
    client.removeQueries()
    remove()
    if (!auto) {
      resetAllStores()
    }
  }

  const login = async () => {
    const accessToken = localStorage.getItem('accessToken')

    const decoded = jwtDecode(accessToken)

    dispatch({
      type: 'LOGIN',
      payload: {
        user: {
          ...state.user,
          name: decoded?.name,
          profile: decoded?.profile,
          email: decoded?.email,
          urlInit: decoded?.urlInit ?? ''
        }
      }
    })
  }

  return (
    <AuthContext.Provider
      value={{
        ...state,
        method: 'jwt',
        logout,
        login,
        dispatch
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export { AuthContext, AuthProvider }
