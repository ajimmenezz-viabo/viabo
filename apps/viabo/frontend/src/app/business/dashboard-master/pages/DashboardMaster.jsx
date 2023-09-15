import { Box, Grid } from '@mui/material'
import { useCollapseDrawer } from '@theme/hooks'

import { MasterGlobalCards } from '@/app/business/dashboard-master/components'
import { MasterMovements } from '@/app/business/dashboard-master/components/MasterMovements'
import { useFindGlobalCards } from '@/app/business/dashboard-master/hooks'
import { FundingOrder } from '@/app/business/viabo-card/cards/components/toolbar-actions'
import { PATH_DASHBOARD } from '@/routes'
import { Page } from '@/shared/components/containers'
import { ContainerPage } from '@/shared/components/containers/ContainerPage'
import { HeaderPage } from '@/shared/components/layout'

export default function DashboardMaster() {
  const { isCollapse } = useCollapseDrawer()

  const { data, isLoading } = useFindGlobalCards()

  return (
    <Page title="Dashboard Master">
      <ContainerPage>
        <HeaderPage
          name={'Dashboard Master'}
          links={[{ name: 'Inicio', href: PATH_DASHBOARD.root }, { name: 'Dashboard Master' }]}
        />
        <Box pb={4}>
          <Grid container flex={1} spacing={2}>
            <Grid
              item
              xs={12}
              md={data?.globals?.length > 1 ? (isCollapse ? 4 : 5) : isCollapse ? 3 : 4}
              xl={isCollapse ? 3 : 4}
            >
              <MasterGlobalCards data={data} isLoading={isLoading} />
            </Grid>
            <Grid
              item
              xs={12}
              md={data?.globals?.length > 1 ? (isCollapse ? 8 : 7) : isCollapse ? 9 : 8}
              xl={isCollapse ? 9 : 8}
            >
              <MasterMovements />
            </Grid>
          </Grid>
        </Box>

        <FundingOrder />
      </ContainerPage>
    </Page>
  )
}
