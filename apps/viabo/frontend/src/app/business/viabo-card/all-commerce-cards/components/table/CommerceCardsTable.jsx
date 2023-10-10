/* eslint-disable react/prop-types */
import { useMemo, useState } from 'react'

import { AssignmentIndRounded, FileDownload } from '@mui/icons-material'
import RefreshIcon from '@mui/icons-material/Refresh'
import { Box, Button, Card, IconButton, Tooltip } from '@mui/material'
import { toast } from 'react-toastify'

import { CommerceCardsColumns } from './CommerceCardsColumns'

import { useFindAllCommerceCards } from '../../hooks'
import { useCommerceCards } from '../../store'

import {
  FiltersAction,
  FullScreenAction,
  MaterialDataTable,
  SearchAction,
  ShowHideColumnsAction
} from '@/shared/components/dataTables'
import { generateCSVFile } from '@/shared/utils'

export const CommerceCardsTable = ({ refCommerceCardsTable }) => {
  const [columnFilters, setColumnFilters] = useState([])
  const [globalFilter, setGlobalFilter] = useState('')
  const [sorting, setSorting] = useState([])
  const [pagination, setPagination] = useState({
    pageIndex: 0,
    pageSize: 10
  })
  const [rowSelection, setRowSelection] = useState({})

  const { data, isLoading, isFetching, isError, error, refetch } = useFindAllCommerceCards({
    columnFilters: columnFilters ?? [],
    globalFilter: globalFilter ?? '',
    pageIndex: pagination?.pageIndex ?? 0,
    pageSize: pagination?.pageSize ?? 10,
    sorting: sorting ?? []
  })

  const setOpenAssign = useCommerceCards(state => state.setOpenAssign)
  const setSelectedCards = useCommerceCards(state => state.setAllCards)

  const columns = useMemo(() => CommerceCardsColumns, [])

  const handleValidateCards = table => () => {
    const selectedCards = table.getSelectedRowModel().flatRows?.map(row => row.original) ?? []

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
      setSelectedCards(selectedCards)
      setOpenAssign(true)
    }
  }

  const handleExportRows = table => () => {
    try {
      const filterData =
        table.getSortedRowModel().rows.map(row => columns?.map(c => row.getValue(c.accessorKey)) || []) ?? []
      generateCSVFile(columns?.map(c => c.header) || [], filterData, 'Stock del comercio')
    } catch {}
  }

  return (
    <Card>
      <MaterialDataTable
        tableInstanceRef={refCommerceCardsTable}
        enablePinning
        enableColumnOrdering={false}
        enableColumnFilterModes={false}
        enableStickyHeader
        enableRowVirtualization
        enableDensityToggle={false}
        // manualFiltering
        // manualPagination
        // manualSorting
        columns={columns}
        data={data?.data || []}
        isError={isError}
        textError={error}
        selectAllMode={'all'}
        // onColumnFiltersChange={setColumnFilters}
        // onGlobalFilterChange={setGlobalFilter}
        // onPaginationChange={setPagination}
        // onSortingChange={setSorting}
        onRowSelectionChange={setRowSelection}
        rowCount={data?.meta?.total ?? 0}
        initialState={{
          density: 'compact',
          sorting: [
            {
              id: 'lastActivityDate',
              desc: true
            }
          ]
        }}
        state={{
          // columnFilters,
          // globalFilter,
          // pagination,
          // sorting,
          isLoading,
          showAlertBanner: isError,
          showProgressBars: isFetching,
          rowSelection: rowSelection ?? {}
        }}
        enableRowSelection={true}
        muiTableContainerProps={{ sx: { maxHeight: { md: '350px', lg: '450px', xl: '700px' } } }}
        renderTopToolbarCustomActions={({ table }) => (
          <Box sx={{ display: 'flex', gap: '1rem' }}>
            <Button
              onClick={handleValidateCards(table)}
              disabled={!table.getIsSomeRowsSelected()}
              startIcon={<AssignmentIndRounded width={24} height={24} />}
            >
              Asociar
            </Button>
          </Box>
        )}
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
        renderToolbarInternalActions={({ table }) => (
          <Box>
            <Tooltip arrow title="Actualizar">
              <IconButton onClick={() => refetch()}>
                <RefreshIcon />
              </IconButton>
            </Tooltip>
            <SearchAction table={table} />
            <Tooltip title="Descargar">
              <IconButton
                disabled={table.getPrePaginationRowModel().rows.length === 0}
                onClick={handleExportRows(table)}
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
