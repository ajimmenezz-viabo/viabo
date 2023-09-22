import { Box } from '@mui/material'

import { TerminalDetails, TerminalsDrawer } from '../components'

import { VIABO_PAY_PATHS, VIABO_PAY_ROUTES_NAMES } from '@/app/business/viabo-pay/routes'
import { PATH_DASHBOARD } from '@/routes'
import { Page } from '@/shared/components/containers'
import { ContainerPage } from '@/shared/components/containers/ContainerPage'
import { HeaderPage } from '@/shared/components/layout'

const POSTerminals = () => (
  <Page title="Lista de Terminales Punto de Venta">
    <ContainerPage>
      <Box display={'flex'} overflow={'hidden'} sx={{ height: '100vH', maxHeight: '100%', flexDirection: 'column' }}>
        <Box px={1}>
          <HeaderPage
            name={'Terminales Punto de Venta'}
            links={[
              { name: 'Inicio', href: PATH_DASHBOARD.root },
              { name: 'Administración', href: VIABO_PAY_PATHS.terminals },
              { name: VIABO_PAY_ROUTES_NAMES.terminals.name }
            ]}
          />
        </Box>

        <Box display={'flex'} overflow={'hidden'} flex={1}>
          <TerminalsDrawer />
          <TerminalDetails />
        </Box>
      </Box>
    </ContainerPage>
  </Page>
)

export default POSTerminals