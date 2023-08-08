import PropTypes from 'prop-types'

import { Person2Rounded } from '@mui/icons-material'
import { Box, Paper, Stack, Typography } from '@mui/material'

import { getColorStatusPaymentLinkById } from '../services/paymentLinkStatus'

import ViaboLogo from '@/shared/assets/img/viabo-pay.png'
import { Label } from '@/shared/components/form'

export const ChargePaymenLinkDetails = ({ details }) => (
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
          color={getColorStatusPaymentLinkById(details?.status?.id)}
          sx={{
            textTransform: 'uppercase'
          }}
        >
          {details?.status?.name}
        </Label>
        <Stack alignItems={'center'} justifyContent={'center'}>
          <Stack direction={'row'} spacing={1} alignItems={'center'}>
            <Typography variant="h2"> {details?.amount}</Typography>
            <Typography variant="caption">MXN</Typography>
          </Stack>
          <Stack direction={'row'} spacing={1} alignItems={'center'}>
            <Person2Rounded />
            <Typography variant="subtitle1" textTransform={'capitalize'}>
              {details?.name}
            </Typography>
          </Stack>
        </Stack>
        <Typography textAlign={'center'} variant="body2">
          {details?.description}
        </Typography>
      </Stack>
    </Paper>
  </Stack>
)

ChargePaymenLinkDetails.propTypes = {
  details: PropTypes.shape({
    amount: PropTypes.any,
    description: PropTypes.any,
    name: PropTypes.any,
    status: PropTypes.shape({
      id: PropTypes.any,
      name: PropTypes.any
    })
  })
}
