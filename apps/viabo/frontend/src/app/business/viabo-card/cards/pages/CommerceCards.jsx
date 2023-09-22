import { useEffect } from 'react'

import { Box, Stack } from '@mui/material'
import { useQueryClient } from '@tanstack/react-query'

import { CARDS_COMMERCES_KEYS } from '@/app/business/viabo-card/cards/adapters'
import { CardDetails, CardsSidebar } from '@/app/business/viabo-card/cards/components'
import { CardToolbar, FundingOrder } from '@/app/business/viabo-card/cards/components/toolbar-actions'
import { useCommerceDetailsCard } from '@/app/business/viabo-card/cards/store'
import { VIABO_CARD_PATHS, VIABO_CARD_ROUTES_NAMES } from '@/app/business/viabo-card/routes'
import { PATH_DASHBOARD } from '@/routes'
import { Page } from '@/shared/components/containers'
import { ContainerPage } from '@/shared/components/containers/ContainerPage'
import { HeaderPage } from '@/shared/components/layout'

export default function CommerceCards() {
  const selectedCards = useCommerceDetailsCard(state => state?.selectedCards)

  const queryClient = useQueryClient()

  useEffect(
    () => () => {
      const keysArray = Object.values(CARDS_COMMERCES_KEYS)
      queryClient.cancelQueries(keysArray)
    },
    []
  )

  return (
    <Page title="Lista de Tarjetas">
      <ContainerPage>
        <Box display={'flex'} overflow={'hidden'} sx={{ height: '100vH', maxHeight: '100%', flexDirection: 'column' }}>
          <Box px={1}>
            <HeaderPage
              name={'Lista de Tarjetas'}
              links={[
                { name: 'Inicio', href: PATH_DASHBOARD.root },
                { name: 'Viabo Card', href: VIABO_CARD_PATHS.cards },
                { name: VIABO_CARD_ROUTES_NAMES.cards.name }
              ]}
            />
          </Box>

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

            <CardDetails />
          </Box>
        </Box>

        <FundingOrder />
      </ContainerPage>
    </Page>
  )
}