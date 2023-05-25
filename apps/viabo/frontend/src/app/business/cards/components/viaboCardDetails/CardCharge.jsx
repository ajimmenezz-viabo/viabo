import { useState } from 'react'
import { Box, Button, Card, Stack, Typography } from '@mui/material'
import { CheckCircle } from '@mui/icons-material'
import { useCommerceDetailsCard } from '@/app/business/cards/store'

export function CardCharge() {
  const card = useCommerceDetailsCard(state => state.card)
  const [copiedSPEI, setCopiedSPEI] = useState(false)
  const [copiedPAYNET, setCopiedPAYNET] = useState(false)

  const copyToClipboard = (setCopied, text) => {
    navigator.clipboard.writeText(text)
    setCopied(true)

    setTimeout(() => {
      setCopied(false)
    }, 1000)
  }

  return (
    <Card sx={{ p: 3 }}>
      <Typography variant="subtitle2" gutterBottom>
        Recargar Tarjeta
      </Typography>
      <Stack spacing={2}>
        <Stack
          flexDirection="row"
          justifyContent="space-between"
          alignItems="baseline"
          gap={2}
          sx={{ display: 'flex', flexWrap: 'wrap' }} // Agregar estas propiedades
        >
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            SPEI :
          </Typography>
          <Stack
            flexDirection="row"
            alignItems="center"
            justifyContent={'flex-end'}
            sx={{ py: 1, flexGrow: 1, flexWrap: 'wrap' }}
            gap={2}
          >
            <Box sx={{ borderBottom: 1, borderBottomStyle: 'dashed', textAlign: 'right', width: 1 }}>
              <Box
                component="div"
                animate={{ opacity: copiedSPEI ? 0.95 : 1 }}
                transition={{ duration: 0.1 }}
                sx={{ textAlign: 'right', width: 1 }}
              >
                <Typography variant="body1">{card?.SPEI}</Typography>
              </Box>
            </Box>
            <Button
              variant="outlined"
              color={copiedSPEI ? 'success' : 'inherit'}
              onClick={() => copyToClipboard(setCopiedSPEI, card?.SPEI)}
            >
              {copiedSPEI ? <CheckCircle sx={{ color: 'success', width: 18 }} /> : 'Copiar'}
            </Button>
          </Stack>
        </Stack>

        <Stack
          flexDirection="row"
          justifyContent="space-between"
          alignItems="baseline"
          gap={2}
          sx={{ display: 'flex', flexWrap: 'wrap' }}
        >
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            PAYNET :
          </Typography>
          <Stack
            flexDirection="row"
            alignItems="center"
            justifyContent={'flex-end'}
            sx={{ py: 1, flexGrow: 1, flexWrap: 'wrap' }}
            gap={2}
          >
            <Box sx={{ borderBottom: 1, borderBottomStyle: 'dashed', textAlign: 'right', width: 1 }}>
              <Box
                component="div"
                animate={{ opacity: copiedPAYNET ? 0.95 : 1 }}
                transition={{ duration: 0.1 }}
                sx={{ textAlign: 'right', width: 1 }}
              >
                <Typography variant="body1">{card?.PAYNET}</Typography>
              </Box>
            </Box>
            <Button
              variant="outlined"
              color={copiedPAYNET ? 'success' : 'inherit'}
              onClick={() => copyToClipboard(setCopiedPAYNET, card?.PAYNET)}
            >
              {copiedPAYNET ? <CheckCircle sx={{ color: 'success', width: 18 }} /> : 'Copiar'}
            </Button>
          </Stack>
        </Stack>
      </Stack>
    </Card>
  )
}
