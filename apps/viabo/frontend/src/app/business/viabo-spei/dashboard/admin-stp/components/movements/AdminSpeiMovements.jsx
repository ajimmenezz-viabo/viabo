import { useEffect } from 'react'

import { Box, CardContent, CardHeader, Divider, Stack, alpha } from '@mui/material'

import { AdminSpeiLastMovements } from './AdminSpeiLastMovements'

import { useAdminDashboardSpeiStore } from '../../store'

import { CardViaboSpeiStyle } from '@/app/business/viabo-spei/shared/components'
import { useFindViaboSpeiMovements } from '@/app/business/viabo-spei/shared/hooks'

const AdminSpeiMovements = () => {
  const queryMovements = useFindViaboSpeiMovements({ limit: 10 })
  const { isLoading, isFetching, isError, error, data: movements } = queryMovements

  return (
    <Box
      component={CardViaboSpeiStyle}
      variant="outlined"
      sx={theme => ({
        backdropFilter: `blur(10px)`,
        WebkitBackdropFilter: `blur(10px)`
      })}
    >
      <CardHeader sx={{ p: 2 }} title="Últimas transacciones" />
      <Divider sx={{ borderColor: alpha('#CFDBD5', 0.7) }} />
      <CardContent sx={{ p: 0 }}>
        <Stack flexDirection={'row'} sx={{ height: '100%', display: 'flex', flexGrow: 1 }}>
          <AdminSpeiLastMovements movementsGrouped={movements?.groupByDay} isLoading={isLoading} />
        </Stack>
      </CardContent>
    </Box>
  )
}

export default AdminSpeiMovements
