import { lazy, Suspense } from 'react'
import { useRegisterProcessStore } from '@/app/business/commerce/store'
import CommerceRegisterForm from '@/app/business/commerce/components/process/CommerceRegisterForm'
import { Box, Button, CircularProgress, Stack } from '@mui/material'
import { PROCESS_LIST } from '@/app/business/commerce/services'
import { Scrollbar } from '@/shared/components/scroll'

export const RegisterProcess = () => {
  const component = useRegisterProcessStore(state => state.getComponent())
  const returnComponent = useRegisterProcessStore(state => state.returnComponent)
  const store = useRegisterProcessStore()
  const { actualProcess } = store

  const handleBack = () => {
    returnComponent()
  }

  if (component) {
    const LazyComponent = lazy(component)
    return (
      <>
        <Box
          sx={{
            height: { xs: '100vh', sm: '100vh', md: '600px', xl: 'calc(100vh - 200px)' },
            minHeight: '600px',

            display: 'flex',
            flexDirection: 'column',
            zIndex: 1
          }}
          className="animate__animated animate__fadeIn"
        >
          <Suspense fallback={<LoadingSuspense />}>
            {actualProcess !== PROCESS_LIST.REGISTER && (
              <Stack m={5} mb={0} direction="flex">
                <Button onClick={handleBack}>{'< Regresar'}</Button>
              </Stack>
            )}
            <Scrollbar sx={{ maxHeight: { xs: '100vh', sm: '100vh', md: '600px', xl: 'calc(100vh - 200px)' } }}>
              <Box m={5}>
                <LazyComponent store={store} />
              </Box>
            </Scrollbar>
          </Suspense>
        </Box>
      </>
    )
  }

  return <CommerceRegisterForm store={store} />
}

const LoadingSuspense = () => (
  <Box
    sx={{
      position: 'relative',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      backdropFilter: 'blur(1px)',
      zIndex: theme => theme.zIndex.modal - 1
    }}
  >
    <CircularProgress />
  </Box>
)
