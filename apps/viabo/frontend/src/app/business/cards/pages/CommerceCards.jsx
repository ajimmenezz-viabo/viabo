import { ContainerPage } from '@/shared/components/containers/ContainerPage'
import { HeaderPage } from '@/shared/components/layout'
import { Page } from '@/shared/components/containers'
import { BusinessBreadcrumbs } from '@/app/business/shared/routes'
import { CommerceCardsLayout } from '@/app/business/cards/components'

export default function CommerceCards() {
  return (
    <Page title="Tarjetas del Comercio">
      <ContainerPage>
        <HeaderPage name={'Tarjetas del Comercio'} breadcrumbs={BusinessBreadcrumbs} />
        <CommerceCardsLayout />
      </ContainerPage>
    </Page>
  )
}
