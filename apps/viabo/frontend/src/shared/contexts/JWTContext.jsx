import { createContext, useEffect, useReducer } from 'react'
import PropTypes from 'prop-types'
import { isValidToken, setSession } from '@/shared/utils'
import jwtDecode from 'jwt-decode'
import { UseFindModulesByUser } from '@/app/authentication/hooks'
import { axios } from '@/shared/interceptors'

const initialState = {
  isAuthenticated: false,
  isInitialized: false,
  isFetchingModules: false,
  user: null
}

const handlers = {
  INITIALIZE: (state, action) => {
    const { isAuthenticated, user, isFetchingModules } = action.payload
    return {
      ...state,
      isAuthenticated,
      isFetchingModules,
      isInitialized: true,
      user
    }
  },
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

  const {
    data: userModules,
    error,
    remove
  } = UseFindModulesByUser({
    staleTime: 60 * 15000, // 15 minutos
    // cacheTime: 60 * 15000,
    refetchInterval: 60 * 15000, // 15 minutos,
    enabled: !!state.isAuthenticated
  })

  axios.interceptors.response.use(
    response => response,
    error => {
      if (error.status === 403) {
        logout()
      }
      return Promise.reject(error)
    }
  )

  useEffect(() => {
    if (error && state.isAuthenticated) {
      logout()
    }
  }, [error, state.isAuthenticated])

  useEffect(() => {
    if (userModules && state.isAuthenticated) {
      dispatch({
        type: 'INITIALIZE',
        payload: {
          isAuthenticated: true,
          isFetchingModules: false,
          user: {
            ...state.user,
            modules: userModules
          }
        }
      })
    }
  }, [userModules])

  useEffect(() => {
    const initialize = async () => {
      try {
        const accessToken = window.localStorage.getItem('accessToken')
        if (accessToken && isValidToken(accessToken)) {
          setSession(accessToken)
          const decoded = jwtDecode(accessToken)

          dispatch({
            type: 'INITIALIZE',
            payload: {
              isAuthenticated: true,
              isFetchingModules: true,
              user: {
                name: decoded?.name,
                profile: decoded?.profile,
                email: decoded?.email,
                urlInit: decoded?.urlInit ?? ''
              }
            }
          })
        } else {
          dispatch({
            type: 'INITIALIZE',
            payload: {
              isAuthenticated: false,
              isFetchingModules: false,
              user: null
            }
          })
        }
      } catch (err) {
        console.error(err)
        dispatch({
          type: 'INITIALIZE',
          payload: {
            isAuthenticated: false,
            isFetchingModules: false,
            user: null
          }
        })
      }
    }

    initialize()
  }, [])

  const logout = async () => {
    setSession(null)
    dispatch({ type: 'LOGOUT' })
    remove()
  }

  const login = async () => {
    const accessToken = window.localStorage.getItem('accessToken')

    const decoded = jwtDecode(accessToken)

    dispatch({
      type: 'LOGIN',
      payload: {
        user: {
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
