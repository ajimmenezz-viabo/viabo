import { Backdrop, Box } from '@mui/material'
import { useCollapseDrawer } from '@theme/hooks'
import { NAVBAR } from '@theme/overrides/options'

import { CircularLoading } from '@/shared/components/loadings/CircularLoading'

export function RequestLoading({ ...rest }) {
  const { isCollapse } = useCollapseDrawer()

  return (
    <Backdrop
      sx={{
        position: 'absolute',
        height: '100%',
        left: {
          lg: isCollapse ? NAVBAR.DASHBOARD_COLLAPSE_WIDTH : NAVBAR.DASHBOARD_WIDTH
        },
        backgroundColor: theme => theme.palette.mode === 'light' && 'rgba(244, 247, 252, 0.72)',
        backdropFilter: 'blur(1px)',
        zIndex: theme => theme.zIndex.drawer - 1
      }}
      {...rest}
    >
      <CircularLoading />
    </Backdrop>
  )
}

export function RequestLoadingComponent(props) {
  return (
    <Box
      sx={{
        position: 'relative',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backdropFilter: 'blur(1px)',
        zIndex: theme => theme.zIndex.modal - 1
      }}
      {...props}
    >
      <CircularLoading />
    </Box>
  )
}
