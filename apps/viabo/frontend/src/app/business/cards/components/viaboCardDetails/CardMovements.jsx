import { Avatar, Box, Card, Divider, Stack, Typography } from '@mui/material'
import { DataTable } from '@/shared/components/dataTables'
import { AccountBalance, NorthEast, SouthWest } from '@mui/icons-material'
import { useCommerceDetailsCard } from '@/app/business/cards/store'
import { CustomToolBarTransactions } from '@/app/business/cards/components/viaboCardDetails/CustomToolBarTransactions'
import { lazy, useEffect, useState } from 'react'
import { Lodable } from '@/shared/components/lodables'
import { CardFilterMovements } from '@/app/business/cards/components/viaboCardDetails/CardFilterMovements'
import { useFindCardMovements } from '@/app/business/cards/hooks/useFindCardMovements'

const TransactionReport = Lodable(
  lazy(() => import('@/app/business/cards/components/viaboCardDetails/incidence/TransactionReport'))
)

export function CardMovements() {
  const [openReport, setOpenReport] = useState(false)
  const [selectedMovement, setSelectedMovement] = useState(null)
  const [currentMonth, setCurrentMonth] = useState(new Date())

  const card = useCommerceDetailsCard(state => state.card)
  const movements = useCommerceDetailsCard(state => state.card?.movements) ?? []

  const { data, isLoading, refetch, remove } = useFindCardMovements(card?.id, currentMonth, {
    enabled: !!card?.id
  })

  useEffect(() => {
    refetch()
  }, [currentMonth])

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
                {rowData?.concept !== '' && (
                  <Typography variant="overline" color={'text.disabled'} fontStyle={'italic'}>
                    concepto : {rowData?.concept}
                  </Typography>
                )}
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
    <>
      <Card>
        <CardFilterMovements currentMonth={currentMonth} setCurrentMonth={setCurrentMonth} />
        <Divider sx={{ borderStyle: 'dashed' }} />
        <DataTable
          isLoading={isLoading}
          title={'Movimientos'}
          data={movements || []}
          columns={columns}
          options={{
            responsive: 'simple',
            rowHover: true,
            selectableRows: 'single',
            selectableRowsOnClick: false,
            selectToolbarPlacement: 'replace',
            sortOrder: {
              name: 'date',
              direction: 'desc'
            },
            downloadOptions: {
              filename: 'movimientos.csv',
              filterOptions: {
                useDisplayedColumnsOnly: false // it was true
              }
            },
            customToolbarSelect: selectedRows => {
              const selectedRowIndex = selectedRows.data[0].dataIndex
              const selected = movements[selectedRowIndex]

              return (
                <CustomToolBarTransactions
                  handleReport={() => {
                    setOpenReport(true)
                    setSelectedMovement(selected)
                  }}
                />
              )
            }
          }}
        />
      </Card>

      <TransactionReport open={openReport} setOpen={setOpenReport} selectedMovement={selectedMovement} />
    </>
  )
}
