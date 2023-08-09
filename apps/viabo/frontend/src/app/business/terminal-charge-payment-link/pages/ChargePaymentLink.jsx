import { Box, Stack } from '@mui/material'
import { useParams } from 'react-router-dom'

import { ChargePaymenLinkDetails, ChargePaymentForm } from '../components'
import { useFindPaymentLinkInfo } from '../hooks'

import { Page } from '@/shared/components/containers'
import { RequestLoadingComponent } from '@/shared/components/loadings'

const ChargePaymentLink = () => {
  const { paymentId } = useParams()

  const { data, isLoading } = useFindPaymentLinkInfo(paymentId, {
    enabled: !!paymentId
  })

  return (
    <Page title="Cobro">
      <Box component={'main'} height={1} m={0} p={0}>
        <Stack p={4} alignItems={'center'} justifyContent={'center'} minHeight={'100vH'}>
          {isLoading && <RequestLoadingComponent />}
          {!isLoading && data && (
            <Stack width={{ xs: 1, sm: 0.5, md: '0.4' }} spacing={3}>
              <ChargePaymenLinkDetails details={data} />
              {['6', '8'].includes(data?.status?.id) && <ChargePaymentForm details={data} />}
            </Stack>
          )}
        </Stack>
      </Box>
    </Page>
  )
}

export default ChargePaymentLink
