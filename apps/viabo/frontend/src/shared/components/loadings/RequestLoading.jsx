import { Backdrop } from '@mui/material'
import { NAVBAR } from '@theme/overrides/options'
import { CircularLoading } from '@/shared/components/loadings/CircularLoading'
import { useCollapseDrawer } from '@theme/hooks'

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
