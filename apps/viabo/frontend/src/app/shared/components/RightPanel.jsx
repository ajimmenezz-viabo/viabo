import PropTypes from 'prop-types'

import { Close } from '@mui/icons-material'
import { Divider, Drawer, IconButton, Stack, Typography } from '@mui/material'

import { useResponsive } from '@/theme/hooks'

RightPanel.propTypes = {
  open: PropTypes.bool,
  handleClose: PropTypes.func,
  title: PropTypes.string,
  children: PropTypes.node,
  titleElement: PropTypes.node
}

export function RightPanel({ open = false, handleClose, title, children, titleElement }) {
  const matches = useResponsive('down', 'md')

  return (
    <Drawer
      anchor={matches ? 'bottom' : 'right'}
      sx={{
        '& .MuiPaper-root.MuiDrawer-paper': {
          borderRadius: `${!matches ? '10px 0px 0px 10px' : 'none'}`,
          width: { sm: '100%', lg: '40%', xl: '30%' }
        }
      }}
      open={open}
      keepMounted={false}
    >
      <Stack direction="row" alignItems="center" justifyContent="space-between" sx={{ py: 2, pr: 1, pl: 2.5 }}>
        {titleElement || <Typography variant="h6">{title}</Typography>}

        <div>
          <IconButton aria-label="close" size="medium" onClick={handleClose}>
            <Close width={20} height={20} fontSize="inherit" color="primary" />
          </IconButton>
        </div>
      </Stack>

      <Divider sx={{ borderStyle: 'dashed' }} />
      {children}
    </Drawer>
  )
}
