import { useState } from 'react'

import { Apps, FormatListBulleted } from '@mui/icons-material'
import { Box, ToggleButton, ToggleButtonGroup } from '@mui/material'

import { CommerceCardsTable } from '../components/CommerceCardsTable'

import { AssignCardsSidebar } from '@/app/business/viabo-card/all-commerce-cards/components'
import { CommerceCardsList } from '@/app/business/viabo-card/all-commerce-cards/components/CommerceCardsList'
import { useFindAllCommerceCards } from '@/app/business/viabo-card/all-commerce-cards/hooks'
import { useCommerceCards } from '@/app/business/viabo-card/all-commerce-cards/store'
import { VIABO_CARD_PATHS, VIABO_CARD_ROUTES_NAMES } from '@/app/business/viabo-card/routes'
import { PATH_DASHBOARD } from '@/routes'
import { Page } from '@/shared/components/containers'
import { ContainerPage } from '@/shared/components/containers/ContainerPage'
import { HeaderPage } from '@/shared/components/layout'

export default function AllCommerceCards() {
  const unassignedCards = useFindAllCommerceCards()

  const [view, setView] = useState('1')
  const handleChange = (event, newValue) => {
    if (newValue) {
      setView(newValue)
    }
  }

  const rows = useCommerceCards(state => state.rows)
  const openAssignCards = useCommerceCards(state => state.openAssign)
  const setOpenAssign = useCommerceCards(state => state.setOpenAssign)
  const resetCardsSelected = useCommerceCards(state => state.resetCards)

  return (
    <>
      <Page title="Stock de Tarjetas del Comercio">
        <ContainerPage sx={{ height: '100%' }}>
          <HeaderPage
            name={'Stock de Tarjetas'}
            links={[
              { name: 'Inicio', href: PATH_DASHBOARD.root },
              { name: 'Viabo Card', href: VIABO_CARD_PATHS.allCards },
              { name: VIABO_CARD_ROUTES_NAMES.allCards.name }
            ]}
            buttons={
              <Box display={'flex'} justifyContent={'center'} mt={{ xs: 2, md: 0 }}>
                <ToggleButtonGroup
                  size={'small'}
                  color="primary"
                  value={view}
                  exclusive
                  onChange={handleChange}
                  aria-label="Platform"
                >
                  <ToggleButton value="1">
                    <FormatListBulleted />
                  </ToggleButton>
                  <ToggleButton value="2">
                    <Apps />
                  </ToggleButton>
                </ToggleButtonGroup>
              </Box>
            }
          />
          {view === '2' && <CommerceCardsList commerceCards={unassignedCards} />}
          {view === '1' && <CommerceCardsTable cards={unassignedCards} rows={rows} />}
          <AssignCardsSidebar
            open={openAssignCards}
            handleClose={() => {
              setOpenAssign(false)
            }}
            handleSuccess={() => {
              setOpenAssign(false)
              resetCardsSelected()
            }}
          />
        </ContainerPage>
      </Page>
    </>
  )
}