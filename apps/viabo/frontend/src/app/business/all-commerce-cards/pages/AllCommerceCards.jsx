import { useState } from 'react'

import { Apps, FormatListBulleted } from '@mui/icons-material'
import { Box, ToggleButton, ToggleButtonGroup } from '@mui/material'

import { AssignCardsSidebar } from '@/app/business/all-commerce-cards/components'
import { CommerceCardsList } from '@/app/business/all-commerce-cards/components/CommerceCardsList'
import { CommerceCardsTable } from '@/app/business/all-commerce-cards/components/CommerceCardsTable'
import { useFindAllCommerceCards } from '@/app/business/all-commerce-cards/hooks'
import { useCommerceCards } from '@/app/business/all-commerce-cards/store'
import { BUSINESS_PATHS, BUSINESS_ROUTES_NAMES } from '@/app/business/shared/routes'
import { PATH_DASHBOARD } from '@/routes'
import { Page } from '@/shared/components/containers'
import { ContainerPage } from '@/shared/components/containers/ContainerPage'
import { HeaderPage } from '@/shared/components/layout'

export default function AllCommerceCards() {
  const unassignedCards = useFindAllCommerceCards()

  const [view, setView] = useState('1')
  const handleChange = (event, newValue) => {
    setView(newValue)
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
              { name: 'Administracion', href: BUSINESS_PATHS.cards },
              { name: BUSINESS_ROUTES_NAMES.unassignedCards.name }
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
          {view === '1' && (
            <CommerceCardsTable cards={unassignedCards.data} isLoading={unassignedCards.isLoading} rows={rows} />
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
