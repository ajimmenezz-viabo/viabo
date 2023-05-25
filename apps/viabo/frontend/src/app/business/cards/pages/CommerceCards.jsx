import { ContainerPage } from '@/shared/components/containers/ContainerPage'
import { HeaderPage } from '@/shared/components/layout'
import { Page } from '@/shared/components/containers'
import { BUSINESS_PATHS, BUSINESS_ROUTES_NAMES } from '@/app/business/shared/routes'
import { CommerceCardsLayout } from '@/app/business/cards/components'
import { PATH_DASHBOARD } from '@/routes'
import { Stack } from '@mui/material'
import { Scrollbar } from '@/shared/components/scroll'
import { useCommerceDetailsCard } from '@/app/business/cards/store'
import { CardToolbar } from '@/app/business/cards/components/cardToolbar'

export default function CommerceCards() {
  const selectedCards = useCommerceDetailsCard(state => state?.selectedCards)

  return (
    <Page title="Tarjetas del Comercio">
      <ContainerPage>
        <HeaderPage
          name={'Tarjetas del Comercio'}
          links={[
            { name: 'Inicio', href: PATH_DASHBOARD.root },
            { name: 'Administracion', href: BUSINESS_PATHS.cards },
            { name: BUSINESS_ROUTES_NAMES.cards.name }
          ]}
        />
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
