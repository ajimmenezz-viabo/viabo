import AdminDashboardViaboSpei from './admin-stp/pages/AdminDashboardViaboSpei'
import DashboardCommerceViaboSpei from './commerce/pages/DashboardCommerceViaboSpei'

import { VIABO_SPEI_PERMISSIONS } from '../shared/permissions'
import { useSharedViaboSpeiStore } from '../shared/store'

import { Page } from '@/shared/components/containers'
import { ContainerPage } from '@/shared/components/containers/ContainerPage'
import { HeaderPage } from '@/shared/components/layout'
import { useUser } from '@/shared/hooks'

export const DashboardViaboSpeiByProfile = () => {
  const user = useUser()
  const isAdminViaboSpei = user?.permissions.includes(VIABO_SPEI_PERMISSIONS.DASHBOARD_ADMIN)
  const isCommerceViaboSpei = user?.permissions.includes(VIABO_SPEI_PERMISSIONS.DASHBOARD)
  const title = useSharedViaboSpeiStore(state => state.dashboardTitle)

  return (
    <Page title={title}>
      <ContainerPage sx={{ pb: 3 }}>
        <HeaderPage name={title} links={[]} />
        {isCommerceViaboSpei && <DashboardCommerceViaboSpei />}
        {isAdminViaboSpei && <AdminDashboardViaboSpei />}
      </ContainerPage>
    </Page>
  )
}
