import { Person2Rounded } from '@mui/icons-material'
import { Box, Paper, Stack, Typography } from '@mui/material'

import ViaboLogo from '@/shared/assets/img/viabo-pay.png'
import { Label } from '@/shared/components/form'
import { fCurrency } from '@/shared/utils'

export const ChargePaymenLinkDetails = () => {
  const details = { amount: 133, name: 'Test', description: 'Pago de prueba' }
  return (
    <Stack>
      <Paper sx={{ width: 1, p: 3, position: 'relative' }} elevation={0}>
        <Box
          sx={{
            textAlign: 'center',
            display: 'flex',
            position: 'absolute',
            top: 8,
            left: 8,
            justifyContent: 'center',
            width: 100
          }}
        >
          <img src={ViaboLogo} alt={'viabo-logo'} />
        </Box>
        <Stack alignItems={'center'} justifyContent={'center'} spacing={3}>
          <Label
            variant={'ghost'}
            color={'warning'}
            sx={{
              textTransform: 'uppercase'
            }}
          >
            {'Pendiente'}
          </Label>
          <Stack alignItems={'center'} justifyContent={'center'}>
            <Stack direction={'row'} spacing={1} alignItems={'center'}>
              <Typography variant="h2"> {fCurrency(details.amount)}</Typography>
              <Typography variant="caption">MXN</Typography>
            </Stack>
            <Stack direction={'row'} spacing={1} alignItems={'center'}>
              <Person2Rounded />
              <Typography variant="subtitle1">{details.name}</Typography>
            </Stack>
          </Stack>
          <Typography textAlign={'center'} variant="body2">
            {details.description}
          </Typography>
        </Stack>
      </Paper>
    </Stack>
  )
}
