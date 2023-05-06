import { ContainerPage } from '@/shared/components/containers/ContainerPage'
import { HeaderPage } from '@/shared/components/layout'
import { Page } from '@/shared/components/containers'
import { BUSINESS_PATHS, BUSINESS_ROUTES_NAMES } from '@/app/business/shared/routes'
import { CommerceCardsLayout } from '@/app/business/cards/components'
import { PATH_DASHBOARD } from '@/routes'

export default function CommerceCards() {
  return (
    <Page title="Tarjetas del Comercio">
      <ContainerPage>
        <HeaderPage
          name={'Tarjetas del Comercio'}
          links={[
            { name: 'Inicio', href: PATH_DASHBOARD.root },
            { name: 'Administracion', href: BUSINESS_PATHS.cards },
            { name: BUSINESS_ROUTES_NAMES.cards.name }
          ]}
        />
        <CommerceCardsLayout />
      </ContainerPage>
    </Page>
  )
}
