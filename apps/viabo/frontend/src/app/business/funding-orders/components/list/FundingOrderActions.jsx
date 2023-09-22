import { AddTask, Cancel, Visibility } from '@mui/icons-material'
import { ListItemIcon, MenuItem } from '@mui/material'

import { useFundingOrderStore } from '../../store'

export function getFundingOrderActions(row, closeMenu) {
  const { original: rowData } = row
  const { status } = rowData
  const hasPending = status === 'Pendiente'
  const hasPayed = status === 'Pagada'
  const setOpenConciliateModal = useFundingOrderStore(state => state.setOpenConciliateModal)
  const setFundingOrder = useFundingOrderStore(state => state.setFundingOrder)

  const menuItems = [
    <MenuItem
      key={0}
      onClick={() => {
        setFundingOrder(rowData)
        closeMenu()
      }}
      sx={{ m: 0 }}
    >
      <ListItemIcon>
        <Visibility color="info" />
      </ListItemIcon>
      Ver Detalles
    </MenuItem>
  ]

  if (hasPayed) {
    menuItems.push(
      <MenuItem
        key={1}
        onClick={() => {
          setFundingOrder(rowData)
          setOpenConciliateModal(true)
          closeMenu()
        }}
        sx={{ m: 0 }}
      >
        <ListItemIcon>
          <AddTask color="success" />
        </ListItemIcon>
        Conciliar
      </MenuItem>
    )
  }

  if (hasPending) {
    menuItems.push(
      <MenuItem
        key={2}
        onClick={() => {
          setFundingOrder(rowData)
          closeMenu()
        }}
        sx={{ m: 0 }}
      >
        <ListItemIcon>
          <Cancel color="error" />
        </ListItemIcon>
        Cancelar
      </MenuItem>
    )
  }

  return menuItems
}
