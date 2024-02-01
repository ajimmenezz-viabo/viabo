import { useEffect, useMemo, useState } from 'react'

import { Card, CardHeader, Stack, ToggleButton, ToggleButtonGroup, Typography } from '@mui/material'

import { AssignedTicketsSupportTable } from './AssignedTicketsSupportTable'
import { GeneratedTicketsSupportTable } from './GeneratedTicketsSupportTable'

import { TICKET_SUPPORT_PERMISSIONS } from '../../shared/permissions'

import { useUser } from '@/shared/hooks'

const TicketsSupportList = () => {
  const user = useUser()
  const hasGeneratedTicketsPermission = user?.permissions.includes(TICKET_SUPPORT_PERMISSIONS.GENERATED_TICKETS)
  const hasAssignedTicketsPermission = user?.permissions.includes(TICKET_SUPPORT_PERMISSIONS.ASSIGNED_TICKETS)

  const [view, setView] = useState(null)

  const hasTwoPermission = hasGeneratedTicketsPermission && hasAssignedTicketsPermission

  const message = useMemo(
    () => (view === TICKET_SUPPORT_PERMISSIONS.GENERATED_TICKETS ? 'Generados' : 'Asignados'),
    [view]
  )

  useEffect(() => {
    if (hasTwoPermission) {
      return setView(TICKET_SUPPORT_PERMISSIONS.ASSIGNED_TICKETS)
    }
    if (hasGeneratedTicketsPermission) {
      return setView(TICKET_SUPPORT_PERMISSIONS.GENERATED_TICKETS)
    }
    if (hasAssignedTicketsPermission) {
      return setView(TICKET_SUPPORT_PERMISSIONS.ASSIGNED_TICKETS)
    }
    return setView(TICKET_SUPPORT_PERMISSIONS.GENERATED_TICKETS)
  }, [])

  return (
    <Card variant="outlined">
      <CardHeader
        sx={theme => ({
          pb: 2
        })}
        title={`Lista de Tickets ${message}`}
        subheader={`Tienes ${0} Tickets ${message}`}
        action={
          hasTwoPermission ? (
            <ToggleButtonGroup
              color="primary"
              value={view}
              exclusive
              onChange={(event, newView) => {
                if (newView) {
                  setView(newView)
                }
              }}
              aria-label="Ticket View"
            >
              <ToggleButton fullWidth sx={{ width: 1 }} value={TICKET_SUPPORT_PERMISSIONS.ASSIGNED_TICKETS}>
                <Stack direction={'row'} spacing={1} alignItems={'center'}>
                  <Typography variant="subtitle2">Asignados</Typography>
                </Stack>
              </ToggleButton>
              <ToggleButton fullWidth sx={{ width: 1 }} value={TICKET_SUPPORT_PERMISSIONS.GENERATED_TICKETS}>
                <Stack direction={'row'} spacing={1} alignItems={'center'}>
                  <Typography variant="subtitle2">Generados</Typography>
                </Stack>
              </ToggleButton>
            </ToggleButtonGroup>
          ) : (
            <></>
          )
        }
      />
      {view === TICKET_SUPPORT_PERMISSIONS.GENERATED_TICKETS && <GeneratedTicketsSupportTable />}
      {view === TICKET_SUPPORT_PERMISSIONS.ASSIGNED_TICKETS && <AssignedTicketsSupportTable />}
    </Card>
  )
}

export default TicketsSupportList
