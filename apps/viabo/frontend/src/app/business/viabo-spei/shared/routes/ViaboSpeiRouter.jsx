import { lazy } from 'react'

import { Navigate } from 'react-router-dom'

import { viaboSpeiPaths } from './viabo-spei-paths'

import { Lodable } from '@/shared/components/lodables'

const DashboardViaboSpeiByProfile = Lodable(lazy(() => import('../../dashboard/DashboardViaboSpeiByProfile')))

const ViaboSpeiRouter = {
  path: viaboSpeiPaths.paths.root,
  children: [
    { index: true, path: viaboSpeiPaths.paths.root, element: <Navigate to="/404" /> },
    {
      path: viaboSpeiPaths.routes.dashboard.route,
      Component: DashboardViaboSpeiByProfile
    }
  ]
}

export default ViaboSpeiRouter
