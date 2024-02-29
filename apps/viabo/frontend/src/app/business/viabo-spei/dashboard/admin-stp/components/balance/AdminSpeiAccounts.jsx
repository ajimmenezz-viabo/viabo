import { Box, Button, CardContent, CardHeader, Divider, alpha, styled, useTheme } from '@mui/material'

import { AdminSpeiCardAccount } from './AdminsSpeiCardAccount'

import { useAdminDashboardSpeiStore } from '../../store'

import { CardViaboSpeiStyle } from '@/app/business/viabo-spei/shared/components'

const CustomButton = styled(Button)(({ theme }) => ({
  borderColor: alpha('#CFDBD5', 0.7),
  borderRadius: Number(theme.shape.borderRadius),
  boxShadow: 'none',
  backgroundColor: 'transparent'
}))

export const AdminSpeiAccounts = () => {
  const { setOpenSpeiOut } = useAdminDashboardSpeiStore()
  const theme = useTheme()

  return (
    <Box display={'flex'} component={CardViaboSpeiStyle} variant="outlined" flexDirection={'column'}>
      <CardHeader sx={{ p: 2 }} title="Mis cuentas" />
      <Divider sx={{ borderColor: alpha('#CFDBD5', 0.7) }} />
      <CardContent sx={{ p: 4, display: 'flex', flexDirection: 'column', gap: 2 }}>
        <Box mb={2}>
          <AdminSpeiCardAccount />
        </Box>
        <CustomButton
          size="large"
          variant="outlined"
          sx={{ color: 'text.primary' }}
          onClick={() => setOpenSpeiOut(true)}
          startIcon={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 24 24"
              stroke={theme.palette.text.primary}
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
              fill="none"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M12 19h-6a3 3 0 0 1 -3 -3v-8a3 3 0 0 1 3 -3h12a3 3 0 0 1 3 3v4.5" />
              <path d="M3 10h18" />
              <path d="M16 19h6" />
              <path d="M19 16l3 3l-3 3" />
              <path d="M7.005 15h.005" />
              <path d="M11 15h2" />
            </svg>
          }
        >
          SPEI OUT
        </CustomButton>
        <CustomButton
          size="large"
          variant="outlined"
          sx={{ color: 'text.primary' }}
          startIcon={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke={theme.palette.text.primary}
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M9 5h-2a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-12a2 2 0 0 0 -2 -2h-2" />
              <path d="M9 3m0 2a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v0a2 2 0 0 1 -2 2h-2a2 2 0 0 1 -2 -2z" />
              <path d="M9 17v-5" />
              <path d="M12 17v-1" />
              <path d="M15 17v-3" />
            </svg>
          }
        >
          Detalles
        </CustomButton>
      </CardContent>
    </Box>
  )
}
