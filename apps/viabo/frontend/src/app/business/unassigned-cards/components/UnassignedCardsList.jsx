import { useEffect, useMemo } from 'react'

import { Box, Stack, Zoom } from '@mui/material'
import { useTheme } from '@mui/material/styles'
import { shallow } from 'zustand/shallow'

import { UnassignedCard } from '@/app/business/unassigned-cards/components/index'
import { UnassignedToolbar } from '@/app/business/unassigned-cards/components/UnassignedToolbar'
import { useUnassignedCards } from '@/app/business/unassigned-cards/store'
import { CardsList } from '@/app/shared/components'
import { Scrollbar } from '@/shared/components/scroll'

export function UnassignedCardsList({ unassignedCards }) {
  const data = unassignedCards?.data
  const cards = useUnassignedCards(state => state.cards)
  const setIndexCards = useUnassignedCards(state => state.setIndexCards, shallow)
  const theme = useTheme()

  const rowsSelected = useMemo(
    () => cards?.map(selected => data.findIndex(card => card.id === selected.id)) || [],
    [cards, data]
  )

  useEffect(() => {
    setIndexCards(rowsSelected)
  }, [rowsSelected])

  const transitionDuration = {
    enter: theme.transitions.duration.enteringScreen,
    exit: theme.transitions.duration.leavingScreen
  }

  return (
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
  )
}
