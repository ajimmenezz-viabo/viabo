import { lazy, useEffect } from 'react'

import { Stack, Typography } from '@mui/material'

import { useFindSpeiAdminCompanyUsers } from '../../hooks'
import { useSpeiCompaniesStore } from '../../store'

import { RightPanel } from '@/app/shared/components'
import { RequestLoadingComponent } from '@/shared/components/loadings'
import { Lodable } from '@/shared/components/lodables'
import { ErrorRequestPage } from '@/shared/components/notifications'
import { Scrollbar } from '@/shared/components/scroll'

const SpeiNewCompanyForm = Lodable(lazy(() => import('./SpeiNewCompanyForm')))

const SpeiNewCompanyDrawer = () => {
  const { openNewCompany, setOpenNewSpeiCompany } = useSpeiCompaniesStore()

  const { data: users, isLoading, isError, error, refetch } = useFindSpeiAdminCompanyUsers({ enabled: false })

  useEffect(() => {
    if (openNewCompany) {
      refetch()
    }
  }, [openNewCompany])

  const handleClose = () => {
    setOpenNewSpeiCompany(false)
  }

  return (
    <RightPanel
      open={openNewCompany}
      handleClose={handleClose}
      titleElement={
        <Stack>
          <Typography variant={'h6'}>{'Nueva Empresa'}</Typography>
        </Stack>
      }
    >
      <Scrollbar containerProps={{ sx: { flexGrow: 0, height: 'auto' } }}>
        <Stack spacing={3} p={3}>
          {isLoading && <RequestLoadingComponent />}
          {isError && !isLoading && (
            <ErrorRequestPage errorMessage={error} titleMessage={'Lista de Usuarios'} handleButton={() => refetch()} />
          )}
          {!isError && !isLoading && openNewCompany && (
            <SpeiNewCompanyForm adminCompanyUsers={users} onSuccess={handleClose} />
          )}
        </Stack>
      </Scrollbar>
    </RightPanel>
  )
}

export default SpeiNewCompanyDrawer
