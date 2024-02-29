import { NorthEast, SouthWest } from '@mui/icons-material'
import { Grid, Stack } from '@mui/material'

import { AdminSpeiAccounts } from './AdminSpeiAccounts'
import { AdminSpeiBalanceCard } from './AdminSpeiBalanceCard'
import { AdminSpeiFilterBalance } from './AdminSpeiFilterBalance'

const AdminSpeiBalance = () => (
  <Stack gap={3}>
    <AdminSpeiFilterBalance />
    <Grid container spacing={3}>
      <Grid item xs={12} md={6}>
        <AdminSpeiBalanceCard
          title={'Depósitos'}
          value={'$9,650.00'}
          transactions={84}
          icon={<SouthWest color="success" />}
        />
      </Grid>
      <Grid item xs={12} md={6}>
        <AdminSpeiBalanceCard
          title={'Transferencias'}
          value={'$7,845.00'}
          transactions={58}
          icon={<NorthEast color="error" />}
        />
      </Grid>
    </Grid>

    <AdminSpeiAccounts />
  </Stack>
)
export default AdminSpeiBalance
