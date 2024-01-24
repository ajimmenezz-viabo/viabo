import { useMemo } from 'react'

import { VIABO_SPEI_PATHS, VIABO_SPEI_ROUTES } from '../routes/viabo-spei-paths'

export const useViaboSpeiBreadCrumbs = () => {
  const thirdAccounts = useMemo(
    () => [
      { name: 'Inicio', href: '/' },
      { name: VIABO_SPEI_ROUTES.root.name, href: VIABO_SPEI_PATHS.third_accounts },
      { name: 'Cuentas de Terceros' }
    ],
    []
  )

  return {
    thirdAccounts
  }
}
