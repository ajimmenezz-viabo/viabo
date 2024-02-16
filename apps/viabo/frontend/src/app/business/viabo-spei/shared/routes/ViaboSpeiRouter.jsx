import { Navigate } from 'react-router-dom'

import { VIABO_SPEI_PATHS, VIABO_SPEI_ROUTES } from './viabo-spei-paths'

const ViaboSpeiRouter = {
  path: VIABO_SPEI_PATHS.root,
  children: [
    { index: true, path: VIABO_SPEI_PATHS.root, element: <Navigate to="/404" /> },
    {
      path: VIABO_SPEI_ROUTES.dashboard.route,
      async lazy() {
        const { DashboardViaboSpeiByProfile } = await import('../../dashboard/DashboardViaboSpeiByProfile')
        return { Component: DashboardViaboSpeiByProfile }
      }
    },
    {
      path: VIABO_SPEI_ROUTES.third_accounts.route,
      async lazy() {
        const { SpeiThirdAccounts } = await import('../../third-accounts/pages/SpeiThirdAccounts')
        return { Component: SpeiThirdAccounts }
      }
    },
    {
      path: VIABO_SPEI_ROUTES.companies.route,
      async lazy() {
        const { ViaboSpeiCompanies } = await import('../../companies/pages/ViaboSpeiCompanies')
        return { Component: ViaboSpeiCompanies }
      }
    },
    {
      path: VIABO_SPEI_ROUTES.costCenters.route,
      async lazy() {
        const { ViaboSpeiCostCenters } = await import('../../cost-centers/pages/ViaboSpeiCostCenters')
        return { Component: ViaboSpeiCostCenters }
      }
    }
  ]
}

export default ViaboSpeiRouter
