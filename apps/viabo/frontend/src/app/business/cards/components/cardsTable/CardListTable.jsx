import { Scrollbar } from '@/shared/components/scroll'
import { Table, TableBody, TableContainer } from '@mui/material'
import { getComparator, useTable } from '@/shared/hooks'
import { TableHeadCustom } from '@/shared/components/table'
import { useEffect, useState } from 'react'
import { CardRow } from '@/app/business/cards/components/cardsTable/CardRow'
import { useCommerceDetailsCard } from '@/app/business/cards/store'

const TABLE_HEAD = [{ id: 'cardNumber', label: 'Tarjeta', align: 'left' }]

export function CardListTable({ cards, searchTerm = '' }) {
  const [tableData, setTableData] = useState(cards || [])
  const setSelectedCards = useCommerceDetailsCard(state => state.setSelectedCards)

  const {
    dense,
    page,
    order,
    orderBy,
    rowsPerPage,
    setPage,
    //
    selected,
    setSelected,
    onSelectRow,
    onSelectAllRows,
    //
    onSort,
    onChangeDense,
    onChangePage,
    onChangeRowsPerPage
  } = useTable({
    defaultOrderBy: 'cardNumber'
  })

  const dataFiltered = applySortFilter({
    tableData,
    comparator: getComparator(order, orderBy),
    filterName: searchTerm
  })

  useEffect(() => {
    setSelectedCards(selected)
  }, [selected])

  return (
    <Scrollbar sx={{ mt: 3 }}>
      <TableContainer sx={theme => ({ minWidth: 200, borderRadius: 2, boxShadow: theme.customShadows.card })}>
        <Table>
          <TableHeadCustom
            order={order}
            orderBy={orderBy}
            headLabel={TABLE_HEAD}
            rowCount={cards?.length || 0}
            numSelected={selected.length}
            onSort={onSort}
            onSelectAllRows={checked => {
              onSelectAllRows(
                checked,
                tableData.map(row => row.id)
              )
            }}
          />
          <TableBody sx={{ backgroundColor: theme => theme.palette.background.paper }}>
            {dataFiltered?.map((row, index) => (
              <CardRow
                key={row.id}
                row={row}
                selected={selected.includes(row.id)}
                onSelectRow={() => onSelectRow(row.id)}
              />
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Scrollbar>
  )
}

function applySortFilter({ tableData, comparator, filterName }) {
  const stabilizedThis = tableData.map((el, index) => [el, index])

  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0])
    if (order !== 0) return order
    return a[1] - b[1]
  })

  tableData = stabilizedThis.map(el => el[0])

  if (filterName) {
    tableData = tableData.filter(item => item?.cardNumber.toLowerCase().indexOf(filterName.toLowerCase()) !== -1)
  }

  return tableData
}
