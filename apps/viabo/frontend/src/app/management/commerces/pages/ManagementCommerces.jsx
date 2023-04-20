import { Page } from '@/shared/components/containers'
import { ContainerPage } from '@/shared/components/containers/ContainerPage'
import { HeaderPage } from '@/shared/components/layout'
import { ManagementBreadcrumbs } from '@/app/management/shared/components'
import { CommerceLayout } from '@/app/management/commerces/components'

export default function ManagementCommerces() {
  return (
    <Page title="Administracion Comercios | Viabo">
      <ContainerPage>
        <HeaderPage name={'Comercios'} breadcrumbs={ManagementBreadcrumbs} />
        <CommerceLayout />
      </ContainerPage>
    </Page>
  )
}
