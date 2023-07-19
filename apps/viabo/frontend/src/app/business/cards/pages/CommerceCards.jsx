import { useEffect } from 'react'
import { Page } from '@/shared/components/containers'
import { Box, Stack } from '@mui/material'
import { HeaderPage } from '@/shared/components/layout'
import { CardToolbar, FundingOrder } from '@/app/business/cards/components/toolbar-actions'
import { CARDS_COMMERCES_KEYS } from '@/app/business/cards/adapters'
import { useCommerceDetailsCard } from '@/app/business/cards/store'
import { useQueryClient } from '@tanstack/react-query'
import { PATH_DASHBOARD } from '@/routes'
import { BUSINESS_PATHS, BUSINESS_ROUTES_NAMES } from '@/app/business/shared/routes'
import { CardDetails, CardsSidebar } from '@/app/business/cards/components'

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
      <Box display={'flex'} overflow={'hidden'} sx={{ height: '100vH', maxHeight: '100%', flexDirection: 'column' }}>
        <Box px={1}>
          <HeaderPage
            name={'Lista de Tarjetas'}
            links={[
              { name: 'Inicio', href: PATH_DASHBOARD.root },
              { name: 'Administracion', href: BUSINESS_PATHS.cards },
              { name: BUSINESS_ROUTES_NAMES.cards.name }
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
    </Page>
  )
}
