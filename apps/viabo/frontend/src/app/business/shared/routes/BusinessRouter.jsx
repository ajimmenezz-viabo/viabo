import { lazy } from 'react'

import { Navigate } from 'react-router-dom'

import { BUSINESS_ROUTES_NAMES } from '@/app/business/shared/routes/businessPaths'
import { Lodable } from '@/shared/components/lodables'

const CommerceCards = Lodable(lazy(() => import('@/app/business/cards/pages/CommerceCards')))
const AllCommerceCards = Lodable(lazy(() => import('@/app/business/all-commerce-cards/pages/AllCommerceCards')))
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
      element: <AllCommerceCards />
    },
    {
      path: BUSINESS_ROUTES_NAMES.globalCard.route,
      element: <GlobalCard />
    }
  ]
}
