import { Card } from '@mui/material'

import { getLiquidatedMovementsActions } from './LiquidatedMovementsActions'

import { useFindViaboPayLiquidatedMovements, useLiquidatedMovementsColumns } from '../../hooks'

import { MaterialDataTable } from '@/shared/components/dataTables'
import { useMaterialTable } from '@/shared/hooks'

const LiquidatedMovementsTable = () => {
  const { data, isError, error, isLoading, isFetching } = useFindViaboPayLiquidatedMovements()

  const columns = useLiquidatedMovementsColumns()

  const table = useMaterialTable(isError, error, {
    columns,
    data: data || [],
    enableColumnPinning: true,
    enableColumnFilterModes: true,
    enableStickyHeader: true,
    enableRowVirtualization: true,
    enableFacetedValues: true,
    enableRowActions: true,
    enableRowSelection: true,
    enableDensityToggle: false,
    positionActionsColumn: 'last',
    selectAllMode: 'all',
    initialState: {
      density: 'compact',
      sorting: [
        {
          id: 'serverDate',
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
    renderRowActionMenuItems: getLiquidatedMovementsActions
  })

  return (
    <Card>
      <MaterialDataTable table={table} />
    </Card>
  )
}

export default LiquidatedMovementsTable
