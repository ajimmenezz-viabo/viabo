import { lazy, useEffect } from 'react'

import { Box, Grid, Stack, Typography } from '@mui/material'

import { STP_ACCOUNT_TYPES } from '../constants'
import { useFindViaboSpeiAccountsInfo } from '../hooks'
import { useAdminDashboardSpeiStore } from '../store'

import { Lodable } from '@/shared/components/lodables'
import { useUser } from '@/shared/hooks'

const SpeiOutDrawer = Lodable(lazy(() => import('../components/spei-out/SpeiOutDrawer')))
const AdminSpeiBalance = Lodable(lazy(() => import('../components/balance/AdminSpeiBalance')))
const AdminSpeiMovements = Lodable(lazy(() => import('../components/movements/AdminSpeiMovements')))

export const AdminDashboardSpeiResume = () => {
  const { data } = useFindViaboSpeiAccountsInfo()
  const { permissions } = useUser()
  const setStpAccountsByPermissions = useAdminDashboardSpeiStore(state => state.setStpAccountsByPermissions)
  const selectedAccount = useAdminDashboardSpeiStore(state => state.selectedAccount)

  useEffect(() => {
    if (data) {
      setStpAccountsByPermissions(data, permissions)
    }
  }, [data, permissions])

  return (
    <>
      <Stack gap={3}>
        <Stack>
          <Typography sx={{ typography: 'h2' }}>{selectedAccount?.totalBalance?.format || '$0.00'}</Typography>
          {selectedAccount?.type === STP_ACCOUNT_TYPES.CONCENTRATOR && (
            <>
              <Typography sx={{ typography: 'subtitle1' }}>
                Saldo Empresas:{' '}
                <Box component={'span'} color={'error.main'}>
                  {selectedAccount?.companiesBalance?.format || '$0.00'}
                </Box>
              </Typography>
              <Typography sx={{ typography: 'subtitle1' }}>
                Saldo Disponible:{' '}
                <Box component={'span'} color={'success.main'}>
                  {selectedAccount?.balance?.format || '$0.00'}
                </Box>
              </Typography>
            </>
          )}

          <Typography sx={{ typography: 'subtitle1' }} color={'text.disabled'}>
            Total balance todas las cuentas{' '}
            <Box component={'span'} color={'info.main'}>
              {' '}
              MXN
            </Box>
          </Typography>
        </Stack>
        <Grid container spacing={3}>
          <Grid item xs={12} md={6} xl={4}>
            <AdminSpeiBalance />
          </Grid>
          <Grid item xs={12} md={6} xl={8}>
            <AdminSpeiMovements />
          </Grid>
        </Grid>
      </Stack>

      <SpeiOutDrawer />
    </>
  )
}
