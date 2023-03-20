import { createBrowserRouter, Link } from 'react-router-dom'
import TradeRegister from '@/app/business/register/pages/TradeRegister'

export const AppRouter = createBrowserRouter([
  {
    path: '/',
    element: (
      <div>
        <h1>Viabo</h1>
        <Link to="registro/comercio">Registar Comercio </Link>
      </div>
    )
  },
  {
    path: 'registro/comercio',
    element: <TradeRegister />
  }
])
