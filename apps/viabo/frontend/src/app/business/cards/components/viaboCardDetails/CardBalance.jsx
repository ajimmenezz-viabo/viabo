import { styled } from '@mui/material/styles'
import { Card, Stack, Typography } from '@mui/material'
import { fCurrency } from '@/shared/utils'

const RowStyle = styled('div')({
  display: 'flex',
  justifyContent: 'space-between'
})

export function CardBalance() {
  const currentBalance = 187650
  const sentAmount = 25500
  const totalAmount = currentBalance - sentAmount

  return (
    <Card sx={{ p: 3 }}>
      <Typography variant="subtitle2" gutterBottom>
        Saldo Disponible
      </Typography>

      <Stack spacing={2}>
        <Stack direction={'row'} spacing={2} alignItems={'center'}>
          <Typography variant="h3">{fCurrency(totalAmount)}</Typography>
          <Typography variant="caption">MXN</Typography>
        </Stack>

        <RowStyle>
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            Ingresos
          </Typography>
          <Typography variant="body2">{fCurrency(currentBalance)}</Typography>
        </RowStyle>

        <RowStyle>
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            Egresos
          </Typography>
          <Typography variant="body2">- {fCurrency(sentAmount)}</Typography>
        </RowStyle>
      </Stack>
    </Card>
  )
}
