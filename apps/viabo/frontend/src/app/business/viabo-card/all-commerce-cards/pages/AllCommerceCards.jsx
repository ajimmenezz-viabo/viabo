import { useEffect, useRef } from 'react'

import { useQueryClient } from '@tanstack/react-query'

import { ALL_COMMERCE_CARDS_KEYS } from '../adapters'
import { CommerceCardsTable } from '../components/table/CommerceCardsTable'

import { AssignCardsSidebar } from '@/app/business/viabo-card/all-commerce-cards/components'
import { useCommerceCards } from '@/app/business/viabo-card/all-commerce-cards/store'
import { VIABO_CARD_PATHS, VIABO_CARD_ROUTES_NAMES } from '@/app/business/viabo-card/routes'
import { PATH_DASHBOARD } from '@/routes'
import { Page } from '@/shared/components/containers'
import { ContainerPage } from '@/shared/components/containers/ContainerPage'
import { HeaderPage } from '@/shared/components/layout'

export default function AllCommerceCards() {
  const openAssignCards = useCommerceCards(state => state.openAssign)
  const setOpenAssign = useCommerceCards(state => state.setOpenAssign)
  const queryClient = useQueryClient()

  const cardsTable = useRef(null)

  useEffect(
    () => () => {
      const keysArray = Object.values(ALL_COMMERCE_CARDS_KEYS)
      queryClient.cancelQueries(keysArray)
    },
    []
  )

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
          />
          <CommerceCardsTable refCommerceCardsTable={cardsTable} />
          <AssignCardsSidebar
            open={openAssignCards}
            handleClose={() => {
              setOpenAssign(false)
            }}
            handleSuccess={() => {
              setOpenAssign(false)
              cardsTable?.current?.resetRowSelection()
            }}
          />
        </ContainerPage>
      </Page>
    </>
  )
}
