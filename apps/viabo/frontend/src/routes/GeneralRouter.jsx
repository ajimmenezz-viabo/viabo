import { lazy } from 'react'

import { PATH_DASHBOARD } from '@/routes/paths'
import { Lodable } from '@/shared/components/lodables'

const GlobalCardDetails = Lodable(lazy(() => import('@/app/business/dashboard-master/pages/DashboardMaster')))
const FundingOrders = Lodable(lazy(() => import('@/app/business/funding-orders/pages/FundingOrders')))

export const GeneralRouter = [
  {
    path: PATH_DASHBOARD['dashboard-master'],
    element: <GlobalCardDetails />
  },
  {
    path: PATH_DASHBOARD['funding-orders'],
    element: <FundingOrders />
  }
]
