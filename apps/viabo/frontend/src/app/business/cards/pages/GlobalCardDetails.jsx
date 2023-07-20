import { useEffect } from 'react'
import { Link as RouterLink, useNavigate } from 'react-router-dom'
import { Page } from '@/shared/components/containers'
import { ContainerPage } from '@/shared/components/containers/ContainerPage'
import { HeaderPage } from '@/shared/components/layout'
import { PATH_DASHBOARD } from '@/routes'
import { BUSINESS_PATHS, BUSINESS_ROUTES_NAMES } from '@/app/business/shared/routes'
import { Box, Button, Grid, Stack } from '@mui/material'
import { CardMovements } from '@/app/business/cards/components/details'
import { useCollapseDrawer } from '@theme/hooks'
import { useCommerceDetailsCard } from '@/app/business/cards/store'
import { ReplyAll } from '@mui/icons-material'
import { GlobalCard } from '@/app/business/cards/components/global-card'
import { FundingOrder } from '@/app/business/cards/components/toolbar-actions'

export default function GlobalCardDetails() {
  const { isCollapse } = useCollapseDrawer()
  const navigate = useNavigate()

  const cardTypeSelected = useCommerceDetailsCard(state => state.cardTypeSelected)

  useEffect(() => {
    if (!cardTypeSelected) {
      navigate(BUSINESS_PATHS.cards)
    }
  }, [cardTypeSelected])

  return (
    <Page title="Tarjeta Global">
      <ContainerPage>
        <HeaderPage
          name={'Global Comercio'}
          links={[
            { name: 'Inicio', href: PATH_DASHBOARD.root },
            { name: 'Administracion', href: BUSINESS_PATHS.cards },
            { name: BUSINESS_ROUTES_NAMES.globalCard.name }
          ]}
        />
        <Stack spacing={2}>
          <Box>
            <Button variant={'outlined'} startIcon={<ReplyAll />} component={RouterLink} to={BUSINESS_PATHS.cards}>
              Lista de Tarjetas
            </Button>
          </Box>

          <Grid container>
            <Grid item xs={12} md={isCollapse ? 3 : 4} xl={3}>
              <Box mr={{ xs: 0, md: 3 }} mb={{ xs: 3, md: 0 }}>
                <GlobalCard openSidebar={true} />
              </Box>
            </Grid>
            <Grid item xs={12} md={isCollapse ? 9 : 8} xl={9}>
              <CardMovements />
            </Grid>
          </Grid>
        </Stack>
        <FundingOrder />
      </ContainerPage>
    </Page>
  )
}
