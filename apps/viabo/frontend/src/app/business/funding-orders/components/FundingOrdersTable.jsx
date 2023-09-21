import { AddTask, Cancel, Visibility } from '@mui/icons-material'
import { Card, ListItemIcon, MenuItem, Stack, Typography } from '@mui/material'
import { BiBlock } from 'react-icons/bi'
import { BsPatchCheck } from 'react-icons/bs'

import { useFindFundingOrders } from '../hooks'

import { getCardTypeByName, getColorFundingOrderStatusByName, getOperationTypeByName } from '@/app/shared/services'
import { MaterialDataTable } from '@/shared/components/dataTables'
import { Label } from '@/shared/components/form'

const FundingOrdersTable = () => {
  const { data, isError, isLoading, isFetching, error } = useFindFundingOrders()

  const columns = [
    {
      accessorKey: 'referenceNumber', // access nested data with dot notation
      header: 'Referencia',
      enableHiding: false,
      size: 100
    },
    {
      accessorKey: 'paymentProcessorName', // access nested data with dot notation
      header: 'Cuenta',
      size: 100,
      filterVariant: 'multi-select',
      Cell: ({ cell, column, row }) => {
        const { original: rowData } = row

        const cardLogo = getCardTypeByName(rowData?.paymentProcessorName)
        const CardLogoComponent = cardLogo?.component
        return (
          <Stack flexDirection={'row'} alignItems={'center'} gap={1}>
            {cardLogo && <CardLogoComponent sx={{ width: 30, height: 30 }} />}
          </Stack>
        )
      }
    },
    {
      accessorKey: 'amount', // access nested data with dot notation
      header: 'Monto',
      size: 100,
      Cell: ({ cell, column, row, renderedCellValue }) => (
        <Typography variant="subtitle2" fontWeight="bold">
          {renderedCellValue}
        </Typography>
      )
    },
    {
      accessorKey: 'date', // normal accessorKey
      header: 'Fecha',
      size: 100,
      Cell: ({ cell, column, row }) => {
        const { original: rowData } = row
        return (
          <Stack>
            <Typography variant="subtitle2">{rowData?.registerDate?.date}</Typography>
            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
              {rowData?.registerDate?.time}
            </Typography>
          </Stack>
        )
      }
    },
    {
      accessorKey: 'paymentMethods', // access nested data with dot notation
      header: 'Método(s)',
      size: 100,
      filterVariant: 'multi-select',
      Cell: ({ cell, column, row }) => {
        const { original: rowData } = row
        const logos = []

        const paymentMethods = rowData?.paymentMethods?.split(',') || []

        paymentMethods?.forEach(method => {
          const methodLogo = getOperationTypeByName(method)
          if (methodLogo) {
            logos.push({
              component: methodLogo?.component,
              width: method === 'PAYCASH' ? 50 : 30,
              height: method === 'PAYCASH' ? 50 : 30
            })
          }
        })

        return (
          <Stack flexDirection={'row'} alignItems={'center'} gap={1}>
            {logos?.map(({ component: Logo, width, height }, index) => (
              <Logo key={index} sx={{ width, height }} />
            ))}
          </Stack>
        )
      }
    },
    {
      accessorKey: 'status', // access nested data with dot notation
      header: 'Estado',
      filterVariant: 'multi-select',
      size: 100,
      Cell: ({ cell, column, row }) => {
        const { original: rowData } = row

        const color = getColorFundingOrderStatusByName(rowData?.status)

        return (
          <Stack flexDirection={'row'} alignItems={'center'} gap={1}>
            <Label
              variant={'ghost'}
              color={color}
              sx={{
                textTransform: 'capitalize'
              }}
            >
              {rowData?.status}
            </Label>
          </Stack>
        )
      }
    },
    {
      accessorKey: 'conciliatedName', // access nested data with dot notation
      header: '¿Conciliada?',
      filterVariant: 'multi-select',
      size: 110,
      Cell: ({ cell, column, row }) => {
        const { original: rowData } = row

        return (
          <Stack
            flexDirection={'row'}
            width={1}
            justifyContent={'center'}
            alignItems={'center'}
            gap={1}
            color={'primary'}
          >
            {rowData?.conciliated ? (
              <BsPatchCheck color="green" fontWeight={'bold'} fontSize={'20px'} />
            ) : (
              <BiBlock fontSize={'20px'} color="red" />
            )}
          </Stack>
        )
      }
    }
  ]

  return (
    <Card>
      <MaterialDataTable
        enablePinning
        enableColumnFilterModes
        enableStickyHeader
        enableRowVirtualization
        enableFacetedValues
        enableRowActions
        enableRowSelection
        positionActionsColumn="last"
        enableDensityToggle={false}
        columns={columns}
        data={data || []}
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
        displayColumnDefOptions={{
          'mrt-row-actions': {
            header: 'Acciones', // change header text
            minSize: 80 // make actions column wider
          },
          'mrt-row-select': {
            size: 10
          }
        }}
        muiTableContainerProps={{ sx: { maxHeight: { md: '350px', lg: '450px', xl: '700px' } } }}
        renderRowActionMenuItems={({ closeMenu, row }) => {
          const { original: rowData } = row
          const { status } = rowData
          const hasPending = status === 'Pendiente'
          const hasPayed = status === 'Pagada'

          const menuItems = [
            <MenuItem
              key={0}
              onClick={() => {
                // View details logic...
                closeMenu()
              }}
              sx={{ m: 0 }}
            >
              <ListItemIcon>
                <Visibility color="info" />
              </ListItemIcon>
              Ver Detalles
            </MenuItem>
          ]

          if (hasPayed) {
            menuItems.push(
              <MenuItem
                key={1}
                onClick={() => {
                  // Conciliated logic...
                  closeMenu()
                }}
                sx={{ m: 0 }}
              >
                <ListItemIcon>
                  <AddTask color="success" />
                </ListItemIcon>
                Conciliar
              </MenuItem>
            )
          }

          if (hasPending) {
            menuItems.push(
              <MenuItem
                key={2}
                onClick={() => {
                  // Cancel logic...
                  closeMenu()
                }}
                sx={{ m: 0 }}
              >
                <ListItemIcon>
                  <Cancel color="error" />
                </ListItemIcon>
                Cancelar
              </MenuItem>
            )
          }

          return menuItems
        }}
      />
    </Card>
  )
}

export default FundingOrdersTable
