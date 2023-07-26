import { useState } from 'react'

import { Box } from '@mui/material'
import { styled } from '@mui/material/styles'
import { useCollapseDrawer, useResponsive, useSettings } from '@theme/hooks'
import { HEADER, NAVBAR } from '@theme/overrides/options'
import { Outlet } from 'react-router-dom'

import DashboardHeader from './header/DashboardHeader'
import NavbarVertical from './navbar/NavbarVertical'

const MainStyle = styled('main', {
  shouldForwardProp: prop => prop !== 'collapseClick'
})(({ collapseClick, theme }) => ({
  flexGrow: 1,
  paddingTop: HEADER.MOBILE_HEIGHT + 24,
  paddingBottom: 0,
  [theme.breakpoints.up('lg')]: {
    paddingLeft: 0,
    paddingRight: 0,
    paddingTop: HEADER.DASHBOARD_DESKTOP_HEIGHT + 24,
    paddingBottom: 0,
    width: `calc(100% - ${NAVBAR.DASHBOARD_WIDTH}px)`,
    transition: theme.transitions.create('margin-left', {
      duration: theme.transitions.duration.shorter
    }),
    ...(collapseClick && {
      marginLeft: NAVBAR.DASHBOARD_COLLAPSE_WIDTH
    })
  }
}))

export function DashboardLayout() {
  const { collapseClick, isCollapse } = useCollapseDrawer()

  const { themeLayout } = useSettings()

  const isDesktop = useResponsive('up', 'lg')

  const [open, setOpen] = useState(false)

  const verticalLayout = themeLayout === 'vertical'

  if (verticalLayout) {
    return (
      <>
        <DashboardHeader onOpenSidebar={() => setOpen(true)} verticalLayout={verticalLayout} />

        <Box
          component="main"
          sx={{
            px: { lg: 2 },
            pt: {
              xs: `${HEADER.MOBILE_HEIGHT + 24}px`,
              lg: `${HEADER.DASHBOARD_DESKTOP_HEIGHT + 80}px`
            },
            pb: {
              xs: `${HEADER.MOBILE_HEIGHT + 24}px`,
              lg: `${HEADER.DASHBOARD_DESKTOP_HEIGHT + 24}px`
            }
          }}
        >
          <Outlet />
        </Box>
      </>
    )
  }

  return (
    <Box
      sx={{
        display: { lg: 'flex' },
        minHeight: { lg: 1 }
      }}
    >
      <DashboardHeader isCollapse={isCollapse} onOpenSidebar={() => setOpen(true)} />

      <NavbarVertical isOpenSidebar={open} onCloseSidebar={() => setOpen(false)} />

      <MainStyle collapseClick={collapseClick}>
        <Outlet />
      </MainStyle>
    </Box>
  )
}
