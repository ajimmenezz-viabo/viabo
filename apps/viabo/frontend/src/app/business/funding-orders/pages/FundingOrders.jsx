import { FundingOrdersTable } from '../components'
import ConciliateModal from '../components/ConciliateModal'

import { PATH_DASHBOARD } from '@/routes'
import { Page } from '@/shared/components/containers'
import { ContainerPage } from '@/shared/components/containers/ContainerPage'
import { HeaderPage } from '@/shared/components/layout'

const FundingOrders = () => {
  const orders = []

  return (
    <Page title="Ordenes de Fondeo">
      <ContainerPage>
        <HeaderPage
          name={'Ordenes de Fondeo'}
          links={[{ name: 'Inicio', href: PATH_DASHBOARD.root }, { name: 'Ordenes de Fondeo' }]}
        />
        <FundingOrdersTable />
        <ConciliateModal />
      </ContainerPage>
    </Page>
  )
}

export default FundingOrders
