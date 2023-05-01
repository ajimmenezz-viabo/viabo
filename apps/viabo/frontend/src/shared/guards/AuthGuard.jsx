import PropTypes from 'prop-types'
import { Navigate, useLocation } from 'react-router-dom'
import { useAuth, useGetQueryData } from '@/shared/hooks'
import { PATH_AUTH } from '@/routes'
import { LoadingLogo } from '@/shared/components/loadings'
import { useEffect, useMemo } from 'react'
import { useSettings } from '@theme/hooks'
import { AUTHENTICATION_KEYS } from '@/app/authentication/adapters'

AuthGuard.propTypes = {
  children: PropTypes.node
}

export function AuthGuard({ children }) {
  const { isAuthenticated, isInitialized, isFetchingModules } = useAuth()
  const { pathname } = useLocation()
  const { themeMode, onChangeMode } = useSettings()

  const modules = useGetQueryData([AUTHENTICATION_KEYS.USER_MODULES])

  const canAccessModule = useMemo(
    () =>
      Boolean(
        modules?.menu
          ?.flatMap(category => category.modules)
          .find(module => module.path.toLowerCase() === pathname?.toLowerCase())
      ),
    [pathname, modules]
  )

  localStorage.setItem('lastPath', pathname)

  useEffect(() => {
    const dashboardMode = localStorage.getItem('dashboardTheme')
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

  if (!isAuthenticated) {
    return <Navigate to={PATH_AUTH.login} />
  }

  if (!canAccessModule && pathname !== '/') {
    return <Navigate to={'/404'} />
  }

  return <>{children}</>
}
