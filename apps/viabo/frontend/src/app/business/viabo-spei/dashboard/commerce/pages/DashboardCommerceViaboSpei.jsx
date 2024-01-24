import { Grid, Stack } from '@mui/material'

import CommerceSpeiBeneficiaries from '../components/CommerceSpeiBeneficiaries'
import CommerceSpeiCurrentBalance from '../components/CommerceSpeiCurrentBalance'
import CommerceSpeiMovements from '../components/CommerceSpeiMovements'
import CommerceSpeiQuickTransfer from '../components/CommerceSpeiQuickTransfer'
import CommerceSpeiSummary from '../components/CommerceSpeiSummary'

const DashboardCommerceViaboSpei = () => (
  <Grid container spacing={3}>
    <Grid item xs={12} md={5}>
      <CommerceSpeiCurrentBalance />
    </Grid>

    <Grid item xs={12} md={7}>
      <Stack direction={'column'} spacing={3}>
        <CommerceSpeiSummary title="Ingresos" icon={'trending_up'} percent={2.6} total={18765} color={'success'} />
        <CommerceSpeiSummary title="Gastos" color="error" icon={'trending_down'} percent={-0.5} total={8938} />
      </Stack>
    </Grid>

    <Grid item xs={12} md={8}>
      <Stack spacing={3}>
        <CommerceSpeiMovements />
      </Stack>
    </Grid>

    <Grid item xs={12} md={4}>
      <Stack spacing={3}>
        <CommerceSpeiQuickTransfer />
        <CommerceSpeiBeneficiaries />
      </Stack>
    </Grid>
  </Grid>
)

export default DashboardCommerceViaboSpei
