import { Navigate, useRoutes } from 'react-router-dom'
import { LoadableRoute } from '@/routes/LoadableRoute'
import { lazy } from 'react'
import { DashboardLayout } from '@/shared/layout/dashboard'
import { AuthGuard, GuestGuard } from '@/shared/guards'
import { useUser } from '@/shared/hooks'
import { ManagementRouter } from '@/app/management/shared/routes'

const CommerceRegister = LoadableRoute(lazy(() => import('@/app/business/commerce/pages/CommerceRegister')))
const Login = LoadableRoute(lazy(() => import('@/app/authentication/pages/Login')))
const NotFound = LoadableRoute(lazy(() => import('@/shared/pages/Page404')))
export const AppRouter = () => {
  const user = useUser()

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
        { path: '*', element: <Navigate to="/404" /> }
      ]
    },
    {
      path: '/comercio/registro',
      element: <CommerceRegister />
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
