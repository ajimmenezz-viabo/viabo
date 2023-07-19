import { Backdrop, Divider, IconButton, Stack, Typography } from '@mui/material'
import { AnimatePresence } from 'framer-motion'
import { SideBarStyle } from '@/app/shared/components/index'
import { Close } from '@mui/icons-material'
import { useRightPanel } from '@/app/shared/hooks'
import PropTypes from 'prop-types'

RightPanel.propTypes = {
  open: PropTypes.bool,
  handleClose: PropTypes.func,
  title: PropTypes.string,
  children: PropTypes.node,
  titleElement: PropTypes.node
}

export function RightPanel({ open = false, handleClose, title, children, titleElement }) {
  const { varSidebar } = useRightPanel(open)

  return (
    <>
      <Backdrop open={Boolean(open)} onClick={handleClose} sx={{ zIndex: theme => theme.zIndex.drawer + 1 }} />

      <AnimatePresence>
        {open && (
          <>
            <SideBarStyle {...varSidebar}>
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
            </SideBarStyle>
          </>
        )}
      </AnimatePresence>
    </>
  )
}
