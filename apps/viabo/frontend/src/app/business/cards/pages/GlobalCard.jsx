import { Page } from '@/shared/components/containers'
import { ContainerPage } from '@/shared/components/containers/ContainerPage'
import { HeaderPage } from '@/shared/components/layout'
import { PATH_DASHBOARD } from '@/routes'
import { BUSINESS_PATHS, BUSINESS_ROUTES_NAMES } from '@/app/business/shared/routes'

export default function GlobalCard() {
  return (
    <Page title="Tarjeta Global">
      <ContainerPage>
        <HeaderPage
          name={'Tarjeta Global'}
          links={[
            { name: 'Inicio', href: PATH_DASHBOARD.root },
            { name: 'Administracion', href: BUSINESS_PATHS.cards },
            { name: BUSINESS_ROUTES_NAMES.globalCard.name }
          ]}
        />
      </ContainerPage>
    </Page>
  )
}
