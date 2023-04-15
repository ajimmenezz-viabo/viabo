import { Navigate, useRoutes } from 'react-router-dom'
import { LoadableRoute } from '@/routes/LoadableRoute'
import { lazy } from 'react'
import { Typography } from '@mui/material'
import { DashboardLayout } from '@/shared/layout/dashboard'
import { AuthGuard, GuestGuard } from '@/shared/guards'
import { useUser } from '@/shared/hooks'

const CommerceRegister = LoadableRoute(lazy(() => import('@/app/business/commerce/pages/CommerceRegister')))
const Login = LoadableRoute(lazy(() => import('@/app/authentication/pages/Login')))
export const AppRouter = () => {
  const user = useUser()

  return useRoutes([
    {
      path: '/',
      element: (
        <AuthGuard>
          <DashboardLayout />
        </AuthGuard>
      ),
      children: [
        { element: <Navigate to={user?.urlInit} replace />, index: true },
        {
          path: 'management',
          children: [
            {
              path: 'commerces',
              element: <Typography>Gestion de comercios</Typography>
            }
          ]
        },
        { path: '*', element: <Navigate to="/404" /> }
      ]
    },
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
      path: '/comercio/registro',
      element: <CommerceRegister />
    },
    {
      path: '*',
      children: [
        { path: '404', element: <Typography variant={'h1'}>Pagina No encontrada</Typography> },
        { path: '403', element: <Typography variant={'h1'}>Sin Acceso al sistema</Typography> }
      ]
    },
    { path: '*', element: <Navigate to="/404" /> }
  ])
}
