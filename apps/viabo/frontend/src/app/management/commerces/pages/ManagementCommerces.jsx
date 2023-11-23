import { CommerceList } from '@/app/management/commerces/components'
import { MANAGEMENT_PATHS, MANAGEMENT_ROUTES_NAMES } from '@/app/management/shared/routes'
import { PATH_DASHBOARD } from '@/routes'
import { Page } from '@/shared/components/containers'
import { ContainerPage } from '@/shared/components/containers/ContainerPage'
import { HeaderPage } from '@/shared/components/layout'

export default function ManagementCommerces() {
  return (
    <Page title="Administración Comercios">
      <ContainerPage>
        <HeaderPage
          name={'Comercios'}
          links={[
            { name: 'Inicio', href: PATH_DASHBOARD.root },
            { name: 'Administración', href: MANAGEMENT_PATHS.commerces },
            { name: MANAGEMENT_ROUTES_NAMES.commerces.name }
          ]}
        />
        <CommerceList />
      </ContainerPage>
    </Page>
  )
}
