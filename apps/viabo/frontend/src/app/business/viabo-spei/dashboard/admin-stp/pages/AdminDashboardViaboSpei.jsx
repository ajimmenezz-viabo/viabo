import { lazy, useEffect } from 'react'

import { Box, Stack } from '@mui/material'

import AdminSpeiCurrentBalance from '../components/AdminSpeiCurrentBalance'
import AdminSpeiMovements from '../components/movements/AdminSpeiMovements'
import { useAdminDashboardSpeiStore } from '../store'

import { Lodable } from '@/shared/components/lodables'

const SpeiOutDrawer = Lodable(lazy(() => import('../components/spei-out/SpeiOutDrawer')))

const AdminDashboardViaboSpei = () => {
  const { setStpAccount } = useAdminDashboardSpeiStore()

  useEffect(() => {
    setStpAccount({
      balance: 342500.17,
      accountNumber: '1234 5345 6456 2471',
      accountNumberHidden: '**** **** **** 2471'
    })
  }, [])

  return (
    <>
      <Stack spacing={3}>
        <Stack flexDirection={{ md: 'row' }}>
          <Stack flex={1}>
            <AdminSpeiCurrentBalance />
          </Stack>

          <Box display={'flex'} flexGrow={1} />
        </Stack>

        <AdminSpeiMovements />
      </Stack>
      <SpeiOutDrawer />
    </>
  )
}

export default AdminDashboardViaboSpei
