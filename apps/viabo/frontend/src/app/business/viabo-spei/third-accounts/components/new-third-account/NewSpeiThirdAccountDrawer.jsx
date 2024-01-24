import { lazy } from 'react'

import { useSpeiThirdAccounts } from '../../store'

import { RightPanel } from '@/app/shared/components'
import { Lodable } from '@/shared/components/lodables'

const NewSpeiThirdAccountForm = Lodable(lazy(() => import('./NewSpeiThirdAccountForm')))

const NewSpeiThirdAccountDrawer = () => {
  const { openNewAccount, setOpenNewSpeiThirdAccount, account, setSpeiThirdAccount } = useSpeiThirdAccounts()

  const handleClose = () => {
    setOpenNewSpeiThirdAccount(false)
    setSpeiThirdAccount(null)
  }

  return (
    <RightPanel
      open={openNewAccount}
      handleClose={handleClose}
      titleElement={account ? 'Editar Cuenta de Terceros' : 'Nueva Cuenta de Terceros'}
    >
      {openNewAccount && <NewSpeiThirdAccountForm account={account} />}
    </RightPanel>
  )
}

export default NewSpeiThirdAccountDrawer
