import PropTypes from 'prop-types'
import { Navigate } from 'react-router-dom'
import { useAuth } from '@/shared/hooks'

GuestGuard.propTypes = {
  children: PropTypes.node
}

export function GuestGuard({ children }) {
  const { isAuthenticated, user } = useAuth()

  if (isAuthenticated) {
    const url = window.localStorage.getItem('lastPath') ?? user?.urlInit
    return <Navigate to={url} replace />
  }

  return <>{children}</>
}
