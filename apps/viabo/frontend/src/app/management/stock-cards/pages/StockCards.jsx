import { Page } from '@/shared/components/containers'
import { ManagementBreadcrumbs } from '@/app/management/shared/components'
import { HeaderPage } from '@/shared/components/layout'
import { ContainerPage } from '@/shared/components/containers/ContainerPage'
import { StockCardSidebar, StockCardsList } from '@/app/management/stock-cards/components'
import { useState } from 'react'
import { useSnackbar } from 'notistack'
import { useFindAffiliatedCommerces } from '@/app/management/stock-cards/hooks/useFindAffiliatedCommerces'

export default function StockCards() {
  const [open, setOpen] = useState(false)
  const { data: affiliatedCommerces, isSuccess, isLoading } = useFindAffiliatedCommerces()
  const { enqueueSnackbar } = useSnackbar()

  const handleNewCard = () => {
    if (affiliatedCommerces && isSuccess) {
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
          loading={isLoading}
        />
        <StockCardsList />
        <StockCardSidebar open={open} setOpen={setOpen} />
      </ContainerPage>
    </Page>
  )
}
