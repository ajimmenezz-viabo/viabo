import { Image } from '@/shared/components/images'
import mastercard from '@/shared/assets/img/ic_mastercard.svg'
import carnet from '@/shared/assets/img/new_carnet.svg'
import { IconButton, Stack, Typography } from '@mui/material'
import { fCardNumber, fCardNumberHidden } from '@/shared/utils'
import { Visibility, VisibilityOff } from '@mui/icons-material'
import { useState } from 'react'

export default function CardNumber({ card, disableShow }) {
  const [showCardNumber, setShowCardNumber] = useState(true)
  const onToggleShowCardNumber = () => {
    setShowCardNumber(prev => !prev)
  }

  return (
    <Stack direction="row" alignItems="center" spacing={1}>
      <Image
        disabledEffect
        visibleByDefault
        alt="credit-card"
        src={card?.cardType?.toLowerCase() === 'mastercard' ? mastercard : carnet}
        sx={{ height: 30 }}
      />
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
