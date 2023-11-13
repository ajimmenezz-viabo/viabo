import { useMemo } from 'react'

import { Stack, Typography } from '@mui/material'

export const useLiquidatedMovementsColumns = () =>
  useMemo(
    () => [
      {
        accessorKey: 'description',
        header: 'Movimiento',
        enableHiding: false,
        size: 200
      },
      {
        accessorKey: 'terminalName',
        header: 'Terminal',
        size: 120,
        Cell: ({ cell, column, row, renderedCellValue }) => {
          const { original: rowData } = row
          return (
            <Typography fontWeight={'bold'} variant="subtitle2">
              {rowData?.terminalName}
            </Typography>
          )
        }
      },
      {
        accessorKey: 'commerceName',
        header: 'Comercio',
        size: 120
      },
      {
        accessorKey: 'serverDate',
        header: 'Fecha',
        size: 100,
        Cell: ({ cell, column, row, renderedCellValue }) => {
          const { original: rowData } = row
          return (
            <Stack>
              <Typography variant="subtitle2">{rowData?.transactionDate?.fullDate}</Typography>
            </Stack>
          )
        }
      },
      {
        accessorKey: 'amount',
        header: 'Monto Cobrado',
        size: 120,
        Cell: ({ cell, column, row, renderedCellValue }) => {
          const { original: rowData } = row
          return (
            <Stack>
              <Typography fontWeight={'bold'} variant="subtitle2">
                {rowData?.amountFormat}
              </Typography>
            </Stack>
          )
        }
      },
      {
        accessorKey: 'amountToLiquidate',
        header: 'Monto por liquidar',
        size: 120,
        Cell: ({ cell, column, row, renderedCellValue }) => {
          const { original: rowData } = row
          return (
            <Stack>
              <Typography fontWeight={'bold'} color={'success.main'} variant="subtitle2">
                {rowData?.amountToLiquidate}
              </Typography>
            </Stack>
          )
        }
      }
    ],
    []
  )