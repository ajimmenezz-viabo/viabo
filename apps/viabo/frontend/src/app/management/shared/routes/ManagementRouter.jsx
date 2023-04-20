import { lazy, Suspense } from 'react'
import { Navigate } from 'react-router-dom'
import { RequestLoading } from '@/shared/components/loadings'

const Loadable = Component => props =>
  (
    // eslint-disable-next-line react-hooks/rules-of-hooks

    <Suspense fallback={<RequestLoading open />}>
      <Component {...props} />
    </Suspense>
  )

const ManagementCommerces = Loadable(lazy(() => import('@/app/management/commerces/pages/ManagementCommerces')))

export const ManagementRouter = {
  path: 'management',
  children: [
    { index: true, path: '/management', element: <Navigate to="commerces" /> },
    {
      path: 'commerces',
      element: <ManagementCommerces />
    }
  ]
}
