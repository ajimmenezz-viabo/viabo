import { lazy } from 'react'
import { Navigate } from 'react-router-dom'
import { Lodable } from '@/shared/components/lodables'

const ManagementCommerces = Lodable(lazy(() => import('@/app/management/commerces/pages/ManagementCommerces')))
const StockCards = Lodable(lazy(() => import('@/app/management/stock-cards/pages/StockCards')))
export const ManagementRouter = {
  path: 'management',
  children: [
    { index: true, path: '/management', element: <Navigate to="commerces" /> },
    {
      path: 'commerces',
      element: <ManagementCommerces />
    },
    {
      path: 'stock-cards',
      element: <StockCards />
    }
  ]
}
