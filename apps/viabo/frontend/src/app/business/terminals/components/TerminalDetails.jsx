import { Alert, Stack } from '@mui/material'

import { TerminalActions } from './terminal/TerminalActions'
import { TerminalHeader } from './terminal/TerminalHeader'
import { TerminalMovements } from './terminal/TerminalMovements'

import { useTerminalDetails } from '../store'

import { SelectDataIllustration } from '@/shared/components/illustrations'
import { Scrollbar } from '@/shared/components/scroll'
import { useCollapseDrawer } from '@/theme/hooks'

export const TerminalDetails = () => {
  const terminal = useTerminalDetails(state => state.terminal)

  const { isCollapse } = useCollapseDrawer()

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
        <>
          <TerminalHeader />
          <TerminalActions />

          <Scrollbar>
            <Stack pt={0} pb={4} px={2}>
              <TerminalMovements />
            </Stack>
          </Scrollbar>
        </>
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
