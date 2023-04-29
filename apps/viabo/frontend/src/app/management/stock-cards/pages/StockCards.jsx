import { Page } from '@/shared/components/containers'
import { ManagementBreadcrumbs } from '@/app/management/shared/components'
import { HeaderPage } from '@/shared/components/layout'
import { ContainerPage } from '@/shared/components/containers/ContainerPage'
import { StockCardSidebar, StockCardsList } from '@/app/management/stock-cards/components'
import { useState } from 'react'
import { useSnackbar } from 'notistack'
import { useFindAffiliatedCommerces, useFindCardTypes } from '@/app/management/stock-cards/hooks'

export default function StockCards() {
  const [open, setOpen] = useState(false)
  const { data: affiliatedCommerces, isSuccess, isLoading } = useFindAffiliatedCommerces()
  const { data: cardTypes, isSuccess: isSuccessCardTypes, isLoading: isLoadingCardTypes } = useFindCardTypes()
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

  return (
    <Page title="Stock de Tarjetas">
      <ContainerPage>
        <HeaderPage
          name={'Stock de Tarjetas'}
          breadcrumbs={ManagementBreadcrumbs}
          buttonName={'Nueva Tarjeta'}
          onClick={handleNewCard}
          loading={isLoading || isLoadingCardTypes}
        />
        <StockCardsList />
        <StockCardSidebar open={open} setOpen={setOpen} />
      </ContainerPage>
    </Page>
  )
}
