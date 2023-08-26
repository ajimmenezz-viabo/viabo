import { useEffect } from 'react'

import { useTheme } from '@emotion/react'
import { ContactlessSharp } from '@mui/icons-material'
import { Drawer, Stack } from '@mui/material'

import { TerminalBalance } from './terminal-balance/TerminalBalance'
import { TerminalGlobalBalance } from './terminal-balance/TerminalGlobalBalance'
import { TerminalsList } from './terminals/TerminalsList'
import { TerminalsSearch } from './terminals/TerminalsSearch'

import {
  SIDEBAR_COLLAPSE_WIDTH,
  SIDEBAR_WIDTH,
  SidebarButtonMobileStyle
} from '../../cards/components/sidebar/SidebarStyles'
import { useFindCommerceTerminals } from '../hooks'
import { useTerminals } from '../store'

import { Scrollbar } from '@/shared/components/scroll'
import { useResponsive } from '@/theme/hooks'

export const TerminalsDrawer = () => {
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
    if (isDesktop) {
      setOpenSidebar(true)
    }
  }, [isDesktop])

  useEffect(() => {
    setCollapse(isCollapse)
  }, [isCollapse])

  const renderContent = (
    <>
      {openSidebar && (
        <Stack spacing={2} p={2}>
          <TerminalGlobalBalance />

          <TerminalBalance />
        </Stack>
      )}

      <Stack>
        <TerminalsSearch commerceTerminals={terminalsQuery?.data || []} />
      </Stack>
      <Scrollbar
        sx={{
          height: 0.98
        }}
      >
        <Stack>
          <TerminalsList terminalsQuery={terminalsQuery} />
        </Stack>
      </Scrollbar>
    </>
  )

  return (
    <>
      {!isDesktop && !openSidebar && (
        <SidebarButtonMobileStyle onClick={handleToggleSidebar}>
          <ContactlessSharp sx={{ width: 20, height: 20 }} />
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
