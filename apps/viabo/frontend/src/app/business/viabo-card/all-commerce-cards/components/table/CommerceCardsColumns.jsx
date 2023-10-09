import { Stack, Typography } from '@mui/material'

import { CarnetLogo, MasterCardLogo } from '@/shared/components/images'

export const CommerceCardsColumns = [
  {
    id: 'cardNumber',
    accessorKey: 'cardNumber', // access nested data with dot notation
    header: 'Tarjeta',
    enableClickToCopy: true,
    enableHiding: false,
    Cell: ({ cell, column, row }) => {
      const { original: dataRow } = row
      return (
        <Stack direction={'row'} spacing={2} alignItems={'center'}>
          {dataRow?.cardType === 'Carnet' ? (
            <CarnetLogo sx={{ width: 25, height: 25 }} />
          ) : (
            <MasterCardLogo sx={{ width: 25, height: 25 }} />
          )}
          <Typography variant="subtitle2" fontWeight="bold" noWrap>
            {dataRow?.cardNumberHidden}
          </Typography>
        </Stack>
      )
    }
  },
  {
    id: 'lastActivityDate',
    accessorFn: originalRow => originalRow?.assignUser?.dateTime,
    header: 'Fecha de Última Actividad',
    size: 150
  },
  {
    id: 'assigned',
    accessorFn: originalRow => originalRow?.assignUser?.name,
    header: 'Asignado',
    size: 150
  },
  {
    id: 'income',
    accessorFn: originalRow => originalRow?.assignUser?.dateTime,
    header: 'Abonos',
    size: 150
  },
  {
    id: 'expenses',
    accessorFn: originalRow => originalRow?.assignUser?.dateTime,
    header: 'Cargos',
    size: 150
  }
]
