import { memo, useEffect, useMemo, useRef } from 'react'

import PropTypes from 'prop-types'

import { Alert, Avatar, Box, Skeleton, Stack, Tooltip, styled } from '@mui/material'

import TicketMessageFile from './TicketMessageFile'
import { ContentStyle, InfoStyle } from './TicketMessageItemStyles'

import { createAvatar } from '@/theme/utils'

const TicketMessages = ({ queryTicketConversation }) => {
  const { data, isLoading, isFetching } = queryTicketConversation

  const messages = data?.messages || []

  const ref = useRef(null)

  const dataLength = data?.messages?.length

  useEffect(() => {
    if (dataLength > 0 && ref?.current) {
      ref.current.scrollBottom = ref.current.scrollHeight
    }
  }, [data])

  const direction = useMemo(() => (dataLength === 0 ? 'column' : 'column-reverse'), [dataLength])

  return (
    <Stack ref={ref} gap={2} p={3} sx={{ overflow: 'auto' }} direction={direction}>
      {!isLoading && messages?.length === 0 && (
        <Stack>
          <Alert severity="info">No hay mensajes disponibles</Alert>
        </Stack>
      )}
      {(isLoading ? [...Array(12)] : messages.reverse())?.map((message, index) =>
        message ? <TicketMessageItem key={message.id} message={message} /> : <MessageSkeleton key={index} />
      )}
    </Stack>
  )
}

TicketMessages.propTypes = {
  queryTicketConversation: PropTypes.shape({
    data: PropTypes.shape({
      logs: PropTypes.shape({
        length: PropTypes.number
      })
    }),
    isFetching: PropTypes.any,
    isLoading: PropTypes.any
  })
}

export default memo(TicketMessages)

function MessageSkeleton() {
  return (
    <Stack direction={'row'} spacing={1} p={3}>
      <Skeleton variant="circular" width={40} height={40} />
      <Stack spacing={1}>
        <Skeleton variant="text" width={100} />
        <Skeleton animation={'wave'} variant="rounded" width={300} height={60} />
      </Stack>
    </Stack>
  )
}

const RootStyle = styled('div')(({ theme }) => ({
  display: 'flex'
}))

function TicketMessageItem({ message }) {
  const isMe = Boolean(message?.my)
  const hasFiles = message?.attachment?.length > 0
  const files = message?.attachment || []
  const { color } = createAvatar(message?.name)

  return (
    <RootStyle>
      <Box
        sx={{
          display: 'flex',
          ...(isMe && {
            ml: 'auto'
          })
        }}
      >
        {!isMe && (
          <Avatar
            alt={message?.name}
            src={message?.avatar}
            sx={theme => ({
              width: 32,
              height: 32,
              fontSize: 'inherit',
              mr: 2,
              color: theme.palette[color].contrastText,
              backgroundColor: theme.palette[color].main
            })}
          >
            {message?.initials}
          </Avatar>
        )}

        <div>
          <InfoStyle
            variant="caption"
            sx={{
              ...(isMe && { justifyContent: 'flex-end' })
            }}
          >
            {!isMe && `${message?.name},`}&nbsp;
            {
              <Tooltip title={message?.createDate?.original || ''} followCursor>
                <div>{message?.createDate?.fToNow}</div>
              </Tooltip>
            }
          </InfoStyle>

          <ContentStyle
            sx={{
              ...(isMe && {
                color: 'grey.800',
                bgcolor: 'success.lighter',
                '&:before': {
                  bottom: '100%',
                  left: '100%',
                  border: '10px solid transparent',
                  content: '" "',
                  height: 0,
                  width: 0,
                  position: 'absolute',
                  pointerEvents: 'none',
                  borderBottomColor: 'success.lighter',
                  borderWidth: '7px',
                  marginLeft: '-30px'
                }
              }),
              ...(hasFiles && { p: 0 })
            }}
          >
            {hasFiles ? (
              <Stack spacing={2} p={1.5}>
                <div
                  style={{ wordWrap: 'break-word', textWrap: 'pretty', fontSize: 'small' }}
                  dangerouslySetInnerHTML={{
                    __html: `<p style='font-size: small'>${message?.message}</p>`
                  }}
                />

                <Stack
                  flexDirection="row"
                  flexWrap="wrap"
                  justifyContent="start"
                  alignItems="end"
                  gap={2}
                  sx={{ overflow: 'auto', pb: 2 }}
                >
                  {files?.map((file, index) => (
                    <TicketMessageFile key={index} file={file} />
                  ))}
                </Stack>
              </Stack>
            ) : (
              <div
                style={{ wordWrap: 'break-word', textWrap: 'pretty' }}
                dangerouslySetInnerHTML={{
                  __html: `<p style='font-size: small'>${message?.message}</p>`
                }}
              />
            )}
          </ContentStyle>
        </div>
      </Box>
    </RootStyle>
  )
}

TicketMessageItem.propTypes = {
  message: PropTypes.shape({
    attachment: PropTypes.array,
    avatar: PropTypes.any,
    createDate: PropTypes.shape({
      fToNow: PropTypes.any,
      original: PropTypes.string
    }),
    initials: PropTypes.any,
    message: PropTypes.any,
    my: PropTypes.any,
    name: PropTypes.any
  })
}
