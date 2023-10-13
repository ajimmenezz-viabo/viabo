import { Link, Stack, Typography } from '@mui/material'

import { useAssignUserCard } from '../../store'

import { CarnetLogo, MasterCardLogo } from '@/shared/components/images'

export const CommerceCardsColumns = () => {
  const { setOpenUserInfo, setCardInfo } = useAssignUserCard(state => state)

  return [
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
      id: 'assigned',
      accessorFn: originalRow => originalRow?.assignUser?.name,
      Cell: ({ cell, column, row, renderedCellValue }) => {
        const { original: dataRow } = row

        if (renderedCellValue !== '-') {
          return (
            <Stack direction={'row'} spacing={2} alignItems={'center'}>
              <Link
                color={'text.primary'}
                underline="always"
                sx={{ cursor: 'pointer' }}
                variant={'subtitle2'}
                component={Typography}
                onClick={() => {
                  console.log('test')
                  setCardInfo(dataRow)
                  setOpenUserInfo(true)
                }}
              >
                {renderedCellValue}
              </Link>
            </Stack>
          )
        }

        return renderedCellValue
      },
      header: 'Asignado',
      size: 150
    },
    {
      id: 'status',
      accessorFn: originalRow => originalRow?.assignUser?.dateTime,
      header: 'Estado',
      size: 150
    }
  ]
}
