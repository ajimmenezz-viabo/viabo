import { Stack, Typography } from '@mui/material'

import { ConciliateFundingOrderInfo, GeneralInfoFundingOrder, PaymentFundingOrderInfo } from './details'

import { useFundingOrderStore } from '../store'

import { RightPanel } from '@/app/shared/components'
import { Scrollbar } from '@/shared/components/scroll'

const FundingOrderDetails = () => {
  const fundingOrder = useFundingOrderStore(state => state.fundingOrder)
  const setFundingOrder = useFundingOrderStore(state => state.setFundingOrder)
  const setOpenDetailsFundingOrder = useFundingOrderStore(state => state.setOpenDetailsFundingOrder)
  const openDetailsFundingOrder = useFundingOrderStore(state => state.openDetailsFundingOrder)

  const handleClose = () => {
    setOpenDetailsFundingOrder(false)
    setFundingOrder(null)
  }
  return (
    <RightPanel
      open={openDetailsFundingOrder}
      handleClose={handleClose}
      titleElement={
        <Stack>
          <Typography variant={'h6'}>Orden de Fondeo</Typography>
          <Typography variant={'subtitle1'}>#{fundingOrder?.referenceNumber}</Typography>
        </Stack>
      }
    >
      <Scrollbar containerProps={{ sx: { flexGrow: 0, height: 'auto' } }}>
        <Stack spacing={3} p={3}>
          <GeneralInfoFundingOrder />
          {fundingOrder?.status === 'Pagada' && fundingOrder?.payCash !== '' && <PaymentFundingOrderInfo />}
          <ConciliateFundingOrderInfo />
        </Stack>
      </Scrollbar>
    </RightPanel>
  )
}

export default FundingOrderDetails
