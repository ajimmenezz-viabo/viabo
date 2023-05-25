import PropTypes from 'prop-types'
import { useState } from 'react'
import { styled } from '@mui/material/styles'
import {
  Avatar,
  Backdrop,
  Box,
  Chip,
  Divider,
  IconButton,
  Input,
  Paper,
  Stack,
  Tooltip,
  Typography
} from '@mui/material'
import { useResponsive } from '@theme/hooks'
import { Editor } from '@/shared/components/editor'
import { Close, CloseFullscreen, OpenInFull } from '@mui/icons-material'
import LoadingButton from '@mui/lab/LoadingButton'
import { useCommerceDetailsCard } from '@/app/business/cards/store'

const RootStyle = styled(Paper)(({ theme }) => ({
  right: 0,
  bottom: 0,
  zIndex: 2000,
  minHeight: 440,
  outline: 'none',
  display: 'flex',
  position: 'fixed',
  overflow: 'hidden',
  flexDirection: 'column',
  margin: theme.spacing(3),
  boxShadow: theme.customShadows.z20,
  borderRadius: Number(theme.shape.borderRadius) * 2,
  backgroundColor: theme.palette.background.paper
}))

const InputStyle = styled(Input)(({ theme }) => ({
  padding: theme.spacing(0.5, 3),
  borderBottom: `solid 1px ${theme.palette.divider}`
}))

MailCompose.propTypes = {
  isOpenCompose: PropTypes.bool,
  onCloseCompose: PropTypes.func
}

export default function MailCompose({ isOpenCompose, onCloseCompose }) {
  const [fullScreen, setFullScreen] = useState(false)
  const [message, setMessage] = useState('')
  const selectedCards = useCommerceDetailsCard(state => state?.selectedCards)

  const isDesktop = useResponsive('up', 'sm')

  const handleChangeMessage = value => {
    setMessage(value)
  }

  const handleExitFullScreen = () => {
    setFullScreen(false)
  }

  const handleEnterFullScreen = () => {
    setFullScreen(true)
  }

  const handleClose = () => {
    onCloseCompose()
    setFullScreen(false)
  }

  if (!isOpenCompose) {
    return null
  }

  return (
    <>
      <Backdrop open={fullScreen || !isDesktop} sx={{ zIndex: 1998 }} />
      <RootStyle
        sx={theme => ({
          ...(fullScreen && {
            top: 0,
            left: 0,
            zIndex: 2000,
            margin: 'auto',
            width: {
              xs: `calc(100% - 24px)`,
              md: `calc(100% - 80px)`
            },
            height: {
              xs: `calc(100% - 24px)`,
              md: `calc(100% - 80px)`
            }
          })
        })}
      >
        <Box
          sx={{
            pl: 3,
            pr: 1,
            height: 60,
            display: 'flex',
            alignItems: 'center'
          }}
        >
          <Typography variant="h6">Nuevo Mensaje</Typography>
          <Box sx={{ flexGrow: 1 }} />

          <IconButton onClick={fullScreen ? handleExitFullScreen : handleEnterFullScreen}>
            {fullScreen ? (
              <CloseFullscreen sx={{ width: 20, height: 20 }} />
            ) : (
              <OpenInFull sx={{ width: 20, height: 20 }} />
            )}
          </IconButton>

          <IconButton onClick={handleClose}>
            <Close sx={{ width: 20, height: 20 }} />
          </IconButton>
        </Box>

        <Divider />
        <Stack p={3}>
          <Stack flexDirection={'row'} flexWrap={'wrap'} flexGrow={1} gap={1}>
            {selectedCards?.map(card => (
              <Tooltip
                key={card?.id}
                title={card?.cardNumberHidden || ''}
                arrow
                followCursor
                PopperProps={{ style: { zIndex: 2001 } }}
              >
                <Chip avatar={<Avatar>C</Avatar>} label={card?.assignCommerce?.name} />
              </Tooltip>
            ))}
          </Stack>
        </Stack>

        <Divider />

        <InputStyle disableUnderline placeholder="Asunto" />

        <Editor
          simple
          isValidation={false}
          id="compose-mail"
          value={message}
          onChange={handleChangeMessage}
          placeholder="Escribe tu mensaje ..."
          sx={{
            borderColor: 'transparent',
            position: 'relative',
            flexGrow: 1,
            overflow: 'hidden'
          }}
        />

        <Divider />

        <Box sx={{ py: 2, px: 3, display: 'flex', justifyContent: 'flex-end', alignItems: 'center' }}>
          <LoadingButton variant="contained">Enviar</LoadingButton>
        </Box>
      </RootStyle>
    </>
  )
}
