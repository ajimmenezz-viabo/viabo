import PropTypes from 'prop-types'
import { Navigate } from 'react-router-dom'
import { useAuth } from '@/shared/hooks'

GuestGuard.propTypes = {
  children: PropTypes.node
}

export function GuestGuard({ children }) {
  const { isAuthenticated, user } = useAuth()

  if (isAuthenticated) {
    return <Navigate to={user?.urlInit} replace />
  }

  return <>{children}</>
}
