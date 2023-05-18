import { useState } from 'react'
import { m } from 'framer-motion'
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
        <Stack flexDirection={'row'} justifyContent={'space-between'} alignItems={'center'} gap={2}>
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            SPEI
          </Typography>
          <Stack flexDirection={'row'} alignItems={'center'} sx={{ py: 1 }} flexGrow={1} gap={1}>
            <Box sx={{ borderBottom: 1, borderBottomStyle: 'dashed', textAlign: 'right', width: 1 }}>
              <Box
                component={m.div}
                animate={{ opacity: copiedSPEI ? 0.95 : 1 }}
                transition={{ duration: 0.1 }}
                sx={{ textAlign: 'right', width: 1 }}
              >
                <Typography variant="body1">{card?.SPEI}</Typography>
              </Box>
            </Box>

            <Button
              variant={'outlined'}
              color={copiedSPEI ? 'success' : 'inherit'}
              startIcon={copiedSPEI && <CheckCircle sx={{ color: 'success', pl: 1 }} />}
              onClick={() => copyToClipboard(setCopiedSPEI, card?.SPEI)}
            >
              {copiedSPEI ? 'Copiado' : 'Copiar'}
            </Button>
          </Stack>
        </Stack>

        <Stack flexDirection={'row'} justifyContent={'space-between'} alignItems={'center'} gap={2}>
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            PAYNET
          </Typography>
          <Stack flexDirection={'row'} alignItems={'center'} sx={{ py: 1 }} flexGrow={1} gap={1}>
            <Box sx={{ borderBottom: 1, borderBottomStyle: 'dashed', textAlign: 'right', width: 1 }}>
              <Box
                component={m.div}
                animate={{ opacity: copiedPAYNET ? 0.95 : 1 }}
                transition={{ duration: 0.1 }}
                sx={{ textAlign: 'right', width: 1 }}
              >
                <Typography variant="body1">{card?.PAYNET}</Typography>
              </Box>
            </Box>
            <Button
              variant={'outlined'}
              color={copiedPAYNET ? 'success' : 'inherit'}
              startIcon={copiedPAYNET && <CheckCircle sx={{ color: 'success', pl: 1 }} />}
              onClick={() => copyToClipboard(setCopiedPAYNET, card?.PAYNET)}
            >
              {copiedPAYNET ? 'Copiado' : 'Copiar'}
            </Button>
          </Stack>
        </Stack>
      </Stack>
    </Card>
  )
}
