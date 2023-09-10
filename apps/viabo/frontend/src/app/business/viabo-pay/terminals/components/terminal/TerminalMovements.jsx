import { useEffect, useMemo, useState } from 'react'

import { AccountBalance, Check, Clear } from '@mui/icons-material'
import { Avatar, Box, Card, Divider, Stack, Tooltip, Typography } from '@mui/material'
import { isArray } from 'lodash'

import TerminalFilterCardType from './TerminalFilterCardType'
import TerminalFilterStatus from './TerminalFilterStatus'

import { useFindTerminalMovements } from '../../hooks'
import { useTerminalDetails, useTerminals } from '../../store'

import { CardFilterMovements } from '@/app/business/viabo-card/cards/components/details/CardFilterMovements'
import { getCardTypeByName } from '@/app/shared/services'
import { DataTable } from '@/shared/components/dataTables'
import { useTabs } from '@/shared/hooks'
import { fCurrency, monthOptions } from '@/shared/utils'

export const TerminalMovements = () => {
  const [currentMonth, setCurrentMonth] = useState(new Date())

  const terminal = useTerminalDetails(state => state.terminal)

  const setBalance = useTerminals(state => state.setBalance)
  const setGlobalBalance = useTerminals(state => state.setGlobalBalance)

  const { data, isFetching, refetch } = useFindTerminalMovements(terminal?.terminalId, currentMonth, { enabled: false })

  const { currentTab: filterStatus, onChangeTab: onChangeFilterStatus } = useTabs('Todos')

  const [filterCardType, setFilterCardType] = useState([])

  const { movements, amount } = useMemo(
    () =>
      applyFilter({
        movements: data?.movements || [],
        filterCardType,
        filterStatus
      }),
    [data?.movements, filterCardType, filterStatus]
  )

  const columns = [
    {
      name: 'description',
      label: 'Movimiento',

      options: {
        filterType: 'textField',
        filterOptions: { fullWidth: true },
        customBodyRenderLite: (dataIndex, rowIndex) => {
          const rowData = movements[dataIndex]
          const approved = rowData?.approved
          const cardLogo = getCardTypeByName(rowData?.cardType)
          const CardLogoComponent = cardLogo?.component
          return (
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <Box sx={{ position: 'relative' }}>
                <Tooltip title={rowData?.cardType}>
                  <Avatar
                    sx={{
                      width: 40,
                      height: 40,
                      color: 'text.secondary',
                      bgcolor: 'background.neutral'
                    }}
                  >
                    {cardLogo ? (
                      <CardLogoComponent sx={{ width: 25, height: 25 }} />
                    ) : (
                      <AccountBalance width={25} height={25} />
                    )}
                  </Avatar>
                </Tooltip>
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
                <Typography
                  variant="body2"
                  textTransform={'capitalize'}
                  sx={{ color: approved ? 'success.main' : 'error.main' }}
                >
                  {rowData?.transactionMessage}
                </Typography>
              </Box>
            </Box>
          )
        }
      }
    },
    ...(terminal
      ? []
      : [
          {
            name: 'terminalName',
            label: 'Terminal',

            options: {
              filterOptions: { fullWidth: true },
              customBodyRenderLite: (dataIndex, rowIndex) => {
                const rowData = movements[dataIndex]

                return (
                  <Typography variant="subtitle2" fontWeight="bold">
                    {rowData?.terminalName}
                  </Typography>
                )
              }
            }
          }
        ]),
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
      label: 'Monto',

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

  const handleChange = event => {
    const {
      target: { value }
    } = event
    setFilterCardType(typeof value === 'string' ? value.split(',') : value)
  }

  useEffect(() => {
    refetch()
  }, [currentMonth])

  useEffect(() => {
    setCurrentMonth(new Date())
  }, [terminal])

  useEffect(() => {
    if (amount && terminal && currentMonth) {
      setBalance({ month: monthOptions[currentMonth.getMonth()], amount })
    }
    if (amount && !terminal && currentMonth) {
      setGlobalBalance({ month: monthOptions[currentMonth.getMonth()], amount })
    }
  }, [amount, terminal, currentMonth])

  return (
    <Card>
      <TerminalFilterStatus
        filterStatus={filterStatus}
        onChangeFilterStatus={onChangeFilterStatus}
        filters={data?.filters}
      />
      <Divider sx={{ borderStyle: 'dashed' }} />
      <Stack
        direction={'row'}
        alignItems={'center'}
        flexWrap={'wrap'}
        justifyContent={'center'}
        flex={1}
        spacing={2}
        px={2}
        py={1}
      >
        <TerminalFilterCardType cardType={filterCardType} handleChangeCardType={handleChange} isLoading={isFetching} />

        <Stack flexGrow={1}>
          <CardFilterMovements currentMonth={currentMonth} setCurrentMonth={setCurrentMonth} isLoading={isFetching} />
        </Stack>
      </Stack>
      <Divider sx={{ borderStyle: 'dashed' }} />
      <Stack position={'relative'}>
        <DataTable
          title={`${terminal ? terminal?.name : 'Global'}`}
          data={movements || []}
          columns={columns}
          isLoading={isFetching}
          options={{
            responsive: 'simple',
            rowHover: true,
            selectableRows: 'none',
            selectableRowsOnClick: false,
            selectToolbarPlacement: 'replace',
            rowsPerPage: 100,
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
      </Stack>
    </Card>
  )
}

function applyFilter({ movements, filterCardType, filterStatus }) {
  const stabilizedThis = movements?.map((el, index) => [el, index]) || []
  let amount = 0

  let tableData = stabilizedThis.map(el => el[0])

  if (filterStatus !== 'Todos') {
    tableData = tableData.filter(item => item.approved === (filterStatus === 'Aprobado'))
  }

  if (isArray(filterCardType) && filterCardType?.length > 0) {
    tableData = tableData.filter(item => filterCardType.includes(item?.cardType?.toUpperCase()))
  }

  amount = tableData.reduce((accumulator, transaction) => {
    if (transaction.approved) {
      const transactionAmount = parseFloat(transaction.amount)
      return accumulator + transactionAmount
    }
    return accumulator
  }, 0)

  return {
    movements: tableData ?? [],
    amount: fCurrency(amount.toFixed(2))
  }
}
