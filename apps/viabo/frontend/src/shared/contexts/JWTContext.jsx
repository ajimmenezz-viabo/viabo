import { createContext, useEffect, useReducer } from 'react'
import PropTypes from 'prop-types'
import { isValidToken, setSession } from '@/shared/utils'

const initialState = {
  isAuthenticated: false,
  isInitialized: false,
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
  LOGIN: (state, action) => {
    const { user } = action.payload

    return {
      ...state,
      isAuthenticated: true,
      user
    }
  },
  LOGOUT: state => ({
    ...state,
    isAuthenticated: false,
    user: null
  })
}

const reducer = (state, action) => (handlers[action.type] ? handlers[action.type](state, action) : state)

const AuthContext = createContext({
  ...initialState,
  method: 'jwt',
  logout: () => Promise.resolve(),
  dispatch: () => {},
  state: initialState
})

AuthProvider.propTypes = {
  children: PropTypes.node
}

function AuthProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState)

  useEffect(() => {
    const initialize = async () => {
      try {
        const accessToken = window.localStorage.getItem('accessToken')

        if (accessToken && isValidToken(accessToken)) {
          setSession(accessToken)

          // const response = await axios.get('/api/account/my-account')
          // const { user } = response.data
          //
          // dispatch({
          //   type: 'INITIALIZE',
          //   payload: {
          //     isAuthenticated: true,
          //     user
          //   }
          // })
        } else {
          dispatch({
            type: 'INITIALIZE',
            payload: {
              isAuthenticated: false,
              user: null
            }
          })
        }
      } catch (err) {
        console.error(err)
        setSession(null)
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
  }, [])

  const logout = async () => {
    setSession(null)
    dispatch({ type: 'LOGOUT' })
  }

  return (
    <AuthContext.Provider
      value={{
        ...state,
        method: 'jwt',
        logout,
        dispatch,
        state
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export { AuthContext, AuthProvider }
