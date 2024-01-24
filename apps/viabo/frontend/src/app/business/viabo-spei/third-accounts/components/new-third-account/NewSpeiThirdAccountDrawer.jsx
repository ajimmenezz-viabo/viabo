import { lazy, useEffect } from 'react'

import { Stack, Typography } from '@mui/material'

import { useFindSpeiBanks } from '../../hooks'
import { useSpeiThirdAccounts } from '../../store'

import { RightPanel } from '@/app/shared/components'
import { RequestLoadingComponent } from '@/shared/components/loadings'
import { Lodable } from '@/shared/components/lodables'
import { ErrorRequestPage } from '@/shared/components/notifications'
import { Scrollbar } from '@/shared/components/scroll'

const NewSpeiThirdAccountForm = Lodable(lazy(() => import('./NewSpeiThirdAccountForm')))

const NewSpeiThirdAccountDrawer = () => {
  const { openNewAccount, setOpenNewSpeiThirdAccount, account, setSpeiThirdAccount } = useSpeiThirdAccounts()

  const { data: catalogBanks, isLoading, isError, error, refetch } = useFindSpeiBanks({ enabled: false })

  useEffect(() => {
    if (openNewAccount) {
      refetch()
    }
  }, [openNewAccount])

  const handleClose = () => {
    setOpenNewSpeiThirdAccount(false)
    setSpeiThirdAccount(null)
  }

  return (
    <RightPanel
      open={openNewAccount}
      handleClose={handleClose}
      titleElement={
        <Stack>
          <Typography variant={'h6'}>{account ? 'Editar Cuenta de Terceros' : 'Nueva Cuenta de Terceros'}</Typography>
        </Stack>
      }
    >
      <Scrollbar containerProps={{ sx: { flexGrow: 0, height: 'auto' } }}>
        <Stack spacing={3} p={3}>
          {isLoading && <RequestLoadingComponent />}
          {isError && !isLoading && (
            <ErrorRequestPage errorMessage={error} titleMessage={'Lista de Bancos'} handleButton={() => refetch()} />
          )}
          {!isError && !isLoading && openNewAccount && (
            <NewSpeiThirdAccountForm account={account} catalogBanks={catalogBanks} onSuccess={handleClose} />
          )}
        </Stack>
      </Scrollbar>
    </RightPanel>
  )
}

export default NewSpeiThirdAccountDrawer
