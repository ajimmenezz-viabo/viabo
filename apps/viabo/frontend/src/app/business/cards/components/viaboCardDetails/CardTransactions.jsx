import { Avatar, Box, Card, Stack, Typography } from '@mui/material'
import { DataTable } from '@/shared/components/dataTables'
import { AccountBalance, NorthEast, SouthWest } from '@mui/icons-material'
import { useCommerceDetailsCard } from '@/app/business/cards/store'

export function CardTransactions() {
  const movements = useCommerceDetailsCard(state => state.card?.movements) ?? []
  const columns = [
    {
      name: 'description',
      label: 'Descripcion',

      options: {
        filterType: 'textField',
        filterOptions: { fullWidth: true },
        customBodyRenderLite: (dataIndex, rowIndex) => {
          const rowData = movements[dataIndex]
          const isIncome = rowData?.type === 'ingreso'
          return (
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <Box sx={{ position: 'relative' }}>
                <Avatar
                  sx={{
                    width: 48,
                    height: 48,
                    color: 'text.secondary',
                    bgcolor: 'background.neutral'
                  }}
                >
                  <AccountBalance width={24} height={24} />
                </Avatar>
                <Box
                  sx={{
                    right: 0,
                    bottom: 0,
                    width: 20,
                    height: 20,
                    display: 'flex',
                    borderRadius: '50%',
                    position: 'absolute',
                    alignItems: 'center',
                    color: 'common.white',
                    bgcolor: 'error.main',
                    justifyContent: 'center',
                    ...(isIncome && {
                      bgcolor: 'success.main'
                    })
                  }}
                >
                  {isIncome ? (
                    <SouthWest sx={{ width: 15, height: 15 }} />
                  ) : (
                    <NorthEast sx={{ width: 15, height: 15 }} />
                  )}
                </Box>
              </Box>
              <Box sx={{ ml: 2 }}>
                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                  {isIncome ? 'Recibe dinero de: ' : 'Retiro de dinero en:'}
                </Typography>
                <Typography variant="subtitle2"> {rowData?.description}</Typography>
              </Box>
            </Box>
          )
        }
      }
    },
    {
      name: 'date',
      label: 'Fecha',

      options: {
        filterType: 'textField',
        filterOptions: { fullWidth: true },
        customBodyRenderLite: (dataIndex, rowIndex) => {
          const row = movements[dataIndex]
          return (
            <Stack>
              <Typography variant="subtitle2">{row?.date}</Typography>
              <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                {row?.time}
              </Typography>
            </Stack>
          )
        }
      }
    },
    {
      name: 'amount',
      label: 'Cantidad',

      options: {
        filterType: 'textField',
        filterOptions: { fullWidth: true },
        customBodyRenderLite: (dataIndex, rowIndex) => {
          const rowData = movements[dataIndex]
          const isIncome = rowData?.type === 'ingreso'
          return (
            <Typography variant="subtitle2" fontWeight="bold" color={isIncome ? 'success.main' : 'error'}>
              {isIncome ? `+ ${rowData?.amount}` : `- ${rowData?.amount}`}
            </Typography>
          )
        }
      }
    }
  ]
  return (
    <Card>
      <DataTable
        title={'Últimos Movimientos'}
        data={movements || []}
        columns={columns}
        options={{
          responsive: 'simple',
          rowHover: true,
          sortOrder: {
            name: 'date',
            direction: 'desc'
          },
          downloadOptions: {
            filename: 'movimientos.csv',
            filterOptions: {
              useDisplayedColumnsOnly: false // it was true
            }
          }
        }}
      />
    </Card>
  )
}
