import { lazy } from 'react'

import { Navigate, createBrowserRouter } from 'react-router-dom'

import { ViaboCardRouter } from '@/app/business/viabo-card/routes'
import { ViaboPayRouter } from '@/app/business/viabo-pay/routes'
import { CatalogsRouter } from '@/app/catalogs/shared/routes'
import { ManagementRouter } from '@/app/management/shared/routes'
import { GeneralRouter } from '@/routes/GeneralRouter'
import { LoadableRoute } from '@/routes/LoadableRoute'
import { PublicRouter } from '@/routes/PublicRouter'
import { AuthGuard, GuestGuard } from '@/shared/guards'
import { DashboardLayout } from '@/shared/layout/dashboard'

const Login = LoadableRoute(lazy(() => import('@/app/authentication/pages/Login')))

const NotFound = LoadableRoute(lazy(() => import('@/shared/pages/Page404')))

export const AppRouter = user =>
  createBrowserRouter([
    ...PublicRouter,
    {
      path: '/auth',
      children: [
        {
          path: 'login',
          Component: () => (
            <GuestGuard>
              <Login />
            </GuestGuard>
          )
        }
      ]
    },
    {
      path: '/',
      Component: () => (
        <AuthGuard>
          <DashboardLayout />
        </AuthGuard>
      ),
      children: [
        { element: <Navigate to={user?.urlInit} replace />, index: true },
        ManagementRouter,
        ViaboCardRouter,
        ViaboPayRouter,
        CatalogsRouter,
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
