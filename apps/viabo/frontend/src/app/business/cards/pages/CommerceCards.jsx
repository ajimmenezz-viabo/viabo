import { ContainerPage } from '@/shared/components/containers/ContainerPage'
import { Page } from '@/shared/components/containers'
import { BUSINESS_PATHS, BUSINESS_ROUTES_NAMES } from '@/app/business/shared/routes'
import { CommerceCardsLayout } from '@/app/business/cards/components'
import { PATH_DASHBOARD } from '@/routes'
import { Box, Stack, Typography } from '@mui/material'
import { Scrollbar } from '@/shared/components/scroll'
import { useCommerceDetailsCard } from '@/app/business/cards/store'
import { CardToolbar } from '@/app/business/cards/components/cardToolbar'
import { SimpleBreadcrumbs } from '@/shared/components/breadcrumbs'
import { MainCardBalance } from '@/app/business/cards/components/MainCardBalance'
import { ACTIONS_PERMISSIONS } from '@/app/business/cards/adapters'
import { useUser } from '@/shared/hooks'

export default function CommerceCards() {
  const selectedCards = useCommerceDetailsCard(state => state?.selectedCards)
  const user = useUser()
  const userActions = user?.modules?.userActions ?? []

  return (
    <Page title="Tarjetas del Comercio">
      <ContainerPage>
        <Box display="flex" spacing={3} flexDirection={{ xs: 'column', sm: 'row' }} alignItems={{ sm: 'center' }}>
          <Box sx={{ flexGrow: 1, mb: { xs: 3, sm: 0 } }}>
            <Typography variant="h4" gutterBottom>
              Tarjetas del Comercio
            </Typography>
            <SimpleBreadcrumbs
              links={[
                { name: 'Inicio', href: PATH_DASHBOARD.root },
                { name: 'Administracion', href: BUSINESS_PATHS.cards },
                { name: BUSINESS_ROUTES_NAMES.cards.name }
              ]}
            />
          </Box>
          <Box sx={{ flex: '1 1 auto' }} />
          {userActions.includes(ACTIONS_PERMISSIONS.COMMERCE_CARDS) && <MainCardBalance />}
        </Box>
        <Stack flexDirection={'row'} sx={{ height: '100vh', display: 'flex' }}>
          <Stack
            sx={theme => ({
              overflow: 'hidden',
              flexDirection: 'column',
              flexGrow: 1
            })}
          >
            {selectedCards?.length > 0 && <CardToolbar />}
            <Scrollbar>
              <CommerceCardsLayout />
            </Scrollbar>
          </Stack>
        </Stack>
      </ContainerPage>
    </Page>
  )
}
