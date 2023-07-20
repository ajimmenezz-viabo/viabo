import { Navigate } from 'react-router-dom'
import { Lodable } from '@/shared/components/lodables'
import { lazy } from 'react'
import { BUSINESS_ROUTES_NAMES } from '@/app/business/shared/routes/businessPaths'

const CommerceCards = Lodable(lazy(() => import('@/app/business/cards/pages/CommerceCards')))
const UnassignedCards = Lodable(lazy(() => import('@/app/business/unassigned-cards/pages/UnassignedCards')))
const GlobalCard = Lodable(lazy(() => import('@/app/business/cards/pages/GlobalCardDetails')))

export const BusinessRouter = {
  path: BUSINESS_ROUTES_NAMES.root.route,
  children: [
    { index: true, path: '/commerce', element: <Navigate to="/404" /> },
    {
      path: BUSINESS_ROUTES_NAMES.cards.route,
      element: <CommerceCards />
    },
    {
      path: BUSINESS_ROUTES_NAMES.unassignedCards.route,
      element: <UnassignedCards />
    },
    {
      path: BUSINESS_ROUTES_NAMES.globalCard.route,
      element: <GlobalCard />
    }
  ]
}
