import { Stack, Typography } from '@mui/material'

import { useFundingOrderStore } from '../../store'

export const PaymentFundingOrderInfo = () => {
  const fundingOrder = useFundingOrderStore(state => state.fundingOrder)

  return (
    <Stack spacing={2}>
      <Typography variant={'subtitle1'} fontWeight={'bold'}>
        Datos del Pago
      </Typography>
      <Stack spacing={2}>
        <Stack flexDirection={'row'} gap={1}>
          <Stack flex={1} spacing={0.5}>
            <Typography paragraph variant="overline" sx={{ color: 'text.disabled' }}>
              Referencia
            </Typography>
            <Typography variant="body2">{'-'}</Typography>
          </Stack>
          <Stack flex={1} spacing={0.5}>
            <Typography paragraph variant="overline" sx={{ color: 'text.disabled' }}>
              Folio
            </Typography>
            <Typography variant="body2">{'-'}</Typography>
          </Stack>
        </Stack>

        <Stack flexDirection={'row'} gap={1}>
          <Stack flex={1} spacing={0.5}>
            <Typography paragraph variant="overline" sx={{ color: 'text.disabled' }}>
              Fecha
            </Typography>
            <Typography variant="body2">{'-'}</Typography>
          </Stack>
          <Stack flex={1} spacing={0.5}>
            <Typography paragraph variant="overline" sx={{ color: 'text.disabled' }}>
              Código Autorización
            </Typography>
            <Typography variant="body2">{'-'}</Typography>
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  )
}
