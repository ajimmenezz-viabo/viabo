import { Navigate } from 'react-router-dom'
import { Lodable } from '@/shared/components/lodables'
import { lazy } from 'react'

const CommerceCards = Lodable(lazy(() => import('@/app/business/cards/pages/CommerceCards')))

export const BusinessRouter = {
  path: 'commerce',
  children: [
    { index: true, path: '/commerce', element: <Navigate to="cards" /> },
    {
      path: 'cards',
      element: <CommerceCards />
    }
  ]
}
