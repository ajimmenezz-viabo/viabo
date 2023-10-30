import { lazy, useEffect, useMemo, useRef, useState } from 'react'

import { Check } from '@mui/icons-material'
import { Box, Button, Card, Divider, FormLabel, MenuItem, Stack, Typography } from '@mui/material'
import { MobileDatePicker } from '@mui/x-date-pickers'
import { endOfMonth, startOfMonth } from 'date-fns'
import { BiBlock } from 'react-icons/bi'
import { BsPatchCheck } from 'react-icons/bs'
import { toast } from 'react-toastify'

import { MovementDescriptionColumn } from '@/app/business/shared/components/card-movements/columns'
import { useFindCardMovements } from '@/app/business/viabo-card/cards/hooks/useFindCardMovements'
import { useCommerceDetailsCard } from '@/app/business/viabo-card/cards/store'
import { MaterialDataTable } from '@/shared/components/dataTables'
import { Lodable } from '@/shared/components/lodables'
import { fDate } from '@/shared/utils'

const TransactionReport = Lodable(
  lazy(() => import('@/app/business/viabo-card/cards/components/details/incidence/TransactionReport'))
)

const VerifyExpensesDrawer = Lodable(
  lazy(() => import('@/app/business/shared/components/card-movements/verify-expenses/VerifyExpensesDrawer'))
)

export function CardMovements() {
  const [openReport, setOpenReport] = useState(false)
  const [openVerifyExpenses, setOpenVerifyExpenses] = useState(false)
  const [selectedMovement, setSelectedMovement] = useState(null)
  const table = useRef(null)

  const currentDate = new Date()
  const initialStartDate = startOfMonth(currentDate)
  const initialEndDate = endOfMonth(currentDate)
  const [startDate, setStartDate] = useState(initialStartDate)
  const [endDate, setEndDate] = useState(initialEndDate)

  const card = useCommerceDetailsCard(state => state.card)
  const addInfoCard = useCommerceDetailsCard(state => state.addInfoCard)

  const { data, isLoading, refetch, remove, isFetching, isError, error } = useFindCardMovements(
    card?.id,
    startDate,
    endDate,
    {
      enabled: false
    }
  )

  const movements = data?.movements || []

  const columns = useMemo(
    () => [
      {
        accessorKey: 'description', // access nested data with dot notation
        header: 'Movimiento',
        enableHiding: false,
        minSize: 200,
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
        size: 80,
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

  useEffect(() => {
    if (startDate && endDate) {
      refetch()
    }
  }, [startDate, endDate])

  useEffect(() => {
    setStartDate(initialStartDate)
    setEndDate(initialEndDate)
  }, [card?.id])

  useEffect(() => {
    if (data) {
      const month = `${fDate(startDate)} - ${fDate(endDate)}` ?? null
      addInfoCard({ ...data, monthBalance: month })
    }
  }, [data, card?.id, startDate, endDate])

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
    const someHasDifferentOperationType = movements?.some(movement => movement?.operationType !== 'OTROS CARGOS')
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
          tableInstanceRef={table}
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
          renderRowActionMenuItems={({ row, closeMenu }) => [
            <MenuItem
              key="incidence"
              onClick={() => {
                const { original: rowData } = row
                setSelectedMovement(rowData)
                closeMenu()
                setOpenReport(true)
              }}
            >
              Incidencia
            </MenuItem>
          ]}
        />
      </Card>

      <TransactionReport open={openReport} setOpen={setOpenReport} selectedMovement={selectedMovement} />
      <VerifyExpensesDrawer
        open={openVerifyExpenses}
        setOpen={setOpenVerifyExpenses}
        movements={table.current?.getSelectedRowModel().flatRows?.map(row => row.original) ?? []}
      />
    </>
  )
}