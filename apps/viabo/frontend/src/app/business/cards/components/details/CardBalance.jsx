import { styled } from '@mui/material/styles'
import { Card, Stack, Typography } from '@mui/material'
import { useCommerceDetailsCard } from '@/app/business/cards/store'

const RowStyle = styled('div')({
  display: 'flex',
  justifyContent: 'space-between'
})

export function CardBalance() {
  const card = useCommerceDetailsCard(state => state.card)

  return (
    <Card sx={{ p: 3 }}>
      <Typography variant="h6" gutterBottom>
        Balance {card?.monthBalance && `de ${card?.monthBalance}`}
      </Typography>

      <Stack spacing={2}>
        <Stack direction={'row'} spacing={2} alignItems={'center'}>
          <Typography variant="h4">{card?.balanceMovements}</Typography>
          <Typography variant="caption">MXN</Typography>
        </Stack>

        <RowStyle>
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            Ingresos
          </Typography>
          <Typography sx={{ color: 'success.main' }} variant="body2">
            {card?.income}
          </Typography>
        </RowStyle>

        <RowStyle>
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            Egresos
          </Typography>
          <Typography variant="body2" sx={{ color: 'error.main' }}>
            - {card?.expenses}
          </Typography>
        </RowStyle>
      </Stack>
    </Card>
  )
}
