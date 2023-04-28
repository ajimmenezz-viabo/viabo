import { useState } from 'react'
import { Box, Card, CardHeader, IconButton, MenuItem, Stack, Typography } from '@mui/material'
import { Image } from '@/shared/components/images'
import { MenuPopover } from '@/shared/components/containers'
import { DeleteForeverTwoTone, EditTwoTone, MoreVertTwoTone, Visibility, VisibilityOff } from '@mui/icons-material'
import { fCardNumber, fCardNumberHidden, fDateTime } from '@/shared/utils'
import carnet from '@/shared/assets/img/new_carnet.svg'
import mastercard from '@/shared/assets/img/ic_mastercard.svg'
import overlay from '@/shared/assets/img/overlay_2.jpg'

const HEIGHT = 230

export function StockCard({ card }) {
  const { cardType, cardNumber, cvv, expiration } = card

  const expirationYear = card.expiration.slice(-2)
  const [showCVV, setShowCVV] = useState(true)
  const [showCardNumber, setShowCardNumber] = useState(true)

  const onToggleShowCVV = () => {
    setShowCVV(prev => !prev)
  }

  const onToggleShowCardNumber = () => {
    setShowCardNumber(prev => !prev)
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
        action={
          <IconButton aria-label="settings">
            <MoreVertTwoTone />
          </IconButton>
        }
        title={<Typography sx={{ typography: 'subtitle2', opacity: 0.72 }}>Viabo Card</Typography>}
        subheader={fDateTime(new Date())}
        sx={{ p: 0 }}
      />

      <div>
        <Stack direction="row" alignItems="center" spacing={1}>
          <Image
            disabledEffect
            visibleByDefault
            alt="credit-card"
            src={cardType === 'mastercard' ? mastercard : carnet}
            sx={{ height: 30 }}
          />
          <Typography sx={{ typography: 'h6' }}>
            {showCardNumber ? fCardNumberHidden(cardNumber) : fCardNumber(cardNumber)}
          </Typography>
          <IconButton size={'small'} color="inherit" onClick={onToggleShowCardNumber} sx={{ opacity: 0.2 }}>
            {showCardNumber ? <Visibility /> : <VisibilityOff />}
          </IconButton>
        </Stack>
      </div>

      <Stack direction="row" spacing={5}>
        <Stack>
          <Typography sx={{ mb: 1, typography: 'caption', opacity: 0.48 }}>Vencimiento</Typography>
          <Typography sx={{ typography: 'subtitle1' }}>{card.expiration.slice(0, 3) + expirationYear}</Typography>
        </Stack>
        <Stack position={'relative'}>
          <Typography sx={{ mb: 1, typography: 'caption', opacity: 0.48 }}>CVV</Typography>
          <Stack direction="row" spacing={1} alignItems="center">
            <Typography sx={{ typography: showCVV ? 'subtitle2' : 'subtitle2' }}>{showCVV ? '***' : cvv}</Typography>
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

function MoreMenuButton() {
  const [open, setOpen] = useState(null)

  const handleOpen = event => {
    setOpen(event.currentTarget)
  }

  const handleClose = () => {
    setOpen(null)
  }

  const ICON = {
    mr: 2,
    width: 20,
    height: 20
  }

  return (
    <>
      <IconButton size="large" color="inherit" sx={{ opacity: 0.48 }} onClick={handleOpen}>
        <MoreVertTwoTone width={20} height={20} />
      </IconButton>

      <MenuPopover
        open={Boolean(open)}
        anchorEl={open}
        onClose={handleClose}
        anchorOrigin={{ vertical: 'top', horizontal: 'left' }}
        transformOrigin={{ vertical: 'top', horizontal: 'right' }}
        arrow="right-top"
        sx={{
          mt: -0.5,
          width: 'auto',
          '& .MuiMenuItem-root': { px: 1, typography: 'body2', borderRadius: 0.75 }
        }}
      >
        <MenuItem onClick={handleClose} sx={{ color: 'error.main' }}>
          <DeleteForeverTwoTone sx={{ ...ICON }} />
          Delete card
        </MenuItem>

        <MenuItem onClick={handleClose}>
          <EditTwoTone sx={{ ...ICON }} />
          Edit card
        </MenuItem>
      </MenuPopover>
    </>
  )
}
