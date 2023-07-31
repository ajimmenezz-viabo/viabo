import PropTypes from 'prop-types'

import { ClearTwoTone, Done } from '@mui/icons-material'
import { Avatar, Card, Stack, Typography } from '@mui/material'
import { toast } from 'react-toastify'

import { useCommerceCards } from '@/app/business/all-commerce-cards/store'
import { AssignCardTableToolbar } from '@/app/shared/components'
import { DataTable } from '@/shared/components/dataTables'
import { CarnetLogo, MasterCardLogo } from '@/shared/components/images'

export function CommerceCardsTable({ isLoading, cards = [], rows = [] }) {
  const setAllCards = useCommerceCards(state => state.setAllCards)
  const selectedCards = useCommerceCards(state => state.cards)
  const setOpenAssign = useCommerceCards(state => state.setOpenAssign)
  const setIndexCards = useCommerceCards(state => state.setIndexCards)

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

  const columns = [
    {
      name: 'cardNumberMoreDigits',
      label: 'Tarjeta',
      options: {
        customBodyRenderLite: (dataIndex, rowIndex) => {
          const rowData = cards[dataIndex]
          return (
            <Typography variant="subtitle2" fontWeight="bold" noWrap>
              {rowData?.cardNumberMoreDigits}
            </Typography>
          )
        }
      }
    },
    {
      name: 'cardType',
      label: 'Tipo',
      options: {
        customBodyRenderLite: (dataIndex, rowIndex) => {
          const row = cards[dataIndex]
          return (
            <Stack flexDirection={'row'} alignItems={'center'} gap={1}>
              <Avatar
                sx={theme => ({
                  width: 45,
                  height: 45,
                  color: theme.palette.primary.contrastText,
                  backgroundColor: theme.palette.primary.light
                })}
              >
                {row?.cardType === 'Carnet' ? (
                  <CarnetLogo sx={{ width: 30 }} color={'white'} />
                ) : (
                  <MasterCardLogo sx={{ width: 30 }} />
                )}
              </Avatar>
              <Typography variant="subtitle2">{row?.cardType}</Typography>
            </Stack>
          )
        }
      }
    },
    {
      name: 'expiration',
      label: 'Vence',
      options: {
        filterType: 'textField'
      }
    },
    {
      name: 'emptyCVV',
      label: 'CVV',
      options: {
        filterType: 'checkbox',
        customBodyRenderLite: (dataIndex, rowIndex) => {
          const row = cards[dataIndex]
          if (row?.cvv === '' || !row?.cvv) {
            return <ClearTwoTone color={'error'} />
          }
          return <Done color={'success'} />
        }
      }
    },
    {
      name: 'assignUser.name',
      label: 'Asignado',
      options: {
        customBodyRenderLite: (dataIndex, rowIndex) => {
          const row = cards[dataIndex]
          return <Typography variant="body2">{row?.assignUser?.name}</Typography>
        }
      }
    },
    {
      name: 'assignUser.date',
      label: 'Fecha de Asignación',
      options: {
        customBodyRenderLite: (dataIndex, rowIndex) => {
          const row = cards[dataIndex]
          if (row?.assignUser?.date === '-') {
            return <Typography variant="subtitle2">{row?.assignUser?.date}</Typography>
          }
          return (
            <Stack>
              <Typography variant="subtitle2">{row?.assignUser?.date}</Typography>
              <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                {row?.assignUser?.time}
              </Typography>
            </Stack>
          )
        }
      }
    },
    {
      name: 'register',
      label: 'Fecha de Registro',
      options: {
        filterType: 'textField',
        customBodyRenderLite: (dataIndex, rowIndex) => {
          const row = cards[dataIndex]
          return (
            <Stack>
              <Typography variant="subtitle2">{row?.registerDate}</Typography>
              <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                {row?.registerTime}
              </Typography>
            </Stack>
          )
        }
      }
    }
  ]

  return (
    <Card>
      <DataTable
        isLoading={isLoading}
        data={cards || []}
        columns={columns}
        options={{
          responsive: 'simple',
          rowsSelected: rows,
          rowHover: true,
          selectableRows: 'multiple',
          selectableRowsOnClick: true,
          selectToolbarPlacement: 'replace',
          enableNestedDataAccess: '.',
          sortOrder: {
            name: 'register',
            direction: 'desc'
          },
          downloadOptions: {
            filename: 'tarjetas_sin_asignar.csv',
            filterOptions: {
              useDisplayedColumnsOnly: false // it was true
            }
          },
          onRowSelectionChange: (currentRowsSelected, allRowsSelected, rowsSelected) => {
            const selectedCards = cards?.filter((valor, index) => rowsSelected.includes(index))
            setAllCards(selectedCards)
            setIndexCards(rowsSelected)
          },
          customToolbarSelect: selectedRows => <AssignCardTableToolbar handleAssign={handleValidateCards} />
        }}
      />
    </Card>
  )
}

CommerceCardsTable.propTypes = {
  cards: PropTypes.array,
  isLoading: PropTypes.bool,
  rows: PropTypes.array
}
