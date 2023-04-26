import PropTypes from 'prop-types'
import { Navigate } from 'react-router-dom'
import { useAuth } from '@/shared/hooks'
import { useEffect } from 'react'
import { useSettings } from '@theme/hooks'

GuestGuard.propTypes = {
  children: PropTypes.node
}

export function GuestGuard({ children }) {
  const { isAuthenticated, user } = useAuth()
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

  if (isAuthenticated) {
    const url = window.localStorage.getItem('lastPath') ?? user?.urlInit
    return <Navigate to={url} replace />
  }

  return <>{children}</>
}
