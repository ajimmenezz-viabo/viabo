import { Box, Card } from '@mui/material'

import { getCommerceActions } from './CommerceActions'

import { useCommercesColumns, useFindCommerceList } from '@/app/management/commerces/hooks'
import { MaterialDataTable } from '@/shared/components/dataTables'
import { useMaterialTable } from '@/shared/hooks'

export function CommerceList() {
  const { data: commerces, isLoading, isError, error, isFetching } = useFindCommerceList()

  const columns = useCommercesColumns()

  const table = useMaterialTable(isError, error, {
    columns,
    data: commerces || [],
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
          id: 'name',
          desc: false
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
    renderTopToolbarCustomActions: () => <Box></Box>,
    renderRowActionMenuItems: getCommerceActions
  })

  return (
    <Card>
      <MaterialDataTable table={table} />
    </Card>
  )
}
