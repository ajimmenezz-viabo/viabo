import { CarnetLogo, MasterCardLogo } from '@/shared/components/images'
import { IconButton, Stack, Typography } from '@mui/material'
import { fCardNumber, fCardNumberHidden } from '@/shared/utils'
import { Visibility, VisibilityOff } from '@mui/icons-material'
import { useState } from 'react'

export default function CardNumber({ card, disableShow, color }) {
  const [showCardNumber, setShowCardNumber] = useState(true)
  const onToggleShowCardNumber = () => {
    setShowCardNumber(prev => !prev)
  }

  return (
    <Stack direction="row" alignItems="center" spacing={1}>
      {card?.cardType?.toLowerCase() !== 'mastercard' ? <CarnetLogo color={color} /> : <MasterCardLogo color={color} />}

      <Typography sx={{ typography: 'h6' }}>
        {showCardNumber ? fCardNumberHidden(card?.cardNumber) : fCardNumber(card?.cardNumber)}
      </Typography>
      {!disableShow && (
        <>
          <IconButton size={'small'} color="inherit" onClick={onToggleShowCardNumber} sx={{ opacity: 0.2 }}>
            {showCardNumber ? <Visibility /> : <VisibilityOff />}
          </IconButton>
        </>
      )}
    </Stack>
  )
}
