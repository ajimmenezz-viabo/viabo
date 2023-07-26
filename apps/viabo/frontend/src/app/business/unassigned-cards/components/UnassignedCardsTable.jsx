import { ClearTwoTone, Done } from '@mui/icons-material'
import { Avatar, Card, Stack, Typography } from '@mui/material'
import { toast } from 'react-toastify'

import { useUnassignedCards } from '@/app/business/unassigned-cards/store'
import { AssignCardTableToolbar } from '@/app/shared/components'
import { DataTable } from '@/shared/components/dataTables'
import { CarnetLogo, MasterCardLogo } from '@/shared/components/images'

export function UnassignedCardsTable({ isLoading, cards = [], rows = [] }) {
  const setAllCards = useUnassignedCards(state => state.setAllCards)
  const selectedCards = useUnassignedCards(state => state.cards)
  const setOpenAssign = useUnassignedCards(state => state.setOpenAssign)
  const setIndexCards = useUnassignedCards(state => state.setIndexCards)

  const handleValidateCards = () => {
    const someWithoutCVV = selectedCards.some(card => card?.cvv === '') && selectedCards?.length > 1
    const allEmptyCVV = selectedCards.every(card => card?.cvv === '') && selectedCards?.length > 1
    if (allEmptyCVV) {
      toast.warn('Las tarjetas seleccionadas no tiene cvv , debe asignar una por una')
    } else if (someWithoutCVV) {
      toast.warn('Existe al menos una tarjeta seleccionada que no tiene cvv')
    } else {
      setOpenAssign(true)
    }
  }

  console.log(cards)

  const columns = [
    {
      name: 'cardNumberMoreDigits',
      label: 'Tarjeta',
      options: {
        customBodyRenderLite: (dataIndex, rowIndex) => {
          const rowData = cards[dataIndex]
          return (
            <Typography variant="subtitle2" fontWeight="bold">
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
