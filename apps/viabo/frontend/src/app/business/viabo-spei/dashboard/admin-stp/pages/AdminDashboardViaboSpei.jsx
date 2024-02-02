import { lazy } from 'react'

import { Box, Stack } from '@mui/material'

import AdminSpeiCurrentBalance from '../components/AdminSpeiCurrentBalance'
import AdminSpeiMovements from '../components/movements/AdminSpeiMovements'

import { Lodable } from '@/shared/components/lodables'

const SpeiOutDrawer = Lodable(lazy(() => import('../components/spei-out/SpeiOutDrawer')))

const AdminDashboardViaboSpei = () => (
  <>
    <Stack spacing={3}>
      <Stack flexDirection={{ md: 'row' }}>
        <Stack flex={{ md: 1, xl: 0.5 }}>
          <AdminSpeiCurrentBalance />
        </Stack>

        <Box display={'flex'} flexGrow={1} />
      </Stack>

      <AdminSpeiMovements />
    </Stack>
    <SpeiOutDrawer />
  </>
)

export default AdminDashboardViaboSpei
