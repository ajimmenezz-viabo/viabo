import { Box, Button, CircularProgress, Divider, Stack, Typography } from '@mui/material'
import { Scrollbar } from '@/shared/components/scroll'
import { CurrencyExchangeOutlined, PasswordTwoTone, PowerSettingsNewTwoTone } from '@mui/icons-material'
import { useEffect, useState } from 'react'
import { useToggleStatusCard } from '@/app/business/cards/hooks'
import LoadingButton from '@mui/lab/LoadingButton'
import { useIsFetching } from '@tanstack/react-query'
import { CARDS_COMMERCES_KEYS } from '@/app/business/cards/adapters'

export function CardActions({ card, cardDetails }) {
  const [openCVV, setOpenCVV] = useState(false)
  const { mutate: changeStatusCard, isLoading: isChangingStatusCard } = useToggleStatusCard()
  const isFetchingCardDetails = useIsFetching([CARDS_COMMERCES_KEYS.CARD_INFO, card?.id])

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
              <LoadingButton
                loading={isChangingStatusCard || isFetchingCardDetails === 1}
                startIcon={<PowerSettingsNewTwoTone />}
                onClick={() => {
                  changeStatusCard({ ...card, cardON: !cardDetails?.cardON })
                }}
                color={cardDetails?.cardON ? 'error' : 'success'}
                variant={'outlined'}
              >
                {cardDetails?.cardON ? 'Apagar Tarjeta' : 'Encender Tarjeta'}
              </LoadingButton>
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
