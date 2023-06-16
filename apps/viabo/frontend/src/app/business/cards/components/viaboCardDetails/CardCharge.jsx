import { useState } from 'react'
import { Box, Button, Card, Collapse, IconButton, Stack, Typography } from '@mui/material'
import { Check, CopyAll, Mail, Receipt, Visibility, VisibilityOff } from '@mui/icons-material'
import { useCommerceDetailsCard } from '@/app/business/cards/store'
import { useCollapseDrawer, useResponsive } from '@theme/hooks'
import { ModalSharedCharge } from '@/app/business/cards/components/viaboCardDetails/ModalSharedCharge'

export function CardCharge() {
  const card = useCommerceDetailsCard(state => state.card)
  const isDesktop = useResponsive('up', 'xl')
  const { isCollapse } = useCollapseDrawer()
  const [expand, setExpand] = useState(false)
  const [copiedSPEI, setCopiedSPEI] = useState(false)
  const [copiedPAYNET, setCopiedPAYNET] = useState(false)
  const [openShared, setOpenShared] = useState(false)

  const copyToClipboard = (setCopied, text) => {
    const input = document.createElement('textarea')
    input.value = text
    document.body.appendChild(input)
    input.select()
    document.execCommand('copy')
    document.body.removeChild(input)
    setCopied(true)

    setTimeout(() => {
      setCopied(false)
    }, 1000)
  }

  return (
    <>
      <Card sx={{ p: 3 }}>
        <Stack display="flex" flexDirection={'row'} alignItems="center">
          <Typography variant="h6">Fondear Tarjeta</Typography>
          <Box sx={{ flex: '1 1 auto' }} />
          <IconButton
            onClick={() => {
              setExpand(prev => !prev)
            }}
          >
            {expand ? (
              <VisibilityOff sx={{ color: 'text.disabled' }} />
            ) : (
              <Visibility sx={{ color: 'text.disabled' }} />
            )}
          </IconButton>
        </Stack>

        <Collapse in={expand} timeout="auto">
          <Stack spacing={2}>
            <Stack
              flexDirection="column"
              justifyContent="space-between"
              alignItems="baseline"
              gap={1}
              sx={{ display: 'flex', flexWrap: 'wrap' }} // Agregar estas propiedades
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
                  onClick={() => copyToClipboard(setCopiedSPEI, card?.SPEI)}
                >
                  {copiedSPEI ? <Check sx={{ color: 'success' }} /> : <CopyAll sx={{ color: 'text.disabled' }} />}
                </IconButton>
              </Stack>
              <Typography variant="body1">{card?.SPEI}</Typography>
            </Stack>

            <Stack flexDirection={'row'} flexWrap={'wrap'} justifyContent={'center'} gap={3} alignItems={'center'}>
              <Button color={'primary'} variant={'outlined'} startIcon={<Mail />} onClick={() => setOpenShared(true)}>
                Compartir
              </Button>
              <Button color={'primary'} variant={'contained'} startIcon={<Receipt />}>
                Orden Fondeo
              </Button>
            </Stack>
          </Stack>
        </Collapse>
      </Card>
      <ModalSharedCharge
        open={openShared}
        onClose={() => {
          setOpenShared(false)
        }}
      />
    </>
  )
}
