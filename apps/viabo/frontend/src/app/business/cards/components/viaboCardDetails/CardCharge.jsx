import { useState } from 'react'
import { Box, Card, Collapse, IconButton, Stack, Typography } from '@mui/material'
import { Check, CopyAll, Visibility, VisibilityOff } from '@mui/icons-material'
import { useCommerceDetailsCard } from '@/app/business/cards/store'
import Barcode from 'react-barcode'
import { useResponsive } from '@theme/hooks'

export function CardCharge() {
  const card = useCommerceDetailsCard(state => state.card)
  const isDesktop = useResponsive('up', 'xl')
  const [expand, setExpand] = useState(false)
  const [copiedSPEI, setCopiedSPEI] = useState(false)
  const [copiedPAYNET, setCopiedPAYNET] = useState(false)

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
    <Card sx={{ p: 3 }}>
      <Stack display="flex" flexDirection={'row'} alignItems="center">
        <Typography variant="h6">Fondear Tarjeta</Typography>
        <Box sx={{ flex: '1 1 auto' }} />
        <IconButton
          onClick={() => {
            setExpand(prev => !prev)
          }}
        >
          {expand ? <VisibilityOff sx={{ color: 'text.disabled' }} /> : <Visibility sx={{ color: 'text.disabled' }} />}
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
                PAYNET
              </Typography>
              <IconButton
                variant="outlined"
                color={copiedPAYNET ? 'success' : 'inherit'}
                onClick={() => copyToClipboard(setCopiedPAYNET, card?.PAYNET)}
              >
                {copiedPAYNET ? (
                  <Check sx={{ color: 'success', width: 18 }} />
                ) : (
                  <CopyAll sx={{ color: 'text.disabled' }} />
                )}
              </IconButton>
            </Stack>
            <Box sx={{ display: 'flex', alignSelf: 'center' }}>
              <Barcode value={card?.PAYNET || '1'} width={isDesktop ? 2 : 1} />
            </Box>
          </Stack>
        </Stack>
      </Collapse>
    </Card>
  )
}
