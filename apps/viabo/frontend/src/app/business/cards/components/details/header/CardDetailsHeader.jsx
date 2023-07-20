import { useEffect, useState } from 'react'
import { Box, Button, CircularProgress, Divider, Stack, Switch, Toolbar, Typography } from '@mui/material'
import { CardNumber } from '@/app/shared/components/card'
import { PasswordTwoTone } from '@mui/icons-material'
import { useToggleStatusCard } from '@/app/business/cards/hooks'
import { CircularLoading } from '@/shared/components/loadings'
import { styled } from '@mui/material/styles'
import { useIsFetching } from '@tanstack/react-query'
import { CARDS_COMMERCES_KEYS } from '@/app/business/cards/adapters'

const IOSSwitch = styled(props => <Switch focusVisibleClassName=".Mui-focusVisible" disableRipple {...props} />)(
  ({ theme }) => ({
    width: 42,
    height: 26,
    padding: 0,
    '& .MuiSwitch-switchBase': {
      padding: 0,
      margin: 2,
      transitionDuration: '300ms',
      '&.Mui-checked': {
        transform: 'translateX(16px)',
        color: '#fff',
        '& + .MuiSwitch-track': {
          backgroundColor: theme.palette.mode === 'dark' ? '#2ECA45' : '#65C466',
          opacity: 1,
          border: 0
        },
        '&.Mui-disabled + .MuiSwitch-track': {
          opacity: 0.5
        }
      },
      '&.Mui-focusVisible .MuiSwitch-thumb': {
        color: '#33cf4d',
        border: '6px solid #fff'
      },
      '&.Mui-disabled .MuiSwitch-thumb': {
        color: theme.palette.mode === 'light' ? theme.palette.grey[100] : theme.palette.grey[600]
      },
      '&.Mui-disabled + .MuiSwitch-track': {
        opacity: theme.palette.mode === 'light' ? 0.7 : 0.3
      }
    },
    '& .MuiSwitch-thumb': {
      boxSizing: 'border-box',
      width: 22,
      height: 22
    },
    '& .MuiSwitch-track': {
      borderRadius: 26 / 2,
      backgroundColor: theme.palette.error.main,
      opacity: 1,
      transition: theme.transitions.create(['background-color'], {
        duration: 500
      })
    }
  })
)

export function CardDetailsHeader({ card }) {
  const [openCVV, setOpenCVV] = useState(false)
  const [openNIP, setOpenNIP] = useState(false)
  const { mutate: changeStatusCard, isLoading: isChangingStatusCard } = useToggleStatusCard()
  const isFetchingCardDetails = useIsFetching([CARDS_COMMERCES_KEYS.CARD_INFO, card?.id]) === 1

  useEffect(() => {
    setOpenCVV(false)
    setOpenNIP(false)
  }, [card?.id])

  const handleChange = event => {
    changeStatusCard({ ...card, cardON: !card?.cardON })
  }

  return (
    <Toolbar
      sx={theme => ({
        borderRadius: 1,
        position: 'relative',
        zIndex: 1,
        backgroundColor: theme.palette.primary.light,
        color: 'white',
        minHeight: 'auto!important',
        height: { xs: 1, sm: 'auto' },
        py: { xs: 0, sm: 2 }
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
          <Stack flexDirection={'row'} gap={1} alignItems={'center'}>
            <Typography variant="subtitle2">Disponible</Typography>
            {isChangingStatusCard || isFetchingCardDetails ? (
              <CircularLoading
                size={30}
                containerProps={{
                  display: 'flex',
                  ml: 1
                }}
              />
            ) : (
              <IOSSwitch
                disabled={isChangingStatusCard}
                color={!card?.cardON ? 'error' : 'success'}
                checked={card?.cardON || false}
                onChange={handleChange}
                sx={{ m: 1 }}
                inputProps={{ 'aria-label': 'controlled' }}
              />
            )}
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
            <Typography color={'#fff'} variant={'subtitle2'}>
              {card?.expiration}
            </Typography>
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
              {openNIP ? card?.nip : 'NIP'}
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