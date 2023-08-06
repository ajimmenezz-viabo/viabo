import { useEffect } from 'react'

import { useTheme } from '@emotion/react'
import { PointOfSale } from '@mui/icons-material'
import { Drawer, Stack } from '@mui/material'

import { TerminalsList } from './terminals/TerminalsList'
import { TerminalsSearch } from './terminals/TerminalsSearch'

import {
  SIDEBAR_COLLAPSE_WIDTH,
  SIDEBAR_WIDTH,
  SidebarButtonMobileStyle
} from '../../cards/components/sidebar/SidebarStyles'
import { useFindCommerceTerminals } from '../hooks'
import { useTerminalDetails, useTerminals } from '../store'

import { Scrollbar } from '@/shared/components/scroll'
import { useResponsive } from '@/theme/hooks'

export const TerminalsDrawer = () => {
  const selectedTerminalId = useTerminalDetails(state => state.terminal?.id)

  const setOpenSidebar = useTerminals(state => state.setOpenList)
  const setCollapse = useTerminals(state => state.setCollapse)
  const openSidebar = useTerminals(state => state.isOpenList)

  const terminalsQuery = useFindCommerceTerminals()

  const theme = useTheme()

  const isDesktop = useResponsive('up', 'md')

  const isCollapse = isDesktop && !openSidebar

  const handleCloseSidebar = () => {
    setOpenSidebar(false)
  }

  const handleToggleSidebar = () => {
    setOpenSidebar(!openSidebar)
  }

  // eslint-disable-next-line consistent-return
  useEffect(() => {
    if (!isDesktop) {
      return handleCloseSidebar()
    }
  }, [isDesktop, selectedTerminalId])

  useEffect(() => {
    setCollapse(isCollapse)
  }, [isCollapse])

  const renderContent = (
    <Scrollbar
      sx={{
        height: 0.98
      }}
    >
      <Stack px={openSidebar ? 1 : 0}>
        <TerminalsSearch commerceTerminals={terminalsQuery?.data || []} />
        <TerminalsList terminalsQuery={terminalsQuery} />
      </Stack>
    </Scrollbar>
  )

  return (
    <>
      {!isDesktop && !openSidebar && (
        <SidebarButtonMobileStyle onClick={handleToggleSidebar}>
          <PointOfSale
            sx={{
              width: 16,
              height: 16
            }}
          />
        </SidebarButtonMobileStyle>
      )}

      {isDesktop ? (
        <Drawer
          open={openSidebar}
          variant="persistent"
          PaperProps={{
            sx: {
              height: 1,
              borderRightStyle: 'none',
              bgcolor: 'background.default'
            }
          }}
          sx={{
            height: 1,
            width: SIDEBAR_WIDTH,
            transition: theme.transitions.create('width'),
            '& .MuiDrawer-paper': {
              position: 'static',
              backgroundColor: 'transparent!important',
              width: SIDEBAR_WIDTH
            },
            ...(isCollapse && {
              width: SIDEBAR_COLLAPSE_WIDTH,
              '& .MuiDrawer-paper': {
                width: SIDEBAR_COLLAPSE_WIDTH,
                backgroundColor: 'transparent!important',
                position: 'static',
                transform: 'none !important',
                visibility: 'visible !important'
              }
            })
          }}
        >
          {renderContent}
        </Drawer>
      ) : (
        <Drawer
          ModalProps={{ keepMounted: true }}
          open={openSidebar}
          onClose={handleCloseSidebar}
          sx={{
            height: 1,
            '& .MuiDrawer-paper': { width: SIDEBAR_WIDTH, p: 2 }
          }}
        >
          {renderContent}
        </Drawer>
      )}
    </>
  )
}
