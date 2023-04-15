import PropTypes from 'prop-types'
import { Navigate, useLocation } from 'react-router-dom'
import { useAuth } from '@/shared/hooks'
import { PATH_AUTH } from '@/routes'
import { LoadingLogo } from '@/shared/components/loadings/LoadingLogo'

AuthGuard.propTypes = {
  children: PropTypes.node
}

export function AuthGuard({ children }) {
  const { isAuthenticated, isInitialized, isFetchingModules } = useAuth()

  const { pathname } = useLocation()
  if (!isInitialized || isFetchingModules) {
    return <LoadingLogo />
  }

  if (!isAuthenticated) {
    return <Navigate to={PATH_AUTH.login} />
  }

  return <>{children}</>
}
