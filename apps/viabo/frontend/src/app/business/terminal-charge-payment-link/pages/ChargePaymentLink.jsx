import { Box, Stack } from '@mui/material'

import { ChargePaymenLinkDetails, ChargePaymentForm } from '../components'

import { Page } from '@/shared/components/containers'

const ChargePaymentLink = () => (
  <Page title="Cobro">
    <Box component={'main'} height={1} m={0} p={0}>
      <Stack p={4} alignItems={'center'} justifyContent={'center'} minHeight={'100vH'}>
        <Stack width={{ xs: 1, sm: 0.5, md: '0.4' }} spacing={3}>
          <ChargePaymenLinkDetails />
          <ChargePaymentForm />
        </Stack>
      </Stack>
    </Box>
  </Page>
)

export default ChargePaymentLink
