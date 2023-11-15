import { lazy, useEffect } from 'react'

import { useSettings } from '@theme/hooks'
import { Navigate, useLocation, useRoutes } from 'react-router-dom'

import { ViaboCardRouter } from '@/app/business/viabo-card/routes'
import { ViaboPayRouter } from '@/app/business/viabo-pay/routes'
import { ManagementRouter } from '@/app/management/shared/routes'
import { GeneralRouter } from '@/routes/GeneralRouter'
import { LoadableRoute } from '@/routes/LoadableRoute'
import { PublicRouter, WHITE_THEME_LIST } from '@/routes/PublicRouter'
import { AuthGuard, GuestGuard } from '@/shared/guards'
import { useAuth, useUser } from '@/shared/hooks'
import { DashboardLayout } from '@/shared/layout/dashboard'

const Login = LoadableRoute(lazy(() => import('@/app/authentication/pages/Login')))

const NotFound = LoadableRoute(lazy(() => import('@/shared/pages/Page404')))

const isWhiteThemePath = path => {
  // Use the map method to transform the WHITE_THEME_LIST into an array of boolean values
  const matches = WHITE_THEME_LIST.map(whitePath => {
    if (whitePath.includes('*')) {
      const regex = new RegExp(`^${whitePath.replace('*', '.+')}$`)
      return regex.test(path)
    } else {
      return path === whitePath
    }
  })

  // If any element in the 'matches' array is true, it means there was a match
  return matches.some(match => match)
}

export const AppRouter = () => {
  const user = useUser()
  const { pathname } = useLocation()
  const { themeMode, onChangeMode } = useSettings()
  const { logout: logoutContext } = useAuth()

  useEffect(() => {
    if (isWhiteThemePath(pathname)) {
      if (themeMode !== 'light') {
        onChangeMode({
          target: {
            value: 'light'
          }
        })
      }
      logoutContext()
    }
  }, [pathname, themeMode])

  return useRoutes([
    ...PublicRouter,
    {
      path: '/auth',
      children: [
        {
          path: 'login',
          element: (
            <GuestGuard>
              <Login />
            </GuestGuard>
          )
        }
      ]
    },
    {
      path: '/',
      element: (
        <AuthGuard>
          <DashboardLayout />
        </AuthGuard>
      ),
      children: [
        { element: <Navigate to={user?.urlInit} replace />, index: true },
        ManagementRouter,
        ViaboCardRouter,
        ViaboPayRouter,
        ...GeneralRouter,
        { path: '*', element: <Navigate to="/404" /> }
      ]
    },

    {
      path: '*',
      children: [
        { path: '404', element: <NotFound /> },
        { path: '403', element: <NotFound /> }
      ]
    },
    { path: '*', element: <Navigate to="/404" /> }
  ])
}
