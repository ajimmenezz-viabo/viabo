import { Close } from '@mui/icons-material'
import { Box, IconButton, Stack, Tooltip } from '@mui/material'
import { AnimatePresence, motion } from 'framer-motion'

import { TerminalActions } from './terminal/TerminalActions'
import { TerminalMovements } from './terminal/TerminalMovements'

import { useTerminalDetails } from '../store'

export const TerminalDetails = () => {
  const terminal = useTerminalDetails(state => state.terminal)
  const resetTerminal = useTerminalDetails(state => state.resetTerminal)

  const handleClose = () => {
    resetTerminal()
  }

  return (
    <Stack
      sx={theme => ({
        pl: { xs: 0, sm: 2, lg: 2 },
        overflow: 'hidden',
        flexDirection: 'column',
        flexGrow: 1,
        transition: theme.transitions.create(['width', 'flexGrow'])
      })}
    >
      <AnimatePresence>
        <Box sx={{ overflowY: 'auto' }}>
          {terminal && (
            <motion.div
              exit={{ opacity: 0 }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
            >
              <Stack pt={0} pb={4} px={2}>
                <Stack alignItems={'flex-end'} pb={2}>
                  <Tooltip title={'Ver Global'}>
                    <IconButton
                      color="secondary"
                      sx={{ bgcolor: 'secondary.main', ':hover': { bgcolor: 'secondary.light' } }}
                      aria-label="close"
                      size="small"
                      onClick={handleClose}
                    >
                      <Close width={20} height={20} fontSize="inherit" color="primary" />
                    </IconButton>
                  </Tooltip>
                </Stack>

                {terminal?.isVirtual && <TerminalActions />}

                <TerminalMovements />
              </Stack>
            </motion.div>
          )}

          {!terminal && (
            <motion.div
              exit={{ opacity: 0 }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
            >
              <Stack pt={0} pb={4} px={2}>
                <TerminalMovements />
              </Stack>
            </motion.div>
          )}
        </Box>
      </AnimatePresence>
    </Stack>
  )
}
