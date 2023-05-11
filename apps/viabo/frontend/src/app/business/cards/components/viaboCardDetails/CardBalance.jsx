import { styled } from '@mui/material/styles'
import { Card, Stack, Typography } from '@mui/material'

const RowStyle = styled('div')({
  display: 'flex',
  justifyContent: 'space-between'
})

export function CardBalance({ cardDetails }) {
  const currentBalance = 187650
  const sentAmount = 25500
  const totalAmount = currentBalance - sentAmount

  return (
    <Card sx={{ p: 3 }}>
      <Typography variant="subtitle2" gutterBottom>
        Balance
      </Typography>

      <Stack spacing={2}>
        <Stack direction={'row'} spacing={2} alignItems={'center'}>
          <Typography variant="h3">{cardDetails?.balance}</Typography>
          <Typography variant="caption">MXN</Typography>
        </Stack>

        <RowStyle>
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            Ingresos
          </Typography>
          <Typography sx={{ color: 'success.main' }} variant="body2">
            {cardDetails?.income}
          </Typography>
        </RowStyle>

        <RowStyle>
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            Egresos
          </Typography>
          <Typography variant="body2" sx={{ color: 'error.main' }}>
            - {cardDetails?.expenses}
          </Typography>
        </RowStyle>
      </Stack>
    </Card>
  )
}
