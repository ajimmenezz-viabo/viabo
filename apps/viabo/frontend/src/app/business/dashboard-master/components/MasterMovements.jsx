import { useMemo, useState } from 'react'

import { Card } from '@mui/material'

import { useFindMasterMovements } from '@/app/business/dashboard-master/hooks'
import { MaterialDataTable } from '@/shared/components/dataTables'

export function MasterMovements() {
  const [currentDate, setCurrentDate] = useState(new Date())

  const { data, isError, isLoading, isFetching, error } = useFindMasterMovements(currentDate)

  const columns = useMemo(
    () => [
      {
        accessorKey: 'description', // access nested data with dot notation
        header: 'Movimiento',
        enableHiding: false
      },
      {
        accessorKey: 'date', // normal accessorKey
        header: 'Fecha',
        size: 100
      },
      {
        accessorKey: 'type',
        header: 'Tipo',
        size: 100
      },
      {
        accessorKey: 'amount',
        header: 'Monto',
        size: 100
      }
    ],
    [data]
  )

  return (
    <Card>
      <MaterialDataTable
        enablePinning
        enableColumnFilterModes
        enableStickyHeader
        enableRowVirtualization
        enableFacetedValues
        enableDensityToggle={false}
        columns={columns}
        data={[]}
        isError={isError}
        textError={error}
        selectAllMode={'all'}
        initialState={{
          density: 'compact',
          sorting: [
            {
              id: 'date',
              desc: true
            }
          ]
        }}
        state={{
          isLoading,
          showAlertBanner: isError,
          showProgressBars: isFetching
        }}
        muiTableContainerProps={{ sx: { maxHeight: { md: '350px', lg: '450px', xl: '700px' } } }}
      />
    </Card>
  )
}
