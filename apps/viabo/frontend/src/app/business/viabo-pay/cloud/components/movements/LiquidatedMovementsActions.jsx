import { Payment } from '@mui/icons-material'
import { ListItemIcon, MenuItem } from '@mui/material'

import { useViaboPayLiquidatedMovementsStore } from '../../store'

export function getLiquidatedMovementsActions(table) {
  const { row, closeMenu } = table
  const { original: rowData } = row
  const { status } = rowData

  const { setMovementToLiquidate, setOpenDrawerLiquidateMovement } = useViaboPayLiquidatedMovementsStore(state => state)

  const menuItems = [
    <MenuItem
      key={0}
      onClick={() => {
        setMovementToLiquidate(rowData)
        setOpenDrawerLiquidateMovement(true)
        closeMenu()
      }}
      sx={{ m: 0 }}
    >
      <ListItemIcon>
        <Payment color="success" />
      </ListItemIcon>
      Liquidar
    </MenuItem>
  ]

  return menuItems
}
