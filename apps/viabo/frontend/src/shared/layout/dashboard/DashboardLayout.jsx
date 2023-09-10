import { useState } from 'react'

import { Menu } from '@mui/icons-material'
import { AppBar, Box, CssBaseline, IconButton, Stack, Toolbar } from '@mui/material'
import { useCollapseDrawer, useResponsive } from '@theme/hooks'
import { Outlet } from 'react-router-dom'

import { ThemeMode } from './header'
import AccountPopover from './header/AccountPopover'
import SideBar from './SideBar'

import { cssStyles } from '@/theme/utils'

export function DashboardLayout() {
  const isDesktop = useResponsive('up', 'lg')

  const { isCollapse, onToggleCollapse, setCollapse } = useCollapseDrawer()

  const [open, setOpen] = useState(false)

  return (
    <Box sx={{ display: 'flex', height: '100vH' }}>
      <CssBaseline />
      <SideBar toggled={open} setToggled={setOpen} isCollapse={isCollapse} setCollapsed={onToggleCollapse} />
      <Stack sx={{ overflow: 'auto', flexGrow: 1 }}>
        <AppBar
          position="sticky"
          component="nav"
          sx={theme => ({
            ...cssStyles(theme).bgBlur(),
            boxShadow: 'none'
          })}
        >
          <Toolbar>
            {!isDesktop && (
              <IconButton
                sx={{
                  mr: 1,
                  color: 'text.primary'
                }}
                onClick={() => {
                  setOpen(true)
                  setCollapse(false)
                }}
              >
                <Menu />
              </IconButton>
            )}
            <Box sx={{ flexGrow: 1 }} />

            <Stack direction="row" alignItems="center" spacing={{ xs: 0.5, sm: 2 }}>
              <ThemeMode />
              <AccountPopover />
            </Stack>
          </Toolbar>
        </AppBar>

        <Box component="main" sx={{ py: 3, position: 'relative' }}>
          <Outlet />
        </Box>
      </Stack>
    </Box>
  )
}
