import { Page } from '@/shared/components/containers'
import { ContainerPage } from '@/shared/components/containers/ContainerPage'
import { HeaderPage } from '@/shared/components/layout'
import { PATH_DASHBOARD } from '@/routes'
import { BUSINESS_PATHS, BUSINESS_ROUTES_NAMES } from '@/app/business/shared/routes'
import { useFindUnassignedCards } from '@/app/business/unassigned-cards/hooks'
import { ToggleButton, ToggleButtonGroup } from '@mui/material'
import { Apps, FormatListBulleted } from '@mui/icons-material'
import { useState } from 'react'
import { UnassignedCardsList } from '@/app/business/unassigned-cards/components/UnassignedCardsList'
import { UnassignedCardsTable } from '@/app/business/unassigned-cards/components/UnassignedCardsTable'
import { useUnassignedCards } from '@/app/business/unassigned-cards/store'
import { AssignCardsSidebar } from '@/app/business/unassigned-cards/components'

export default function UnassignedCards() {
  const unassignedCards = useFindUnassignedCards()

  const [view, setView] = useState('1')
  const handleChange = (event, newValue) => {
    setView(newValue)
  }

  const rows = useUnassignedCards(state => state.rows)
  const openAssignCards = useUnassignedCards(state => state.openAssign)
  const setOpenAssign = useUnassignedCards(state => state.setOpenAssign)
  const resetCardsSelected = useUnassignedCards(state => state.resetCards)

  return (
    <>
      <Page title="Stock de Tarjetas del Comercio">
        <ContainerPage sx={{ height: '100%' }}>
          <HeaderPage
            name={'Stock de Tarjetas'}
            links={[
              { name: 'Inicio', href: PATH_DASHBOARD.root },
              { name: 'Administracion', href: BUSINESS_PATHS.cards },
              { name: BUSINESS_ROUTES_NAMES.unassignedCards.name }
            ]}
            buttons={
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
            }
          />
          {view === '2' && <UnassignedCardsList unassignedCards={unassignedCards} />}
          {view === '1' && (
            <UnassignedCardsTable cards={unassignedCards.data} isLoading={unassignedCards.isLoading} rows={rows} />
          )}
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
