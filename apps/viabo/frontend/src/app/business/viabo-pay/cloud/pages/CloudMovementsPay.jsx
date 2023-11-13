import { VIABO_PAY_PATHS, VIABO_PAY_ROUTES_NAMES } from '../../routes'
import { LiquidatedMovementsTable } from '../components/movements'

import { PATH_DASHBOARD } from '@/routes'
import { Page } from '@/shared/components/containers'
import { ContainerPage } from '@/shared/components/containers/ContainerPage'
import { HeaderPage } from '@/shared/components/layout'

const CloudMovementsPay = () => {
  const handleDemo = () => {}

  return (
    <Page title="Movimientos a Liquidar Viabo Pay">
      <ContainerPage>
        <HeaderPage
          name={'Nube'}
          links={[
            { name: 'Inicio', href: PATH_DASHBOARD.root },
            { name: 'Viabo Pay', href: VIABO_PAY_PATHS.cloud },
            { name: VIABO_PAY_ROUTES_NAMES.cloud.name }
          ]}
        />
        <LiquidatedMovementsTable />
      </ContainerPage>
    </Page>
  )
}

export default CloudMovementsPay
