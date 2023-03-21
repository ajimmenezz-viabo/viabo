import { useRoutes } from 'react-router-dom'
import TradeRegister from '@/app/business/register/pages/TradeRegister'

export const AppRouter = () =>
  useRoutes([
    {
      path: '/',
      element: <h1>Inicio</h1>
    },
    {
      path: '/comercio/registro',
      element: <TradeRegister />
    },
    { path: '*', element: <h1>Pagina No encontrada</h1> }
  ])
