import { CATALOGS_PATHS } from '../../shared/routes'

import { PATH_DASHBOARD } from '@/routes'
import { Page } from '@/shared/components/containers'
import { ContainerPage } from '@/shared/components/containers/ContainerPage'
import { HeaderPage } from '@/shared/components/layout'

export const CatalogCauses = () => {
  console.log('test')

  return (
    <Page title="Catálogo de Causas">
      <ContainerPage>
        <HeaderPage
          name={'Catálogo de Causas'}
          links={[
            { name: 'Inicio', href: PATH_DASHBOARD.root },
            { name: 'Catálogos', href: CATALOGS_PATHS.causes },
            { name: 'Causas' }
          ]}
        />
      </ContainerPage>
    </Page>
  )
}
