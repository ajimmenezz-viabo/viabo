import { lazy, useState } from 'react'

import { Apps, Link } from '@mui/icons-material'
import { LoadingButton } from '@mui/lab'
import { Box, Divider, Stack } from '@mui/material'

import { Lodable } from '@/shared/components/lodables'
import { Scrollbar } from '@/shared/components/scroll'

const PaymentLinkModal = Lodable(lazy(() => import('../payment-link/PaymentLinkModal')))
const VirtualTerminalModal = Lodable(lazy(() => import('../virtual-terminal/VirtualTerminalModal')))

export const TerminalActions = () => {
  const [openPaymentLink, setOpenPaymentLink] = useState(false)
  const [openVirtualTerminal, setOpenVirtualTerminal] = useState(false)

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
                startIcon={<Link />}
                variant={'contained'}
                color={'info'}
                onClick={() => setOpenPaymentLink(true)}
              >
                Liga de Pago
              </LoadingButton>
            </Stack>

            <Stack direction="row" alignItems="center" justifyContent="center" sx={{ width: 1, minWidth: 150 }}>
              <LoadingButton
                startIcon={<Apps />}
                color={'info'}
                variant={'contained'}
                onClick={() => setOpenVirtualTerminal(true)}
              >
                Terminal Virtual
              </LoadingButton>
            </Stack>
          </Stack>
        </Scrollbar>
      </Box>
      {openPaymentLink && <PaymentLinkModal open={openPaymentLink} setOpen={setOpenPaymentLink} />}
      {openVirtualTerminal && <VirtualTerminalModal open={openVirtualTerminal} setOpen={setOpenVirtualTerminal} />}
    </>
  )
}
