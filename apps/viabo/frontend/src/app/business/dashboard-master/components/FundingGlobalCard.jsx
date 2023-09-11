import { useState } from 'react'

import { Check, CopyAll, Mail, Receipt } from '@mui/icons-material'
import { Box, Button, Card, IconButton, Stack, Typography } from '@mui/material'

import { useMasterGlobalStore } from '@/app/business/dashboard-master/store'
import { ModalSharedCharge } from '@/app/business/viabo-card/cards/components/details/ModalSharedCharge'
import { useCommerceDetailsCard } from '@/app/business/viabo-card/cards/store'
import { copyToClipboard } from '@/shared/utils'

export function FundingGlobalCard() {
  const card = useMasterGlobalStore(state => state.card)
  const [copiedSPEI, setCopiedSPEI] = useState(false)
  const [openShared, setOpenShared] = useState(false)
  const setOpenFundingOrder = useCommerceDetailsCard(state => state.setOpenFundingOrder)
  const setFundingCard = useCommerceDetailsCard(state => state.setFundingCard)

  return (
    <>
      <Card sx={{ p: 3 }}>
        <Stack display="flex" flexDirection={'row'} alignItems="center">
          <Typography
            variant="h6"
            textTransform={'capitalize'}
          >{`Fondear Tarjeta ${card?.paymentProcessor?.toLowerCase()}`}</Typography>
          <Box sx={{ flex: '1 1 auto' }} />
        </Stack>

        <Stack spacing={2}>
          <Stack
            flexDirection="column"
            justifyContent="space-between"
            alignItems="baseline"
            gap={1}
            sx={{ display: 'flex', flexWrap: 'wrap' }}
          >
            <Stack
              flexDirection="row"
              alignItems="center"
              justifyContent={'center'}
              sx={{ flexGrow: 1, flexWrap: 'wrap' }}
              gap={1}
            >
              <Typography variant="subtitle1" sx={{ color: 'text.secondary' }}>
                SPEI
              </Typography>
              <IconButton
                variant="outlined"
                color={copiedSPEI ? 'success' : 'inherit'}
                onClick={() => {
                  setCopiedSPEI(true)
                  copyToClipboard(card?.SPEI)
                  setTimeout(() => {
                    setCopiedSPEI(false)
                  }, 1000)
                }}
              >
                {copiedSPEI ? <Check sx={{ color: 'success' }} /> : <CopyAll sx={{ color: 'text.disabled' }} />}
              </IconButton>
            </Stack>
            <Typography variant="body1">{card?.SPEI}</Typography>
          </Stack>

          <Stack flexDirection={'row'} flexWrap={'wrap'} gap={3} alignItems={'center'}>
            <Button
              fullWidth
              color={'primary'}
              variant={'outlined'}
              startIcon={<Mail />}
              onClick={() => setOpenShared(true)}
            >
              Compartir
            </Button>
            <Button
              fullWidth
              color={'primary'}
              variant={'contained'}
              startIcon={<Receipt />}
              onClick={() => {
                setOpenFundingOrder(true)
                setFundingCard(card)
              }}
            >
              Orden Fondeo
            </Button>
          </Stack>
        </Stack>
      </Card>
      <ModalSharedCharge
        open={openShared}
        card={card}
        onClose={() => {
          setOpenShared(false)
        }}
      />
    </>
  )
}
