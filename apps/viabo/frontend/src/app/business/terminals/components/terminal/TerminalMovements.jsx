import { useEffect, useState } from 'react'

import { AccountBalance, Check, Clear } from '@mui/icons-material'
import { Avatar, Box, Card, Divider, Stack, Typography } from '@mui/material'

import { useFindTerminalMovements } from '../../hooks'
import { useTerminalDetails } from '../../store'

import { CardFilterMovements } from '@/app/business/cards/components/details/CardFilterMovements'
import { DataTable } from '@/shared/components/dataTables'

export const TerminalMovements = () => {
  const [currentMonth, setCurrentMonth] = useState(new Date())

  const terminal = useTerminalDetails(state => state.terminal)

  const {
    data: movements,
    isFetching,
    refetch,
    isError
  } = useFindTerminalMovements(terminal?.terminalId, currentMonth, { enabled: !!terminal?.terminalId })

  useEffect(() => {
    refetch()
  }, [currentMonth])

  useEffect(() => {
    setCurrentMonth(new Date())
  }, [terminal?.id])

  const columns = [
    {
      name: 'description',
      label: 'Descripción',

      options: {
        filterType: 'textField',
        filterOptions: { fullWidth: true },
        customBodyRenderLite: (dataIndex, rowIndex) => {
          const rowData = movements[dataIndex]
          const approved = rowData?.approved
          return (
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <Box sx={{ position: 'relative' }}>
                <Avatar
                  sx={{
                    width: 40,
                    height: 40,
                    color: 'text.secondary',
                    bgcolor: 'background.neutral'
                  }}
                >
                  <AccountBalance width={25} height={25} />
                </Avatar>
                <Box
                  sx={{
                    right: 0,
                    bottom: 0,
                    width: 15,
                    height: 15,
                    display: 'flex',
                    borderRadius: '50%',
                    position: 'absolute',
                    alignItems: 'center',
                    color: 'common.white',
                    bgcolor: 'error.main',
                    justifyContent: 'center',
                    ...(approved && {
                      bgcolor: 'success.main'
                    })
                  }}
                >
                  {approved ? <Check sx={{ width: 12, height: 12 }} /> : <Clear sx={{ width: 12, height: 12 }} />}
                </Box>
              </Box>
              <Box sx={{ ml: 2 }}>
                <Typography variant="subtitle2"> {rowData?.description}</Typography>
                <Typography variant="body2" sx={{ color: approved ? 'success.main' : 'error.main' }}>
                  {approved ? 'Aprobada' : 'No Aprobada'}
                </Typography>
              </Box>
            </Box>
          )
        }
      }
    },
    {
      name: 'cardType',
      label: 'Tarjeta',

      options: {
        filterOptions: { fullWidth: true },
        customBodyRenderLite: (dataIndex, rowIndex) => {
          const rowData = movements[dataIndex]
          return <Typography variant="body2">{rowData?.cardType}</Typography>
        }
      }
    },
    {
      name: 'authNumber',
      label: 'Autorización',

      options: {
        filterType: 'textField',
        customBodyRenderLite: (dataIndex, rowIndex) => {
          const rowData = movements[dataIndex]

          return <Typography variant="subtitle2">{rowData?.authNumber}</Typography>
        }
      }
    },
    {
      name: 'referenceNumber',
      label: 'Referencia',

      options: {
        filterType: 'textField',
        customBodyRenderLite: (dataIndex, rowIndex) => {
          const rowData = movements[dataIndex]

          return <Typography variant="subtitle2">{rowData?.referenceNumber}</Typography>
        }
      }
    },
    {
      name: 'transactionDate.fullDate',
      label: 'Fecha',

      options: {
        filterType: 'textField',
        filterOptions: { fullWidth: true },
        customBodyRenderLite: (dataIndex, rowIndex) => {
          const row = movements[dataIndex]
          return (
            <Stack>
              <Typography variant="subtitle2">{row?.transactionDate?.date}</Typography>
              <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                {row?.transactionDate?.time}
              </Typography>
            </Stack>
          )
        }
      }
    },
    {
      name: 'amountFormat',
      label: 'Cantidad',

      options: {
        filterType: 'textField',
        filterOptions: { fullWidth: true },
        customBodyRenderLite: (dataIndex, rowIndex) => {
          const rowData = movements[dataIndex]

          return (
            <Typography variant="subtitle2" fontWeight="bold">
              {rowData?.amountFormat}
            </Typography>
          )
        }
      }
    }
  ]

  return (
    <Card>
      <CardFilterMovements currentMonth={currentMonth} setCurrentMonth={setCurrentMonth} isLoading={isFetching} />
      <Divider sx={{ borderStyle: 'dashed' }} />
      <DataTable
        title={'Movimientos'}
        data={movements || []}
        columns={columns}
        isLoading={isFetching}
        options={{
          responsive: 'simple',
          rowHover: true,
          selectableRows: 'none',
          selectableRowsOnClick: false,
          selectToolbarPlacement: 'replace',
          sortOrder: {
            name: 'date',
            direction: 'desc'
          },
          downloadOptions: {
            filename: `movimientos_terminal_${terminal?.name}.csv`,
            filterOptions: {
              useDisplayedColumnsOnly: false // it was true
            }
          }
        }}
      />
    </Card>
  )
}
