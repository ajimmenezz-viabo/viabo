import { useEffect, useState } from 'react'
import { Box, Button, CircularProgress, Divider, Stack, Toolbar, Typography } from '@mui/material'
import { BadgeStatus } from '@/shared/components/notifications'
import { CardNumber } from '@/app/shared/components/card'
import { PasswordTwoTone } from '@mui/icons-material'

export function CardDetailsHeader({ card }) {
  const [openCVV, setOpenCVV] = useState(false)
  const [openNIP, setOpenNIP] = useState(false)

  useEffect(() => {
    setOpenCVV(false)
    setOpenNIP(false)
  }, [card?.id])

  return (
    <Toolbar
      sx={theme => ({
        position: 'sticky',
        borderRadius: 1,
        py: 6,
        top: 0,
        zIndex: 1,
        backgroundColor: theme.palette.primary.light,
        color: 'white'
      })}
    >
      <Stack
        flexDirection={{ xs: 'column', md: 'row' }}
        justifyContent="space-between"
        sx={{ width: 1 }}
        gap={2}
        alignItems={'center'}
      >
        <Stack flexDirection="column" spacing={0} alignItems={{ xs: 'center', md: 'start' }}>
          <Stack flexDirection={'row'} gap={1}>
            <Typography variant="subtitle2">Disponible</Typography>
            <BadgeStatus size={'medium'} status={card?.cardON === true ? 'online' : 'offline'} />
          </Stack>
          <Stack direction={'row'} spacing={2} alignItems={'center'}>
            <Typography variant="h3">{card?.balanceFormatted}</Typography>
            <Typography variant="caption">MXN</Typography>
          </Stack>
        </Stack>
        <Stack justifyContent="flex-end" spacing={1} alignItems={{ xs: 'center', md: 'end' }}>
          <CardNumber card={card} color={'#fff'} />
          <Stack
            display="flex"
            flexDirection={'row'}
            alignItems={'center'}
            justifyContent="flex-end"
            gap={1}
            divider={<Divider orientation="vertical" flexItem sx={{ borderStyle: 'dashed' }} />}
          >
            <Button
              startIcon={openCVV ? <CircularStatic handleFinish={() => setOpenCVV(false)} /> : <PasswordTwoTone />}
              color={'inherit'}
              onClick={() => setOpenCVV(prev => !prev)}
            >
              {openCVV ? `${card?.cvv}` : 'CVV'}
            </Button>
            <Button
              startIcon={openNIP ? <CircularStatic handleFinish={() => setOpenNIP(false)} /> : <PasswordTwoTone />}
              color={'inherit'}
              onClick={() => setOpenNIP(prev => !prev)}
            >
              {openNIP ? `123` : 'NIP'}
            </Button>
          </Stack>
        </Stack>
      </Stack>
    </Toolbar>
  )
}

function CircularStatic({ handleFinish, duration = 10 }) {
  const [progress, setProgress] = useState(100)

  useEffect(() => {
    let timer
    if (progress > 0) {
      timer = setInterval(() => {
        setProgress(prevProgress => prevProgress - 100 / duration)
      }, 1000)
    } else {
      handleFinish()
    }
    return () => clearInterval(timer)
  }, [progress, duration])

  return (
    <Box sx={{ position: 'relative', display: 'inline-flex', minWidth: 60 }}>
      <CircularProgress variant="determinate" value={progress} />
      <Box
        sx={{
          top: 0,
          left: 0,
          bottom: 0,
          right: 20,
          position: 'absolute',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}
      >
        <Typography variant="caption" component="div" color="text.primary">
          {`${Math.ceil((duration * progress) / 100)} `}
        </Typography>
      </Box>
    </Box>
  )
}
