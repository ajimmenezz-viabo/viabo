import { useMemo, useState } from 'react'

import { Box, Card, CardHeader } from '@mui/material'
import { sub } from 'date-fns'

import AdminSpeiMovementsFilters from './AdminSpeiMovementsFilters'

import { useAdminSpeiMovementsColumns } from '../../hooks'

import { useFindViaboSpeiMovements } from '@/app/business/viabo-spei/shared/hooks'
import { MaterialDataTable } from '@/shared/components/dataTables'
import { useMaterialTable } from '@/shared/hooks'

const AdminSpeiMovements = () => {
  const currentDate = new Date()

  const { isLoading, isFetching, isError, error, data: movements } = useFindViaboSpeiMovements()

  const filterDate = null

  const initialStartDate = useMemo(
    () => (filterDate?.startDate ? new Date(filterDate?.startDate) : sub(currentDate, { days: 30 })),
    [filterDate?.startDate]
  )
  const initialEndDate = useMemo(
    () => (filterDate?.endDate ? new Date(filterDate?.endDate) : currentDate),
    [filterDate?.endDate]
  )

  const [startDate, setStartDate] = useState(initialStartDate)
  const [endDate, setEndDate] = useState(initialEndDate)

  const columns = useAdminSpeiMovementsColumns()

  const table = useMaterialTable(isError, error, {
    columns,
    data: movements || [],
    enableColumnPinning: true,
    enableColumnFilterModes: true,
    enableStickyHeader: true,
    enableRowVirtualization: true,
    enableFacetedValues: true,
    enableRowActions: false,
    enableRowSelection: true,
    enableDensityToggle: false,
    positionActionsColumn: 'last',
    selectAllMode: 'all',
    initialState: {
      density: 'compact',
      sorting: [
        {
          id: 'date',
          desc: true
        }
      ]
    },
    state: {
      isLoading,
      showAlertBanner: isError,
      showProgressBars: isFetching
    },
    displayColumnDefOptions: {
      'mrt-row-select': {
        maxSize: 10
      },
      'mrt-row-actions': {
        header: 'Acciones',
        maxSize: 80
      }
    },
    muiTableContainerProps: { sx: { maxHeight: { md: '350px', lg: '450px', xl: '700px' } } },
    enableColumnResizing: true,
    layoutMode: 'grid',
    renderTopToolbarCustomActions: () => <Box></Box>
  })

  const handleDateRange = range => {
    const { startDate, endDate } = range
    if (endDate !== null && startDate !== null) {
      setEndDate(endDate)
      setStartDate(startDate)
    }
  }

  return (
    <Card
      variant="outlined"
      sx={theme =>
        !table.getState().isFullScreen
          ? {
              boxShadow: theme.customShadows.z24,
              backgroundColor: theme.palette.mode === 'light' ? 'inherit' : theme.palette.grey[500_12],
              backdropFilter: `blur(10px)`,
              WebkitBackdropFilter: `blur(10px)`
            }
          : {}
      }
    >
      <CardHeader
        sx={theme => ({
          pb: 2
        })}
        title="Movimientos"
      />
      <AdminSpeiMovementsFilters
        startDate={startDate}
        endDate={endDate}
        onChangeDateRange={handleDateRange}
        loading={isFetching}
      />
      <MaterialDataTable table={table} />
    </Card>
  )
}

export default AdminSpeiMovements
