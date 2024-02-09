import { useMemo } from 'react'

import { Typography } from '@mui/material'

export const useSpeiCompaniesTableColumns = () =>
  useMemo(
    () => [
      {
        id: 'id',
        accessorKey: 'id',
        header: 'ID',
        enableHiding: false,
        size: 150,
        Cell: ({ cell, column, row, renderedCellValue }) => (
          <Typography variant="subtitle2">{renderedCellValue}</Typography>
        )
      },
      {
        id: 'rfc',
        accessorKey: 'rfc',
        header: 'RFC',
        Cell: ({ cell, column, row, renderedCellValue }) => {
          const { original: rowData } = row
          return (
            <Typography textTransform={'uppercase'} variant="subtitle2">
              {renderedCellValue}
            </Typography>
          )
        }
      },
      {
        id: 'name',
        accessorKey: 'name',
        header: 'Nombre',
        enableHiding: false,
        size: 150,
        Cell: ({ cell, column, row, renderedCellValue }) => (
          <Typography textTransform={'capitalize'} fontWeight={'bold'} variant="subtitle2">
            {renderedCellValue}
          </Typography>
        )
      },

      {
        id: 'stpAccount',
        header: 'Cuenta STP',
        accessorKey: 'stpAccount',
        Cell: ({ cell, column, row, renderedCellValue }) => {
          const { original: rowData } = row

          return <Typography variant="subtitle2">{renderedCellValue}</Typography>
        }
      },
      {
        id: 'balance',
        accessorKey: 'balance',
        header: 'Balance',
        minSize: 100,
        Cell: ({ cell, column, row, renderedCellValue }) => {
          const { original: rowData } = row
          return <Typography variant="subtitle2">{renderedCellValue}</Typography>
        }
      }
    ],
    []
  )
