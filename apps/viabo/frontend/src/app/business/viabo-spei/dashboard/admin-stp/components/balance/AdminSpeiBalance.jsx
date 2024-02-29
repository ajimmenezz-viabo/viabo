import { NorthEast, SouthWest } from '@mui/icons-material'
import { Grid, Stack } from '@mui/material'

import { AdminSpeiBalanceCard } from './AdminSpeiBalanceCard'
import { AdminSpeiFilterBalance } from './AdminSpeiFilterBalance'

import { AdminSpeiAccounts } from '../accounts/AdminSpeiAccounts'

import { useAdminDashboardSpeiStore } from '@/app/business/viabo-spei/dashboard/admin-stp/store'

const AdminSpeiBalance = () => {
  const balance = useAdminDashboardSpeiStore(state => state.balanceResume)

  return (
    <Stack gap={3}>
      <AdminSpeiFilterBalance />
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <AdminSpeiBalanceCard
            title={'Depósitos'}
            value={balance?.deposits?.currency || '$0.00'}
            transactions={84}
            icon={<SouthWest color="success" />}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <AdminSpeiBalanceCard
            title={'Transferencias'}
            value={balance?.transfers?.currency || '$0.00'}
            transactions={58}
            icon={<NorthEast color="error" />}
          />
        </Grid>
      </Grid>

      <AdminSpeiAccounts />
    </Stack>
  )
}
export default AdminSpeiBalance
