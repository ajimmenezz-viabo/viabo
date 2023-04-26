import PropTypes from 'prop-types'
import { Navigate, useLocation } from 'react-router-dom'
import { useAuth } from '@/shared/hooks'
import { PATH_AUTH } from '@/routes'
import { LoadingLogo } from '@/shared/components/loadings'
import { useEffect } from 'react'
import { useSettings } from '@theme/hooks'

AuthGuard.propTypes = {
  children: PropTypes.node
}

export function AuthGuard({ children }) {
  const { isAuthenticated, isInitialized, isFetchingModules } = useAuth()
  const { pathname } = useLocation()
  const { themeMode, onChangeMode } = useSettings()

  useEffect(() => {
    const dashboardMode = window.localStorage.getItem('dashboardTheme')
    if (dashboardMode && themeMode !== dashboardMode) {
      onChangeMode({
        target: {
          value: dashboardMode
        }
      })
    }

    if (!dashboardMode) {
      onChangeMode({
        target: {
          value: 'dark'
        }
      })
    }
  }, [])

  if (!isInitialized || isFetchingModules) {
    return <LoadingLogo />
  }

  if (isAuthenticated) {
    window.localStorage.setItem('lastPath', pathname)
  }

  if (!isAuthenticated) {
    return <Navigate to={PATH_AUTH.login} />
  }

  return <>{children}</>
}
