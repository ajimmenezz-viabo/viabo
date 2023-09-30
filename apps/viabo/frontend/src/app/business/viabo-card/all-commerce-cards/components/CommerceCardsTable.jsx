/* eslint-disable react/prop-types */
import { useEffect, useMemo, useState } from 'react'

import PropTypes from 'prop-types'

import { AssignmentIndRounded, ClearTwoTone, Done, FileDownload } from '@mui/icons-material'
import { Box, Button, Card, IconButton, Stack, Tooltip, Typography, alpha } from '@mui/material'
import { toast } from 'react-toastify'

import { useCommerceCards } from '../store'

import {
  FiltersAction,
  FullScreenAction,
  MaterialDataTable,
  SearchAction,
  ShowHideColumnsAction
} from '@/shared/components/dataTables'
import { CarnetLogo, MasterCardLogo } from '@/shared/components/images'
import { generateCSVFile } from '@/shared/utils'

export const CommerceCardsTable = ({ cards, rows }) => {
  const { data, isLoading, isFetching, isError, error } = cards

  const setOpenAssign = useCommerceCards(state => state.setOpenAssign)
  const setAllCards = useCommerceCards(state => state.setAllCards)
  const selectedCards = useCommerceCards(state => state.cards)
  const setIndexCards = useCommerceCards(state => state.setIndexCards)

  const rowsSelectedFormatted = useMemo(
    () =>
      rows?.reduce((acc, indice) => {
        acc[indice] = true
        return acc
      }, {}) || {},
    [rows]
  )

  const [rowSelection, setRowSelection] = useState(rowsSelectedFormatted)

  const columns = useMemo(
    () => [
      {
        accessorKey: 'cardNumber', // access nested data with dot notation
        header: 'Tarjeta',
        enableClickToCopy: true,
        enableHiding: false,
        Cell: ({ cell, column, row }) => {
          const { original: dataRow } = row
          return (
            <Typography variant="subtitle2" fontWeight="bold" noWrap>
              {dataRow?.cardNumberHidden}
            </Typography>
          )
        }
      },
      {
        accessorKey: 'cardType',
        header: 'Tipo',
        size: 100,
        filterVariant: 'multi-select',
        enableColumnFilterModes: false,
        Cell: ({ cell, column, row }) => {
          const { original: dataRow } = row
          return (
            <Stack flexDirection={'row'} alignItems={'center'} gap={1}>
              {dataRow?.cardType === 'Carnet' ? (
                <CarnetLogo sx={{ width: 25, height: 25 }} />
              ) : (
                <MasterCardLogo sx={{ width: 25, height: 25 }} />
              )}
            </Stack>
          )
        }
      },
      {
        accessorKey: 'expiration', // normal accessorKey
        header: 'Vence',
        size: 100
      },
      {
        accessorKey: 'emptyCVV',
        header: 'CVV',
        filterVariant: 'select',
        enableColumnFilterModes: false,
        size: 100,
        Cell: ({ cell, column, row }) => {
          const { original: dataRow } = row
          if (dataRow?.cvv === '' || !dataRow?.cvv) {
            return <ClearTwoTone color={'error'} />
          }
          return <Done color={'success'} />
        }
      },
      {
        accessorFn: originalRow => originalRow?.assignUser?.name,
        header: 'Asignado',
        size: 150
      },
      {
        accessorFn: originalRow => originalRow?.assignUser?.dateTime,
        header: 'Fecha de Asignación',
        size: 150
      },
      {
        accessorKey: 'register',
        header: 'Fecha de Registro',
        size: 150
      }
    ],
    []
  )

  useEffect(() => {
    if (rowSelection && data) {
      const rowsSelected = Object.keys(rowSelection)
      const selectedCards = data?.filter((valor, index) => rowsSelected.includes(index.toString()))
      setAllCards(selectedCards)
      setIndexCards(rowsSelected)
    }
  }, [rowSelection, data])

  const handleValidateCards = () => {
    const someWithoutCVV = selectedCards.some(card => card?.cvv === '') && selectedCards?.length > 1
    const someAssigned = selectedCards.some(card => card?.assignUser?.id !== '')

    const allEmptyCVV = selectedCards.every(card => card?.cvv === '') && selectedCards?.length > 1

    if (allEmptyCVV) {
      toast.warn('Las tarjetas seleccionadas no tiene cvv , debe asignar una por una')
    } else if (someWithoutCVV) {
      toast.warn('Existe al menos una tarjeta seleccionada que no tiene cvv')
    } else if (someAssigned) {
      toast.warn('Existe al menos una tarjeta seleccionada que ya esta asignada')
    } else {
      setOpenAssign(true)
    }
  }

  const handleExportRows = table => {
    try {
      const filterData =
        table.getSortedRowModel().rows.map(row => columns?.map(c => row.getValue(c.accessorKey)) || []) ?? []
      generateCSVFile(columns?.map(c => c.header) || [], filterData, 'Stock del comercio')
    } catch {}
  }

  return (
    <Card>
      <MaterialDataTable
        enablePinning
        enableColumnDragging
        enableColumnOrdering
        enableColumnFilterModes
        enableStickyHeader
        enableRowVirtualization
        enableFacetedValues
        enableDensityToggle={false}
        columns={columns}
        data={data || []}
        isError={isError}
        textError={error}
        selectAllMode={'all'}
        onRowSelectionChange={setRowSelection}
        initialState={{
          density: 'compact',
          sorting: [
            {
              id: 'register',
              desc: true
            }
          ]
        }}
        state={{
          isLoading,
          showAlertBanner: isError,
          showProgressBars: isFetching,
          rowSelection: rowSelection ?? {}
        }}
        enableRowSelection={row => {
          const { assignUser } = row.original
          return assignUser?.id === ''
        }}
        muiTableContainerProps={{ sx: { maxHeight: { md: '350px', lg: '450px', xl: '700px' } } }}
        muiSelectCheckboxProps={({ row }) => {
          const { assignUser } = row.original
          return {
            disabled: assignUser?.id !== '',
            sx: {
              display: assignUser?.id !== '' ? 'none' : 'flex'
            }
          }
        }}
        muiTableBodyRowProps={({ row }) => {
          const { assignUser } = row.original
          return {
            onClick: row.getToggleSelectedHandler(),
            sx: theme => ({
              cursor: assignUser?.id !== '' ? 'inherit' : 'pointer',
              backgroundColor: theme.palette.background.paper,
              '&.Mui-selected': {
                backgroundColor: theme.palette.action.selected,
                '&:hover': {
                  backgroundColor: theme.palette.action.hover
                }
              }
            })
          }
        }}
        muiTableBodyCellProps={({ row }) => {
          const { assignUser } = row.original
          return {
            sx: theme => ({
              backgroundColor:
                assignUser?.id !== '' && !isLoading ? alpha(theme.palette.success.lighter, 0.2) : 'inherit',
              borderBottom: `dashed 1px ${theme.palette.divider}`
            })
          }
        }}
        renderTopToolbarCustomActions={({ table }) => (
          <Box sx={{ display: 'flex', gap: '1rem' }}>
            <Button
              onClick={handleValidateCards}
              disabled={!table.getIsSomeRowsSelected()}
              startIcon={<AssignmentIndRounded width={24} height={24} />}
            >
              Asociar
            </Button>
          </Box>
        )}
        renderToolbarInternalActions={({ table }) => (
          <Box>
            <SearchAction table={table} />
            <Tooltip title="Descargar">
              <IconButton
                disabled={table.getPrePaginationRowModel().rows.length === 0}
                onClick={() => handleExportRows(table)}
              >
                <FileDownload />
              </IconButton>
            </Tooltip>

            <FiltersAction table={table} />
            <ShowHideColumnsAction table={table} />
            <FullScreenAction table={table} />
          </Box>
        )}
      />
    </Card>
  )
}

CommerceCardsTable.propTypes = {
  cards: PropTypes.shape({
    data: PropTypes.array,
    error: PropTypes.any,
    isError: PropTypes.any,
    isFetching: PropTypes.any,
    isLoading: PropTypes.any
  })
}
