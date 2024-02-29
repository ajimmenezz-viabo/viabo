import { lazy, useEffect } from 'react'

import { Box, Grid, Stack, Typography } from '@mui/material'

import { useFindViaboSpeiBalance } from '../../../shared/hooks'
import AdminSpeiBalance from '../components/balance/AdminSpeiBalance'
import AdminSpeiMovements from '../components/movements/AdminSpeiMovements'
import { useAdminDashboardSpeiStore } from '../store'

import { Lodable } from '@/shared/components/lodables'
import { fCurrency } from '@/shared/utils'

const SpeiOutDrawer = Lodable(lazy(() => import('../components/spei-out/SpeiOutDrawer')))

const AdminDashboardViaboSpei = () => {
  const { data, isLoading, isError, error, refetch } = useFindViaboSpeiBalance()
  const stpAccount = useAdminDashboardSpeiStore(state => state.stpAccount)
  const setStpAccount = useAdminDashboardSpeiStore(state => state.setStpAccount)

  useEffect(() => {
    if (data) {
      setStpAccount(data)
    }
  }, [data])

  return (
    <>
      <Stack gap={3}>
        <Stack>
          <Typography sx={{ typography: 'h2' }}>{fCurrency(stpAccount?.balance)}</Typography>
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

export default AdminDashboardViaboSpei
