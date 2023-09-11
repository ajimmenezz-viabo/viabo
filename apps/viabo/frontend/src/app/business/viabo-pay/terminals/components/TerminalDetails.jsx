import { Box, Stack } from '@mui/material'
import { AnimatePresence, motion } from 'framer-motion'

import { TerminalActions } from './terminal/TerminalActions'
import { TerminalMovements } from './terminal/TerminalMovements'

import { useTerminalDetails } from '../store'

export const TerminalDetails = () => {
  const terminal = useTerminalDetails(state => state.terminal)

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
