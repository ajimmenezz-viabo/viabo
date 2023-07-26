import { lazy, useEffect } from 'react'

import { useSettings } from '@theme/hooks'
import { Navigate, useLocation, useRoutes } from 'react-router-dom'

import { BusinessRouter } from '@/app/business/shared/routes'
import { ManagementRouter } from '@/app/management/shared/routes'
import { LoadableRoute } from '@/routes/LoadableRoute'
import { AuthGuard, GuestGuard } from '@/shared/guards'
import { useAuth, useUser } from '@/shared/hooks'
import { DashboardLayout } from '@/shared/layout/dashboard'

const CommerceRegister = LoadableRoute(lazy(() => import('@/app/business/commerce/pages/CommerceRegister')))
const RegisterCards = LoadableRoute(lazy(() => import('@/app/business/register-cards/pages/RegisterCards')))
const Login = LoadableRoute(lazy(() => import('@/app/authentication/pages/Login')))
const NotFound = LoadableRoute(lazy(() => import('@/shared/pages/Page404')))

const WHITE_THEME_LIST = ['/comercio/registro', '/registro']
export const AppRouter = () => {
  const user = useUser()
  const { pathname } = useLocation()
  const { themeMode, onChangeMode } = useSettings()
  const { logout: logoutContext } = useAuth()

  useEffect(() => {
    if (WHITE_THEME_LIST.includes(pathname)) {
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
        BusinessRouter,
        { path: '*', element: <Navigate to="/404" /> }
      ]
    },
    {
      path: '/comercio/registro',
      element: <CommerceRegister />
    },
    {
      path: '/registro',
      element: <RegisterCards />
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
