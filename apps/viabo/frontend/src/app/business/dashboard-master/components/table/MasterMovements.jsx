import { lazy, useEffect, useMemo, useRef, useState } from 'react'

import { Check } from '@mui/icons-material'
import { Box, Button, Card, Divider, FormLabel, MenuItem, Stack, Typography } from '@mui/material'
import { MobileDatePicker } from '@mui/x-date-pickers'
import { endOfMonth, startOfMonth } from 'date-fns'
import { BiBlock } from 'react-icons/bi'
import { BsPatchCheck } from 'react-icons/bs'
import { LuReceipt } from 'react-icons/lu'
import { toast } from 'react-toastify'

import { useFindMasterMovements } from '@/app/business/dashboard-master/hooks'
import { useMasterGlobalStore } from '@/app/business/dashboard-master/store'
import { MovementDescriptionColumn } from '@/app/business/shared/components/card-movements/columns'
import { getOperationTypeByName } from '@/app/shared/services'
import { MaterialDataTable } from '@/shared/components/dataTables'
import { Lodable } from '@/shared/components/lodables'
import { fCurrency } from '@/shared/utils'

const VerifyExpensesDrawer = Lodable(
  lazy(() => import('@/app/business/shared/components/card-movements/verify-expenses/VerifyExpensesDrawer'))
)

export function MasterMovements() {
  const currentDate = new Date()
  const initialStartDate = startOfMonth(currentDate)
  const initialEndDate = endOfMonth(currentDate)
  const [startDate, setStartDate] = useState(initialStartDate)
  const [endDate, setEndDate] = useState(initialEndDate)
  const filterPaymentProcessor = useMasterGlobalStore(state => state.filterPaymentProcessor)
  const setMovements = useMasterGlobalStore(state => state.setMovements)
  const movements = useMasterGlobalStore(state => state.movements)

  const table = useRef(null)
  const [openVerifyExpenses, setOpenVerifyExpenses] = useState(false)

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
        size: 200,
        Cell: ({ cell, column, row }) => {
          const { original: rowData } = row
          return <MovementDescriptionColumn row={rowData} />
        }
      },
      {
        accessorKey: 'serverDate', // normal accessorKey
        header: 'Fecha',
        size: 120,
        Cell: ({ cell, column, row }) => {
          const { original: rowData } = row
          return (
            <Stack>
              <Typography variant="subtitle2">{rowData?.fullDate}</Typography>
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
        accessorKey: 'amount',
        header: 'Monto',
        size: 100,
        Cell: ({ cell, column, row }) => {
          const { original: rowData } = row
          const isIncome = rowData?.type === 'ingreso'
          const isViaboPay = rowData?.type === 'terminal'
          return (
            <Typography variant="subtitle2" fontWeight="bold" color={isIncome || isViaboPay ? 'success.main' : 'error'}>
              {isIncome || isViaboPay ? `+ ${rowData?.amountFormat}` : `- ${rowData?.amountFormat}`}
            </Typography>
          )
        }
      },
      {
        accessorKey: 'verified',
        header: 'Comprobación',
        size: 100,
        Cell: ({ cell, column, row }) => {
          const { original: rowData } = row
          return (
            <Stack
              flexDirection={'row'}
              width={1}
              justifyContent={'center'}
              alignItems={'center'}
              gap={1}
              mr={2}
              color={'primary'}
            >
              {rowData?.verified ? (
                <BsPatchCheck color="green" fontWeight={'bold'} fontSize={'18px'} />
              ) : (
                <BiBlock fontSize={'18px'} color="red" />
              )}
            </Stack>
          )
        }
      }
    ],
    []
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

  const handleValidateExpenses = table => () => {
    const movements = table?.getSelectedRowModel().flatRows?.map(row => row.original) ?? []
    const someHasVerified = movements?.some(movement => movement?.verified)
    const someHasDifferentOperationType = movements?.some(movement => movement?.operationType !== 'OTROS CARGOS')
    if (someHasVerified) {
      return toast.warn(
        'Existen movimientos que ya se encuentran comprobados, verifique los movimientos seleccionados.'
      )
    }
    if (someHasDifferentOperationType) {
      return toast.warn('Existen movimientos que no se pueden comprobar, verifique el tipo de movimiento.')
    }
    return setOpenVerifyExpenses(true)
  }

  return (
    <>
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
          tableInstanceRef={table}
          initialState={{
            density: 'compact',
            sorting: [
              {
                id: 'serverDate',
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
          renderTopToolbarCustomActions={({ table }) => (
            <Box sx={{ display: 'flex', gap: '1rem' }}>
              <Button
                onClick={handleValidateExpenses(table)}
                disabled={!table.getIsSomeRowsSelected()}
                startIcon={<Check width={24} height={24} />}
                variant="outlined"
              >
                Comprobar
              </Button>
            </Box>
          )}
          renderRowActionMenuItems={({ row }) => [
            <MenuItem key="conciliation" onClick={() => console.info('conciliation')}>
              Conciliación
            </MenuItem>,
            <MenuItem key="incidence" onClick={() => console.info('incidence')}>
              Incidencia
            </MenuItem>,
            <MenuItem key="communication" onClick={() => console.info('communication')}>
              Comunicación
            </MenuItem>,
            <MenuItem key="tag" onClick={() => console.info('tag')}>
              Tag
            </MenuItem>
          ]}
        />
      </Card>
      <VerifyExpensesDrawer
        open={openVerifyExpenses}
        setOpen={setOpenVerifyExpenses}
        movements={table.current?.getSelectedRowModel().flatRows?.map(row => row.original) ?? []}
      />
    </>
  )
}
