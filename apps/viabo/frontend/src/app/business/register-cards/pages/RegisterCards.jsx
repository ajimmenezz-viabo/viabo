import { Page } from '@/shared/components/containers'
import { Box, CircularProgress, Container, Grid, Paper } from '@mui/material'
import { useTheme } from '@mui/material/styles'
import { useResponsive } from '@theme/hooks'
import { Suspense, useMemo } from 'react'
import { useCardUserAssign } from '@/app/business/register-cards/store'
import { CARD_ASSIGN_STEPS } from '@/app/business/register-cards/services'

export default function RegisterCards() {
  const theme = useTheme()
  const isDesktop = useResponsive('up', 'lg')

  const actualStep = useCardUserAssign(state => state.step)

  const selectedStep = useMemo(() => CARD_ASSIGN_STEPS.find(step => step.name === actualStep), [actualStep])

  if (!selectedStep) {
    return null
  }

  const root = {
    [theme.breakpoints.down('sm')]: {
      alignItems: '',
      justifyContent: ''
    },
    [theme.breakpoints.up('sm')]: {
      direction: 'column',
      alignItems: 'center',
      justifyContent: 'center'
    },
    height: '100vh'
  }

  const paper = {
    paddingTop: '24px',
    height: { xs: 1, sm: 1, md: '600px', lg: '600px', xl: '700px' },
    borderRadius: `${isDesktop ? '1rem' : '0'}`,
    backgroundColor: theme.palette.background.paper,
    boxShadow: '0 25px 50px -12px rgb(0 0 0 / 0.25)',
    display: 'flex',
    flexDirection: 'column',

    [theme.breakpoints.down('lg')]: {
      maxWidth: 'none',
      minHeight: '100%',
      '@media (orientation: landscape)': {
        maxWidth: 'none',
        minHeight: '100%'
      }
    }
  }

  const Component = selectedStep.content

  return (
    <Page title="Registro Tarjetas">
      <Grid component="main" container spacing={0} sx={root}>
        <Container sx={paper} maxWidth="xs" elevation={7} component={!isDesktop ? Box : Paper}>
          <Suspense fallback={<Loading />}>
            <Component />
          </Suspense>
        </Container>
      </Grid>
    </Page>
  )
}

function Loading() {
  return (
    <Box
      sx={{
        position: 'relative',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backdropFilter: 'blur(1px)',
        zIndex: theme => theme.zIndex.modal - 1
      }}
    >
      <CircularProgress />
    </Box>
  )
}
