import { Page } from '@/shared/components/containers'
import { useCommerceDetailsCard } from '@/app/business/cards/store'
import { Box, Stack } from '@mui/material'
import { HeaderPage } from '@/shared/components/layout'
import { PATH_DASHBOARD } from '@/routes'
import { BUSINESS_PATHS, BUSINESS_ROUTES_NAMES } from '@/app/business/shared/routes'
import { CardsSidebar } from '@/app/business/cards/components/cardsSidebar'
import { CommerceViaboCardDetails } from '@/app/business/cards/components/CommerceViaboCardDetails'
import { CardToolbar } from '@/app/business/cards/components/cardToolbar'
import { ContainerPage } from '@/shared/components/containers/ContainerPage'
import { OrderFunding } from '@/app/business/cards/components/OrderFunding'

export default function CommerceCards() {
  const selectedCards = useCommerceDetailsCard(state => state?.selectedCards)

  return (
    <Page title="Tarjetas del Comercio">
      <Box display={'flex'} overflow={'hidden'} sx={{ height: '100vH', maxHeight: '100%', flexDirection: 'column' }}>
        <ContainerPage>
          <HeaderPage
            name={'Tarjetas del Comercio'}
            links={[
              { name: 'Inicio', href: PATH_DASHBOARD.root },
              { name: 'Administracion', href: BUSINESS_PATHS.cards },
              { name: BUSINESS_ROUTES_NAMES.cards.name }
            ]}
          />
        </ContainerPage>

        <Stack flexDirection={'row'} sx={{ display: 'flex' }}>
          <Stack
            sx={theme => ({
              overflow: 'hidden',
              flexDirection: 'column',
              flexGrow: 1,
              pb: 2
            })}
          >
            {selectedCards?.length > 0 && <CardToolbar />}
          </Stack>
        </Stack>

        <Box display={'flex'} overflow={'hidden'} sx={{ flex: '1 1 0%' }}>
          <Box display={'block'} width={1} position={'absolute'}></Box>
          <CardsSidebar />

          <CommerceViaboCardDetails />
        </Box>
      </Box>

      <OrderFunding />
    </Page>
  )
}
