import { useCommerceDetailsCard } from '@/app/business/cards/store'
import { CardCVV, CardNumber, CardStyled } from '@/app/shared/components/card'
import { Box, CardHeader, Stack, Typography } from '@mui/material'
import { Label } from '@/shared/components/form'
import { getColorCardStatusById } from '@/app/shared/services'
import { cssStyles } from '@theme/utils'

export function CommerceViaboCard({ card }) {
  const commerceCardSelected = useCommerceDetailsCard(state => state.card)
  const selected = commerceCardSelected?.id === card.id
  return (
    <Box
      sx={theme => ({
        p: 0.5,
        ...(selected && {
          borderRadius: 2,
          ...cssStyles(theme).bgGradient({ startColor: '#A100FFFF', endColor: '#71C4FFFF' })
        })
      })}
    >
      <CardStyled>
        <CardHeader
          title={<Typography sx={{ typography: 'subtitle2', opacity: 0.72 }}>Viabo Card</Typography>}
          subheader={card?.register}
          sx={{ p: 0 }}
        />
        <Box sx={{ p: 1, position: 'relative' }}>
          <Label
            variant={'filled'}
            color={getColorCardStatusById(card?.status?.id)}
            sx={{
              right: 0,
              zIndex: 9,
              top: -50,
              bottom: 0,
              position: 'absolute',
              textTransform: 'capitalize'
            }}
          >
            {card?.status?.name}
          </Label>
        </Box>
        <CardNumber card={card} />

        <Stack direction="row" spacing={5}>
          <Stack>
            <Typography sx={{ mb: 1, typography: 'caption', opacity: 0.48 }}>Vencimiento</Typography>
            <Typography sx={{ typography: 'subtitle1' }}>{card?.expiration}</Typography>
          </Stack>
          <CardCVV card={card} />
        </Stack>
      </CardStyled>
    </Box>
  )
}
