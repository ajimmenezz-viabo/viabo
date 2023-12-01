import { createElement, useRef, useState } from 'react'

import { LoadingButton } from '@mui/lab'
import {
  Box,
  Button,
  Divider,
  IconButton,
  ListItemIcon,
  ListItemText,
  MenuItem,
  Stack,
  Tooltip,
  Typography
} from '@mui/material'
import { alpha } from '@mui/material/styles'
import { Link as RouterLink } from 'react-router-dom'

import ChangePassword from '@/app/authentication/components/ChangePassword'
import { useLogout } from '@/app/authentication/hooks'
import { MenuPopover } from '@/shared/components/containers'
import { useUser } from '@/shared/hooks'
import { MyAvatar } from '@/shared/layout/dashboard/header'

const MENU_OPTIONS = [
  // {
  //   label: 'Ajustes',
  //   icon: Settings,
  //   linkTo: '/settings'
  // }
]

export default function AccountPopover() {
  const anchorRef = useRef(null)
  const [open, setOpen] = useState(false)
  const [openChangePassword, setOpenChangePassword] = useState(false)
  const user = useUser()
  const { mutate: logout, isLoading } = useLogout()

  const handleOpen = () => {
    setOpen(true)
  }
  const handleClose = () => {
    setOpen(false)
  }

  const handleLogout = () => {
    logout()
  }

  const handleChangePassword = () => {
    setOpen(false)
    setOpenChangePassword(true)
  }

  return (
    <>
      <IconButton
        ref={anchorRef}
        onClick={handleOpen}
        sx={{
          padding: 0,
          width: 44,
          height: 44,
          ...(open && {
            '&:before': {
              zIndex: 1,
              content: "''",
              width: '100%',
              height: '100%',
              borderRadius: '50%',
              position: 'absolute',
              bgcolor: theme => alpha(theme.palette.grey[900], 0.72)
            }
          })
        }}
      >
        <MyAvatar />
      </IconButton>

      <MenuPopover open={open} onClose={handleClose} anchorEl={anchorRef.current} sx={{ width: 220 }}>
        <Box sx={{ my: 1.5, px: 2.5 }}>
          <Tooltip title={user?.name || ''} arrow followCursor>
            <Typography variant="subtitle1" noWrap textTransform={'capitalize'}>
              {user?.name}
            </Typography>
          </Tooltip>
          <Tooltip title={user?.email || ''} arrow followCursor>
            <Typography variant="body2" sx={{ color: 'text.secondary' }} noWrap>
              {user?.email}
            </Typography>
          </Tooltip>
        </Box>

        <Divider sx={{ my: 1 }} />

        {MENU_OPTIONS.map(option => (
          <MenuItem
            key={option.label}
            to={option.linkTo}
            component={RouterLink}
            onClick={handleClose}
            sx={{ typography: 'body2', py: 1, px: 2.5 }}
          >
            <ListItemIcon>{createElement(option.icon)}</ListItemIcon>
            <ListItemText> {option.label}</ListItemText>
          </MenuItem>
        ))}

        <Stack sx={{ p: 2, pt: 1.5 }} gap={2}>
          <Button fullWidth variant="outlined" color="info" onClick={handleChangePassword}>
            Cambiar Contraseña
          </Button>
          <LoadingButton loading={isLoading} fullWidth variant="outlined" color="error" onClick={handleLogout}>
            Cerrar Sesión
          </LoadingButton>
        </Stack>
      </MenuPopover>
      <ChangePassword open={openChangePassword} setOpen={setOpenChangePassword} />
    </>
  )
}
