import { lazy } from 'react'

import { Navigate } from 'react-router-dom'

import { VIABO_PAY_ROUTES_NAMES } from '@/app/business/viabo-pay/routes/viabo-pay-paths'
import { Lodable } from '@/shared/components/lodables'

const POSTerminals = Lodable(lazy(() => import('@/app/business/viabo-pay/terminals/pages/POSTerminals')))

export const ViaboPayRouter = {
  path: VIABO_PAY_ROUTES_NAMES.root.route,
  children: [
    { index: true, path: `/${VIABO_PAY_ROUTES_NAMES.root.route}`, element: <Navigate to="/404" /> },
    {
      path: VIABO_PAY_ROUTES_NAMES.terminals.route,
      element: <POSTerminals />
    }
  ]
}
