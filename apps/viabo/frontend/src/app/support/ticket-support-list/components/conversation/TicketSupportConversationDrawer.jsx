import { lazy, useEffect } from 'react'

import { DoneAll } from '@mui/icons-material'
import { LoadingButton } from '@mui/lab'
import { Stack, Typography } from '@mui/material'

import { useFindTicketConversation } from '../../hooks'
import { useTicketSupportListStore } from '../../store'

import { RightPanel } from '@/app/shared/components'
import { Lodable } from '@/shared/components/lodables'
import { ErrorRequestPage } from '@/shared/components/notifications'
import { Scrollbar } from '@/shared/components/scroll'

const TicketConversationLayout = Lodable(lazy(() => import('./TicketConversationLayout')))

const TicketSupportConversationDrawer = () => {
  const { openTicketConversation, setOpenTicketConversation, ticket, setSupportTicketDetails } =
    useTicketSupportListStore()

  const queryTicketConversation = useFindTicketConversation(ticket?.id, { enabled: !!ticket?.id })
  const { isLoading, error, isError, refetch } = queryTicketConversation

  useEffect(() => {
    if (openTicketConversation) {
      refetch()
    }
  }, [openTicketConversation])

  const handleClose = () => {
    setOpenTicketConversation(false)
    setSupportTicketDetails(null)
  }

  return (
    <RightPanel
      open={openTicketConversation}
      handleClose={handleClose}
      titleElement={
        <Stack justifyContent={'space-between'} flex={1} flexDirection={'column'} gap={1}>
          <Stack>
            <Typography variant={'h6'}>{`Ticket #${ticket?.id}`}</Typography>
          </Stack>
          <Stack maxWidth={'30%'}>
            <LoadingButton
              endIcon={<DoneAll />}
              variant="contained"
              type="submit"
              loading={isLoading}
              color="success"
              // sx={{ typography: 'subtitle1' }}
            >
              Concluir
            </LoadingButton>
          </Stack>
        </Stack>
      }
      width={{ sm: '100%', lg: '50%', xl: '40%' }}
    >
      {isError && !isLoading && (
        <Scrollbar containerProps={{ sx: { flexGrow: 0, height: 'auto' } }}>
          <Stack spacing={3} p={3}>
            <ErrorRequestPage
              errorMessage={error}
              titleMessage={'Conversación del Ticket'}
              handleButton={() => refetch()}
            />
          </Stack>
        </Scrollbar>
      )}

      {!isError && openTicketConversation && (
        <TicketConversationLayout queryTicketConversation={queryTicketConversation} ticket={ticket} />
      )}
    </RightPanel>
  )
}

export default TicketSupportConversationDrawer
