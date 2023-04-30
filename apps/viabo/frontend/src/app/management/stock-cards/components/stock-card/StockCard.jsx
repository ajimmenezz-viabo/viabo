import { useState } from 'react'
import { Box, Card, CardHeader, IconButton, Stack, Typography } from '@mui/material'
import { Visibility, VisibilityOff } from '@mui/icons-material'
import overlay from '@/shared/assets/img/overlay_2.jpg'
import { StockCardMenu } from '@/app/management/stock-cards/components/stock-card/StockCardMenu'
import CardNumber from '@/app/shared/components/card/CardNumber'

const HEIGHT = 230

export function StockCard({ card }) {
  const [showCVV, setShowCVV] = useState(true)

  const onToggleShowCVV = () => {
    setShowCVV(prev => !prev)
  }

  return (
    <Card
      sx={theme => ({
        height: HEIGHT - 16,
        color: theme.palette.common.white,
        p: 3,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        background: `linear-gradient(rgba(22, 28, 36, 0.8), rgba(22, 28, 36, 0.9)) center center / cover no-repeat, url(${overlay})`
      })}
    >
      <CardHeader
        action={<StockCardMenu card={card} />}
        title={<Typography sx={{ typography: 'subtitle2', opacity: 0.72 }}>Viabo Card</Typography>}
        subheader={card?.register}
        sx={{ p: 0 }}
      />

      <div>
        <CardNumber card={card} />
      </div>

      <Stack direction="row" spacing={5}>
        <Stack>
          <Typography sx={{ mb: 1, typography: 'caption', opacity: 0.48 }}>Vencimiento</Typography>
          <Typography sx={{ typography: 'subtitle1' }}>{card?.expiration}</Typography>
        </Stack>
        <Stack position={'relative'}>
          <Typography sx={{ mb: 1, typography: 'caption', opacity: 0.48 }}>CVV</Typography>
          <Stack direction="row" spacing={1} alignItems="center">
            <Typography sx={{ typography: showCVV ? 'subtitle2' : 'subtitle2' }}>
              {showCVV ? '***' : card?.cvv}
            </Typography>
          </Stack>
          <Box position={'absolute'} sx={{ left: '32px', top: '20px' }}>
            <IconButton size={'small'} color="inherit" onClick={onToggleShowCVV} sx={{ opacity: 0.2 }}>
              {showCVV ? <Visibility /> : <VisibilityOff />}
            </IconButton>
          </Box>
        </Stack>
      </Stack>
    </Card>
  )
}
