import { useEffect, useMemo, useState } from 'react'

import { Card, Divider, FormLabel, IconButton, Link, Stack, Typography } from '@mui/material'
import { MobileDatePicker } from '@mui/x-date-pickers'
import { endOfMonth, startOfMonth } from 'date-fns'
import { BiBlock } from 'react-icons/bi'
import { BsFiletypePdf, BsFiletypeXml, BsPatchCheck } from 'react-icons/bs'
import { PiFilesBold } from 'react-icons/pi'

import { useFindExpensesMovementsFromCommerceCards } from '../hooks'

import { getCardTypeByName } from '@/app/shared/services'
import { MaterialDataTable } from '@/shared/components/dataTables'

export const ExpensesTable = () => {
  const currentDate = new Date()
  const initialStartDate = startOfMonth(currentDate)
  const initialEndDate = endOfMonth(currentDate)
  const [startDate, setStartDate] = useState(initialStartDate)
  const [endDate, setEndDate] = useState(initialEndDate)

  const { data, isError, isLoading, isFetching, error, refetch } = useFindExpensesMovementsFromCommerceCards(
    startDate,
    endDate
  )

  const handleDownloadAllFiles = row => () => {
    row?.expensesControl?.otherFiles?.forEach(fileURL => {
      window.open(fileURL, '_blank').focus()
    })
  }

  useEffect(() => {
    if (startDate && endDate) {
      refetch()
    }
  }, [startDate, endDate])

  const columns = useMemo(
    () => [
      {
        accessorKey: 'cardNumber', // access nested data with dot notation
        header: 'Tarjeta',
        enableHiding: false,
        size: 150,
        Cell: ({ cell, column, row }) => {
          const { original: rowData } = row
          const isMainCard = rowData?.isMainCard

          const cardLogo = getCardTypeByName(rowData?.paymentProcessor)
          const CardLogoComponent = cardLogo?.component
          return (
            <Stack direction={'row'} spacing={1} alignItems={'center'}>
              {cardLogo && <CardLogoComponent sx={{ width: 30, height: 30 }} />}
              <Typography variant="subtitle2" fontWeight="bold" noWrap>
                {isMainCard ? rowData?.cardNumber : rowData?.cardNumber?.substr(rowData?.cardNumber?.length - 4)}
              </Typography>
            </Stack>
          )
        }
      },
      {
        accessorKey: 'ownerCard', // normal accessorKey
        header: 'Tarjetahabiente',
        filterVariant: 'multi-select',
        size: 150,
        Cell: ({ cell, column, row }) => {
          const { original: rowData } = row
          return (
            <Stack>
              <Typography variant="subtitle2">{rowData?.ownerCard}</Typography>
            </Stack>
          )
        }
      },
      {
        accessorKey: 'description',
        header: 'Movimiento',
        minSize: 120,
        Cell: ({ cell, column, row }) => {
          const { original: rowData } = row
          return (
            <Stack>
              <Typography variant="subtitle2">{rowData?.description}</Typography>
            </Stack>
          )
        }
      },
      {
        accessorKey: 'fullDate', // normal accessorKey
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
      },
      {
        accessorKey: 'files',
        header: 'Archivos',
        size: 100,
        enableFilters: false,
        enableColumnFilter: false,
        Cell: ({ cell, column, row }) => {
          const { original: rowData } = row
          return (
            <Stack flexDirection={'row'} color={'primary'}>
              {rowData?.expensesControl?.isInvoice && (
                <Stack direction={'row'} spacing={0.5}>
                  <IconButton
                    title="Descargar PDF"
                    LinkComponent={Link}
                    href={rowData?.expensesControl?.invoiceFiles?.pdf}
                    target="_blank"
                    color={'error'}
                  >
                    <BsFiletypePdf fontSize={'18px'} />
                  </IconButton>
                  <IconButton
                    title="Descargar XML"
                    LinkComponent={Link}
                    href={rowData?.expensesControl?.invoiceFiles?.xml}
                    target="_blank"
                    color="info"
                  >
                    <BsFiletypeXml fontSize={'18px'} />
                  </IconButton>
                </Stack>
              )}

              {!rowData?.expensesControl?.isInvoice && rowData?.expensesControl?.otherFiles?.length > 0 && (
                <IconButton color={'primary'} title="Descargar Archivos" onClick={handleDownloadAllFiles(rowData)}>
                  <PiFilesBold fontSize={'20px'} />
                </IconButton>
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
          enableColumnPinning
          enableStickyHeader
          enableRowVirtualization
          enableFacetedValues
          enableRowSelection
          positionActionsColumn="last"
          enableDensityToggle={false}
          columns={columns}
          data={data?.movements || []}
          isError={isError}
          textError={error}
          selectAllMode={'all'}
          initialState={{
            density: 'compact',
            sorting: [
              {
                id: 'fullDate',
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
          muiTableBodyRowProps={({ row }) => ({
            sx: theme => ({
              backgroundColor: theme.palette.background.paper,
              '&.Mui-selected': {
                backgroundColor: theme.palette.action.selected,
                '&:hover': {
                  backgroundColor: theme.palette.action.hover
                }
              }
            })
          })}
          muiTableContainerProps={{ sx: { maxHeight: { md: '350px', lg: '450px', xl: '700px' } } }}
        />
      </Card>
    </>
  )
}
