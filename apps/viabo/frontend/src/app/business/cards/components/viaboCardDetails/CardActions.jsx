import { Box, Button, CircularProgress, Divider, Stack, Typography } from '@mui/material'
import { Scrollbar } from '@/shared/components/scroll'
import { CurrencyExchangeOutlined, PasswordTwoTone, PowerSettingsNewTwoTone } from '@mui/icons-material'
import { useEffect, useState } from 'react'

export function CardActions({ card }) {
  const [openCVV, setOpenCVV] = useState(false)

  return (
    <>
      <Box sx={{ mb: 2 }}>
        <Scrollbar>
          <Stack
            direction="row"
            divider={<Divider orientation="vertical" flexItem sx={{ borderStyle: 'dashed' }} />}
            sx={{ py: 3 }}
            spacing={1}
          >
            <Stack direction="row" alignItems="center" justifyContent="center" sx={{ width: 1, minWidth: 150 }}>
              <Button
                startIcon={openCVV ? <CircularStatic handleFinish={() => setOpenCVV(false)} /> : <PasswordTwoTone />}
                variant={openCVV ? 'inherit' : 'outlined'}
                color={openCVV ? 'inherit' : 'primary'}
                onClick={() => setOpenCVV(!openCVV)}
              >
                {openCVV ? `CVV: ${card?.cvv}` : 'Ver CVV'}
              </Button>
            </Stack>

            <Stack direction="row" alignItems="center" justifyContent="center" sx={{ width: 1, minWidth: 150 }}>
              <Button startIcon={<CurrencyExchangeOutlined />} variant={'outlined'}>
                Transferir
              </Button>
            </Stack>
            <Stack direction="row" alignItems="center" justifyContent="center" sx={{ width: 1, minWidth: 200 }}>
              <Button startIcon={<PowerSettingsNewTwoTone />} color={'error'} variant={'outlined'}>
                Apagar Tarjeta
              </Button>
            </Stack>
          </Stack>
        </Scrollbar>
      </Box>
    </>
  )
}

function CircularStatic({ handleFinish, duration = 10 }) {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    let timer
    if (progress < 100) {
      timer = setInterval(() => {
        setProgress(prevProgress => prevProgress + 100 / duration)
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
          {`${Math.ceil((duration * (100 - progress)) / 100)} `}
        </Typography>
      </Box>
    </Box>
  )
}
