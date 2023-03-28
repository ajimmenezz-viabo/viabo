import { useRoutes } from 'react-router-dom'
import { LoadableRoute } from '@/routes/LoadableRoute'
import { lazy } from 'react'
import { Typography } from '@mui/material'

export const AppRouter = () =>
  useRoutes([
    {
      path: '/',
      element: <Typography variant={'h1'}>Modo Desarrollo</Typography>
    },
    {
      path: '/comercio/registro',
      element: <CommerceRegister />
    },
    { path: '*', element: <Typography variant={'h1'}>Pagina No encontrada</Typography> }
  ])

const CommerceRegister = LoadableRoute(lazy(() => import('@/app/business/commerce/pages/CommerceRegister')))
