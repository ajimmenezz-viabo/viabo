import { Alert, Box, Stack } from '@mui/material'

import { TerminalActions } from './terminal/TerminalActions'
import { TerminalMovements } from './terminal/TerminalMovements'

import { useTerminalDetails } from '../store'

import { SelectDataIllustration } from '@/shared/components/illustrations'

export const TerminalDetails = () => {
  const terminal = useTerminalDetails(state => state.terminal)

  return (
    <Stack
      sx={theme => ({
        pl: { xs: 0, lg: 2 },
        overflow: 'hidden',
        flexDirection: 'column',
        flexGrow: 1
      })}
    >
      {terminal && (
        <Box sx={{ overflowY: 'auto' }}>
          {terminal?.isVirtual && <TerminalActions />}

          <Stack pt={0} pb={4} px={2}>
            <TerminalMovements />
          </Stack>
        </Box>
      )}

      {!terminal && (
        <Stack spacing={3} sx={{ height: '100%', width: '100%' }}>
          <Alert variant="filled" severity="info">
            Debe seleccionar una terminal para ver sus detalles!
          </Alert>
          <Stack alignItems={'center'}>
            <SelectDataIllustration sx={{ width: '30%' }} />
          </Stack>
        </Stack>
      )}
    </Stack>
  )
}
