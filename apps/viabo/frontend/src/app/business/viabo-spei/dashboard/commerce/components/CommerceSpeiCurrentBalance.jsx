import { Person } from '@mui/icons-material'
import { Avatar, Box, Stack, Typography, alpha, styled } from '@mui/material'

import { FullLogo } from '@/shared/components/images'
import { fCurrency } from '@/shared/utils'

const HEIGHT = 330

const RootStyle = styled('div')(({ theme }) => ({
  position: 'relative',
  height: HEIGHT,
  borderRadius: Number(theme.shape.borderRadius) * 2
}))

const CardItemStyle = styled('div')(({ theme }) => ({
  position: 'relative',
  height: HEIGHT - 16,
  padding: theme.spacing(3),
  // color: theme.palette.common.white,
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  // backgroundColor: 'inherit',
  background: `linear-gradient(to right, ${alpha(
    theme.palette.mode === 'dark' ? theme.palette.secondary.dark : theme.palette.primary.lighter,
    0.7
  )},rgba(22, 28, 36, 0.4)), url(https://minimals.cc/assets/background/overlay_2.jpg)`,
  // backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
  backdropFilter: 'blur(40px)',
  borderRadius: Number(theme.shape.borderRadius) * 2,
  boxShadow: theme.customShadows.card
}))

const shadowStyle = {
  mx: 'auto',
  width: 'calc(100% - 16px)',
  borderRadius: 2,
  position: 'absolute',
  height: 200,
  zIndex: 8,
  bottom: 8,
  left: 0,
  right: 0,
  bgcolor: 'grey.500',
  backdropFilter: 'blur(40px)',
  opacity: 0.32
}

const CommerceSpeiCurrentBalance = () => {
  const { balance, accountNumber } = {
    balance: 342500.17,
    accountNumber: '**** **** **** 2471',
    cardHolder: 'test',
    cardValid: '04/12'
  }
  return (
    <RootStyle>
      <Box
        sx={{
          position: 'relative',
          zIndex: 9
        }}
      >
        <CardItemStyle>
          <Stack gap={4}>
            <Stack justifyContent={'space-between'} alignItems={'center'} direction={'row'}>
              <Stack direction={'row'} spacing={2}>
                <Avatar sx={{ backgroundColor: theme => theme.palette.background.default }}>
                  <Person color="primary" />
                </Avatar>
                <Stack>
                  <Typography variant="subtitle1">Ramses Hoyos</Typography>
                  <Typography variant="subtitle2">Admin</Typography>
                </Stack>
              </Stack>
              <Stack direction={'row'} spacing={1} alignItems={'center'} justifyContent={'center'}>
                <FullLogo sx={{ width: 80 }} />
                <Typography variant="h3" color={'primary.main'}>
                  |
                </Typography>
                <Typography variant="h4" color={'primary.main'}>
                  spei
                </Typography>
              </Stack>
            </Stack>
            <Stack gap={1}>
              <Typography color={'primary.main'} sx={{ typography: 'subtitle1', fontWeight: 'bold' }}>
                Balance Total
              </Typography>
              <Typography sx={{ typography: 'h2' }}>{fCurrency(balance)}</Typography>
            </Stack>

            <Stack gap={2}>
              <Typography color={'primary.main'} sx={{ typography: 'subtitle1', fontWeight: 'bold' }}>
                Cuenta Origen | STP
              </Typography>
              <Typography sx={{ typography: 'h6' }}>{accountNumber}</Typography>
            </Stack>
          </Stack>
        </CardItemStyle>
      </Box>

      <Box sx={{ ...shadowStyle }} />
      <Box
        sx={{
          ...shadowStyle,
          opacity: 0.16,
          bottom: 0,
          zIndex: 7,
          width: 'calc(100% - 40px)'
        }}
      />
    </RootStyle>
  )
}

export default CommerceSpeiCurrentBalance
