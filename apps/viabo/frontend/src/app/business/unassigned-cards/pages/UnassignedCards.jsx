import { Page } from '@/shared/components/containers'
import { ContainerPage } from '@/shared/components/containers/ContainerPage'
import { HeaderPage } from '@/shared/components/layout'
import { PATH_DASHBOARD } from '@/routes'
import { BUSINESS_PATHS, BUSINESS_ROUTES_NAMES } from '@/app/business/shared/routes'
import { useFindUnassignedCards } from '@/app/business/unassigned-cards/hooks'
import { CardsList } from '@/app/shared/components'
import { UnassignedCard, UnassignedToolbar } from '@/app/business/unassigned-cards/components'
import { Box, Stack, Zoom } from '@mui/material'
import { useTheme } from '@mui/material/styles'
import { Scrollbar } from '@/shared/components/scroll'
import { useUnassignedCards } from '@/app/business/unassigned-cards/store'

export default function UnassignedCards() {
  const unassignedCards = useFindUnassignedCards()
  const theme = useTheme()
  const cards = useUnassignedCards(state => state.cards)

  const transitionDuration = {
    enter: theme.transitions.duration.enteringScreen,
    exit: theme.transitions.duration.leavingScreen
  }

  return (
    <>
      <Page title="Tarjetas Sin Asignar del Comercio">
        <ContainerPage sx={{ height: '100%' }}>
          <HeaderPage
            name={'Tarjetas Sin Asignar'}
            links={[
              { name: 'Inicio', href: PATH_DASHBOARD.root },
              { name: 'Administracion', href: BUSINESS_PATHS.cards },
              { name: BUSINESS_ROUTES_NAMES.unassignedCards.name }
            ]}
          />
          <Stack flexDirection={'row'} sx={{ height: '100vh', display: 'flex' }}>
            <Stack
              sx={theme => ({
                overflow: 'hidden',
                flexDirection: 'column',
                flexGrow: 1
              })}
            >
              <Zoom
                in={cards?.length > 0}
                timeout={transitionDuration}
                style={{
                  transitionDelay: `${cards?.length > 0 ? transitionDuration.exit : 0}ms`
                }}
                unmountOnExit
              >
                <Box>
                  <UnassignedToolbar cards={unassignedCards?.data} />
                </Box>
              </Zoom>

              <Scrollbar>
                <CardsList
                  cards={unassignedCards}
                  emptyMessage={'No hay tarjetas sin asignar'}
                  cardComponent={UnassignedCard}
                  my={3}
                />
              </Scrollbar>
            </Stack>
          </Stack>
        </ContainerPage>
      </Page>
    </>
  )
}
