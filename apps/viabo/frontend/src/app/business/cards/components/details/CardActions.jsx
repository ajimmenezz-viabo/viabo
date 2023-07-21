import { Box, Divider, Stack } from '@mui/material'
import { Scrollbar } from '@/shared/components/scroll'
import { CurrencyExchangeOutlined, PriceChange } from '@mui/icons-material'
import { lazy, useState } from 'react'
import LoadingButton from '@mui/lab/LoadingButton'
import { useIsFetching } from '@tanstack/react-query'
import { CARDS_COMMERCES_KEYS } from '@/app/business/cards/adapters'
import { useCommerceDetailsCard } from '@/app/business/cards/store'
import { Lodable } from '@/shared/components/lodables'

const TransferSideBar = Lodable(lazy(() => import('@/app/business/cards/components/transfer/TransferSideBar')))
const PaymentSidebar = Lodable(lazy(() => import('@/app/business/cards/components/send-payment/PaymentSidebar')))

export function CardActions() {
  const [openTransfer, setOpenTransfer] = useState(false)
  const [openPayment, setOpenPayment] = useState(false)
  const card = useCommerceDetailsCard(state => state.card)
  const isFetchingCardDetails = useIsFetching([CARDS_COMMERCES_KEYS.CARD_INFO, card?.id]) === 1

  return (
    <>
      <Box sx={{ mb: 2 }}>
        <Scrollbar>
          <Stack
            direction="row"
            divider={<Divider orientation="vertical" flexItem sx={{ borderStyle: 'dashed' }} />}
            sx={{ py: 3 }}
            spacing={1}
          >
            <Stack direction="row" alignItems="center" justifyContent="center" sx={{ width: 1, minWidth: 150 }}>
              <LoadingButton
                disabled={isFetchingCardDetails}
                startIcon={<PriceChange />}
                variant={'outlined'}
                onClick={() => setOpenPayment(true)}
              >
                Enviar Pago
              </LoadingButton>
            </Stack>

            <Stack direction="row" alignItems="center" justifyContent="center" sx={{ width: 1, minWidth: 150 }}>
              <LoadingButton
                disabled={card?.balance === 0 || !card?.cardON || isFetchingCardDetails}
                startIcon={<CurrencyExchangeOutlined />}
                variant={'outlined'}
                onClick={() => setOpenTransfer(true)}
              >
                Transferir
              </LoadingButton>
            </Stack>
          </Stack>
        </Scrollbar>
      </Box>
      <TransferSideBar setOpen={setOpenTransfer} open={openTransfer} />
      <PaymentSidebar setOpen={setOpenPayment} open={openPayment} />
    </>
  )
}
