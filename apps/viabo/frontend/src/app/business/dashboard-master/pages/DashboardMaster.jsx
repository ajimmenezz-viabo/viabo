import { Box, Stack } from '@mui/material'

import { MasterGlobalCards } from '@/app/business/dashboard-master/components'
import { MasterMovements } from '@/app/business/dashboard-master/components/movements/MasterMovements'
import { useFindGlobalCards } from '@/app/business/dashboard-master/hooks'
import { FundingOrder } from '@/app/business/viabo-card/cards/components/toolbar-actions'
import { PATH_DASHBOARD } from '@/routes'
import { Page } from '@/shared/components/containers'
import { ContainerPage } from '@/shared/components/containers/ContainerPage'
import { HeaderPage } from '@/shared/components/layout'

export default function DashboardMaster() {
  const { data, isLoading } = useFindGlobalCards()

  return (
    <Page title="Dashboard Master">
      <ContainerPage>
        <HeaderPage
          name={'Dashboard Master'}
          links={[{ name: 'Inicio', href: PATH_DASHBOARD.root }, { name: 'Dashboard Master' }]}
        />
        <Box pb={4}>
          <Stack flexDirection={{ md: 'row' }} gap={3}>
            <Stack minWidth={300}>
              <MasterGlobalCards data={data} isLoading={isLoading} />
            </Stack>
            <Stack flex={1}>
              <MasterMovements />
            </Stack>
          </Stack>
        </Box>

        <FundingOrder />
      </ContainerPage>
    </Page>
  )
}
