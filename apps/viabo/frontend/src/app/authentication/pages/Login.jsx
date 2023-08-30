import { useEffect } from 'react'

import { Box, Stack, Typography } from '@mui/material'
import { useQueryClient } from '@tanstack/react-query'

import { LoginForm } from '../components'

import LoginImage from '@/shared/assets/img/login-image-2x.webp'
import { Page } from '@/shared/components/containers'
import { FullLogo } from '@/shared/components/images'

const Login = () => {
  const client = useQueryClient()
  useEffect(() => {
    client.removeQueries()
  }, [])
  return (
    <Page title="Inicio de Sesión">
      <Stack alignItems={'center'} justifyContent={'center'} minHeight={'100vH'}>
        <Stack px={{ sm: 10, xl: 20 }} width={1} height={1} direction={'row'}>
          <Stack
            flexGrow={1}
            width={1}
            height={1}
            minHeight={'70vh'}
            overflow={'auto'}
            maxHeight={'90vH'}
            position={'relative'}
            px={{ xs: 5 }}
            justifyContent={'space-between'}
          >
            <Stack direction={'row'} spacing={1} alignItems={'center'}>
              <FullLogo sx={{ width: 100 }} />
              <Typography fontWeight={'600'} variant="subtitle1">
                Agilidad en pagos
              </Typography>
            </Stack>
            <Box flexGrow={1} />
            <Stack flex={1} px={{ xs: 0, sm: 5, xl: 20 }}>
              <LoginForm />
            </Stack>
          </Stack>
          <Stack
            width={1}
            justifyContent={'center'}
            height={1}
            flexGrow={1}
            sx={{ display: { xs: 'none', sm: 'none', lg: 'flex' } }}
          >
            <Box
              component={'img'}
              height={1}
              maxHeight={'90vH'}
              sx={{ objectFit: 'fill' }}
              borderRadius={4}
              src={LoginImage}
            />
          </Stack>
        </Stack>
      </Stack>
    </Page>
  )
}

export default Login
