import { useState } from 'react'

import { AccountBalance, NorthEast, SouthWest } from '@mui/icons-material'
import { Avatar, Box, Card, Divider, Stack, Typography } from '@mui/material'

import { useTerminalDetails } from '../../store'

import { CardFilterMovements } from '@/app/business/cards/components/details/CardFilterMovements'
import { DataTable } from '@/shared/components/dataTables'

export const TerminalMovements = () => {
  const [currentMonth, setCurrentMonth] = useState(new Date())

  const card = useTerminalDetails(state => state.terminal)
  const addInfoCard = useTerminalDetails(state => state.addTerminalInfo)
  const movements = []
  const data = []

  //   useEffect(() => {
  //     // refetch()
  //   }, [currentMonth])

  //   useEffect(() => {
  //     setCurrentMonth(new Date())
  //   }, [card?.id])

  //   useEffect(() => {
  //     if (data) {
  //       const month = monthOptions[getMonth(currentMonth)] ?? null
  //       addInfoCard({ ...data, monthBalance: month })
  //     }
  //   }, [data, card?.id, currentMonth])

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
    <Card>
      <CardFilterMovements currentMonth={currentMonth} setCurrentMonth={setCurrentMonth} isLoading={false} />
      <Divider sx={{ borderStyle: 'dashed' }} />
      <DataTable
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
          }
        }}
      />
    </Card>
  )
}
