import { Page } from '@/shared/components/containers'
import { ManagementBreadcrumbs } from '@/app/management/shared/components'
import { HeaderPage } from '@/shared/components/layout'
import { ContainerPage } from '@/shared/components/containers/ContainerPage'
import { StockCardSidebar, StockCardsList } from '@/app/management/stock-cards/components'
import { lazy, useEffect, useState } from 'react'
import { useSnackbar } from 'notistack'
import { useFindAffiliatedCommerces, useFindCardTypes, useFindStockCards } from '@/app/management/stock-cards/hooks'
import { Button } from '@mui/material'
import { AddBusinessTwoTone } from '@mui/icons-material'
import { useAssignCardStore } from '@/app/management/stock-cards/store'
import { Lodable } from '@/shared/components/lodables'

const AssignCardModal = Lodable(lazy(() => import('@/app/management/stock-cards/components/AssignCardModal')))

export default function StockCards() {
  const [open, setOpen] = useState(false)
  const { data: affiliatedCommerces, isSuccess, isLoading } = useFindAffiliatedCommerces()
  const { data: cardTypes, isSuccess: isSuccessCardTypes, isLoading: isLoadingCardTypes } = useFindCardTypes()
  const stockCards = useFindStockCards()
  const { data: cards } = stockCards
  const setOpenAssignCards = useAssignCardStore(state => state.setOpen)
  const setReadyToAssign = useAssignCardStore(state => state.setReadyToAssign)
  const openAssignCard = useAssignCardStore(state => state.open)
  const { enqueueSnackbar } = useSnackbar()

  const handleNewCard = () => {
    if (affiliatedCommerces && cardTypes && isSuccessCardTypes && isSuccess) {
      setOpen(true)
    } else {
      enqueueSnackbar(`Por el momento no se puede crear una tarjeta. Intente nuevamenta o reporte a sistemas`, {
        variant: 'warning',
        autoHideDuration: 5000
      })
    }
  }

  const handleAssignCards = () => {
    if (affiliatedCommerces && affiliatedCommerces.length > 0 && cardTypes && cardTypes.length > 0) {
      setOpenAssignCards(true)
    } else {
      setOpenAssignCards(false)
      enqueueSnackbar(`Por el momento no se puede asignar tarjetas. No hay comercios disponibles`, {
        variant: 'warning',
        autoHideDuration: 5000
      })
    }
  }

  useEffect(() => {
    if (affiliatedCommerces && affiliatedCommerces.length > 0) {
      setReadyToAssign(true)
    } else {
      setReadyToAssign(false)
    }
  }, [affiliatedCommerces])

  return (
    <Page title="Stock de Tarjetas">
      <ContainerPage>
        <HeaderPage
          name={'Stock de Tarjetas'}
          breadcrumbs={ManagementBreadcrumbs}
          buttonName={'Nueva Tarjeta'}
          onClick={handleNewCard}
          loading={isLoading || isLoadingCardTypes}
          buttons={
            cards && cards?.length > 0 ? (
              <Button
                sx={{ mr: { sm: 3 }, mb: { xs: 3, sm: 0 }, color: 'black' }}
                type="button"
                color="secondary"
                variant="contained"
                onClick={handleAssignCards}
                startIcon={<AddBusinessTwoTone />}
              >
                Asignar Tarjetas
              </Button>
            ) : null
          }
        />
        <StockCardsList stockCards={stockCards} />
        <StockCardSidebar open={open} setOpen={setOpen} />
        {openAssignCard && <AssignCardModal />}
      </ContainerPage>
    </Page>
  )
}
