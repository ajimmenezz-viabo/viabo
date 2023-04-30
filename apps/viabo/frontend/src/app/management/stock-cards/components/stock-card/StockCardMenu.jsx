import { IconButton, MenuItem, Tooltip } from '@mui/material'
import { MenuPopover } from '@/shared/components/containers'
import { AddBusiness, MoreVertTwoTone } from '@mui/icons-material'
import { useState } from 'react'

export function StockCardMenu() {
  const [anchorEl, setAnchorEl] = useState(null)
  const open = Boolean(anchorEl)
  const handleClick = event => {
    setAnchorEl(event.currentTarget)
  }
  const handleClose = () => {
    setAnchorEl(null)
  }

  const handleChangeStatus = () => {}

  return (
    <>
      <Tooltip title="Acciones">
        <IconButton
          onClick={handleClick}
          sx={{ ml: 2 }}
          aria-controls={open ? 'card-menu' : undefined}
          aria-haspopup="true"
          aria-expanded={open ? 'true' : undefined}
        >
          <MoreVertTwoTone width={20} height={20} />
        </IconButton>
      </Tooltip>
      <MenuPopover
        open={Boolean(open)}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
        transformOrigin={{ vertical: 'top', horizontal: 'right' }}
        arrow="right-start"
        sx={{
          mt: -1,
          mr: 0,
          p: 2,
          width: 250,
          '& .MuiMenuItem-root': {
            px: 1,
            typography: 'body2',
            borderRadius: 0.75,
            '& svg': { mr: 2, width: 20, height: 20 }
          }
        }}
      >
        <MenuItem
          onClick={() => {
            handleClose()
          }}
          sx={{ color: 'text.secondary' }}
        >
          <AddBusiness width={24} height={24} />
          Asignar a Comercio
        </MenuItem>
      </MenuPopover>
    </>
  )
}
