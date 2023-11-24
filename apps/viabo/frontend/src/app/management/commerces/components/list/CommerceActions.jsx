import { Visibility } from '@mui/icons-material'
import { ListItemIcon, MenuItem } from '@mui/material'

import { useCommerce } from '../../store'

export function getCommerceActions(table) {
  const { row, closeMenu } = table
  const { original: rowData } = row
  const { status } = rowData
  const { setCommerce, setOpenDetailsCommerce } = useCommerce(state => state)

  const menuItems = [
    <MenuItem
      key={0}
      onClick={() => {
        setCommerce(rowData)
        setOpenDetailsCommerce(true)
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

  return menuItems
}
