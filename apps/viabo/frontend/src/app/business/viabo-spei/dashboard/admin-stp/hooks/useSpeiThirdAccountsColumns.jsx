import { useMemo } from 'react'

import { Typography } from '@mui/material'

export const useAdminSpeiMovementsColumns = () =>
  useMemo(
    () => [
      {
        id: 'company',
        accessorKey: 'company',
        header: 'No. Empresa',
        enableHiding: false,
        size: 150,
        Cell: ({ cell, column, row, renderedCellValue }) => (
          <Typography fontWeight={'bold'} variant="subtitle2">
            {renderedCellValue}
          </Typography>
        )
      },
      {
        id: 'account',
        accessorKey: 'account',
        header: 'Cuenta',
        Cell: ({ cell, column, row, renderedCellValue }) => {
          const { original: rowData } = row
          return <Typography variant="subtitle2">{renderedCellValue}</Typography>
        }
      },
      {
        id: 'movement',
        accessorKey: 'movement',
        header: 'Movimiento',
        Cell: ({ cell, column, row, renderedCellValue }) => {
          const { original: rowData } = row

          return <Typography variant="subtitle2">{rowData?.bank.name}</Typography>
        }
      },
      {
        id: 'date',
        accessorFn: originalRow => originalRow?.date?.dateTime || null,
        header: 'Fecha',
        minSize: 100,
        Cell: ({ cell, column, row, renderedCellValue }) => {
          const { original: rowData } = row
          return <Typography variant="subtitle2">{renderedCellValue}</Typography>
        }
      },
      {
        id: 'type',
        accessorKey: 'type',
        header: 'Tipo',
        Cell: ({ cell, column, row, renderedCellValue }) => {
          const { original: rowData } = row
          return <Typography variant="subtitle2">{renderedCellValue}</Typography>
        }
      },
      {
        id: 'amount',
        accessorKey: 'amount',
        header: 'Monto',
        Cell: ({ cell, column, row, renderedCellValue }) => {
          const { original: rowData } = row
          return <Typography variant="subtitle2">{renderedCellValue}</Typography>
        }
      }
    ],
    []
  )
