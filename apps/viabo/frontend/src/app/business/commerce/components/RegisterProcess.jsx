import { lazy, Suspense, useEffect } from 'react'
import { useRegisterProcessStore } from '@/app/business/commerce/store'
import { Box, Button, CircularProgress, Stack } from '@mui/material'
import { PROCESS_LIST } from '@/app/business/commerce/services'
import { shallow } from 'zustand/shallow'

export const RegisterProcess = () => {
  const component = useRegisterProcessStore(state => state.getComponent)
  const store = useRegisterProcessStore(state => state, shallow)
  const { actualProcess, setToken, lastProcess, setActualProcess, setResume } = store

  useEffect(() => {
    if (actualProcess === PROCESS_LIST.REGISTER) {
      setToken(null)
      setResume(null)
    }
  }, [actualProcess, setToken])

  const handleBack = () => {
    setActualProcess(lastProcess?.name ?? PROCESS_LIST.REGISTER)
  }

  const LazyComponent = lazy(component())
  return (
    <Box
      sx={{
        height: { xs: '100%', sm: '100%', md: '100%', lg: '100vh', xl: 'calc(100vh - 100px)' },
        minHeight: { xs: '100vH', sm: '100vh', md: '100vh', lg: '100vh', xl: '600px' },
        display: 'flex',
        flexDirection: 'column',
        overflow: 'auto',
        zIndex: 1
      }}
      className="animate__animated animate__fadeIn"
    >
      <Suspense fallback={<LoadingSuspense />}>
        {actualProcess !== PROCESS_LIST.REGISTER && (
          <Stack m={5} mb={0} direction="row">
            <Button onClick={handleBack}>{'< Regresar'}</Button>
          </Stack>
        )}

        <Box m={5} height={1}>
          <LazyComponent store={store} />
        </Box>
      </Suspense>
    </Box>
  )
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
