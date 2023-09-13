import { useEffect, useMemo, useState } from 'react'

import { AccountBalance, Contactless, NorthEast, SouthWest } from '@mui/icons-material'
import { Avatar, Box, Card, Divider, FormLabel, MenuItem, Stack, Typography } from '@mui/material'
import { MobileDatePicker } from '@mui/x-date-pickers'
import { endOfMonth, startOfMonth } from 'date-fns'
import { LuReceipt } from 'react-icons/lu'

import { useFindMasterMovements } from '@/app/business/dashboard-master/hooks'
import { useMasterGlobalStore } from '@/app/business/dashboard-master/store'
import { getCardTypeByName, getOperationTypeByName } from '@/app/shared/services'
import { MaterialDataTable } from '@/shared/components/dataTables'
import { fCurrency } from '@/shared/utils'

export function MasterMovements() {
  const currentDate = new Date()
  const initialStartDate = startOfMonth(currentDate)
  const initialEndDate = endOfMonth(currentDate)
  const [startDate, setStartDate] = useState(initialStartDate)
  const [endDate, setEndDate] = useState(initialEndDate)
  const filterPaymentProcessor = useMasterGlobalStore(state => state.filterPaymentProcessor)
  const setMovements = useMasterGlobalStore(state => state.setMovements)
  const movements = useMasterGlobalStore(state => state.movements)

  const { data, isError, isLoading, isFetching, error, refetch } = useFindMasterMovements(startDate, endDate)

  useEffect(() => {
    if (startDate && endDate) {
      refetch()
    }
  }, [startDate, endDate])

  useEffect(() => {
    if (filterPaymentProcessor) {
      let expenses = 0
      let income = 0
      const filterMovements = data?.movements?.filter(
        movement => movement?.paymentProcessor?.toLowerCase() === filterPaymentProcessor?.toLowerCase()
      )

      filterMovements?.forEach(movement => {
        movement?.type.toLowerCase() === 'gasto' ? (expenses += movement?.amount) : (income += movement?.amount)
      })
      setMovements({
        movements: filterMovements,
        income: fCurrency(income),
        expenses: fCurrency(expenses),
        balanceMovements: fCurrency(income - expenses)
      })
    } else {
      setMovements(data)
    }
  }, [filterPaymentProcessor, data])

  const columns = useMemo(
    () => [
      {
        accessorKey: 'description', // access nested data with dot notation
        header: 'Movimiento',
        enableHiding: false,
        minSize: 300,
        Cell: ({ cell, column, row }) => {
          const { original: rowData } = row
          const isIncome = rowData?.type === 'ingreso'
          const isViaboPay = rowData?.type === 'terminal'
          const cardLogo = getCardTypeByName(rowData?.paymentProcessor)
          const CardLogoComponent = cardLogo?.component
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
                  {cardLogo ? (
                    <CardLogoComponent sx={{ width: 25, height: 25 }} />
                  ) : isViaboPay ? (
                    <Contactless color="primary" width={24} height={24} />
                  ) : (
                    <AccountBalance width={24} height={24} />
                  )}
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
                    ...((isIncome || isViaboPay) && {
                      bgcolor: 'success.main'
                    })
                  }}
                >
                  {isIncome || isViaboPay ? (
                    <SouthWest sx={{ width: 10, height: 10 }} />
                  ) : (
                    <NorthEast sx={{ width: 10, height: 10 }} />
                  )}
                </Box>
              </Box>
              <Stack flexWrap={'wrap'} sx={{ ml: 2 }}>
                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                  {isIncome || isViaboPay ? 'Recibe dinero de: ' : 'Retiro de dinero en:'}
                </Typography>
                <Typography variant="subtitle2" sx={{ textWrap: 'wrap' }}>
                  {rowData?.description}
                </Typography>
                {rowData?.concept !== '' && (
                  <Typography variant="overline" color={'text.disabled'} fontStyle={'italic'} sx={{ textWrap: 'wrap' }}>
                    concepto : {rowData?.concept}
                  </Typography>
                )}
              </Stack>
            </Box>
          )
        }
      },
      {
        accessorKey: 'date', // normal accessorKey
        header: 'Fecha',
        size: 100,
        Cell: ({ cell, column, row }) => {
          const { original: rowData } = row
          return (
            <Stack>
              <Typography variant="subtitle2">{rowData?.date}</Typography>
              <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                {rowData?.time}
              </Typography>
            </Stack>
          )
        }
      },
      {
        accessorKey: 'operationType',
        header: 'Tipo',
        filterVariant: 'multi-select',
        size: 100,
        Cell: ({ cell, column, row }) => {
          const { original: rowData } = row
          const operationLogo = getOperationTypeByName(rowData?.operationType)
          const OperationLogoComponent = operationLogo?.component
          return (
            <Box>
              {operationLogo ? <OperationLogoComponent sx={{ width: 25, height: 25 }} /> : <LuReceipt size={22} />}
            </Box>
          )
        }
      },
      {
        accessorKey: 'amountFormatted',
        header: 'Monto',
        size: 100,
        Cell: ({ cell, column, row }) => {
          const { original: rowData } = row
          const isIncome = rowData?.type === 'ingreso'
          const isViaboPay = rowData?.type === 'terminal'
          return (
            <Typography variant="subtitle2" fontWeight="bold" color={isIncome || isViaboPay ? 'success.main' : 'error'}>
              {isIncome || isViaboPay ? `+ ${rowData?.amountFormatted}` : `- ${rowData?.amountFormatted}`}
            </Typography>
          )
        }
      }
    ],
    [data]
  )

  const handleStartDateChange = date => {
    if (endDate !== null && date > endDate) {
      setEndDate(date)
    }
    setStartDate(date)
  }

  const handleEndDateChange = date => {
    if (startDate !== null && date < startDate) {
      setStartDate(date)
    }
    setEndDate(date)
  }

  return (
    <Card>
      <Stack p={2} direction={'row'} justifyContent={'center'} alignItems={'center'} spacing={2}>
        <MobileDatePicker
          size="small"
          value={startDate}
          onChange={handleStartDateChange}
          maxDate={endDate}
          slotProps={{
            textField: {
              size: 'small',
              required: true
            }
          }}
          disabled={isFetching}
          format="dd MMMM yyyy"
        />
        <FormLabel>-</FormLabel>
        <MobileDatePicker
          size="small"
          value={endDate}
          onChange={handleEndDateChange}
          minDate={startDate}
          slotProps={{
            textField: {
              size: 'small',
              required: true
            }
          }}
          disabled={isFetching}
          format="dd MMMM yyyy"
        />
      </Stack>
      <Divider sx={{ borderStyle: 'dashed' }} />

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
        data={movements || []}
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
            size: 80 // make actions column wider
          },
          'mrt-row-select': {
            size: 10
          }
        }}
        muiTableContainerProps={{ sx: { maxHeight: { md: '350px', lg: '450px', xl: '700px' } } }}
        renderRowActionMenuItems={({ row }) => [
          <MenuItem key="concilation" onClick={() => console.info('Edit')}>
            Conciliación
          </MenuItem>,
          <MenuItem key="incidence" onClick={() => console.info('Delete')}>
            Incidendencia
          </MenuItem>,
          <MenuItem key="comunication" onClick={() => console.info('Delete')}>
            Comunicación
          </MenuItem>,
          <MenuItem key="tag" onClick={() => console.info('Delete')}>
            Tag
          </MenuItem>
        ]}
      />
    </Card>
  )
}
