import { lazy } from 'react'

import { PUBLIC_PATHS } from './paths'

import { LoadableRoute } from '@/routes/LoadableRoute'

const ChargePaymentLink = LoadableRoute(
  lazy(() => import('@/app/business/viabo-pay/terminal-charge-payment-link/pages/ChargePaymentLink'))
)
const CommerceRegister = LoadableRoute(lazy(() => import('@/app/business/commerce/pages/CommerceRegister')))
const RegisterCards = LoadableRoute(lazy(() => import('@/app/business/viabo-card/register-cards/pages/RegisterCards')))
const Privacy = LoadableRoute(lazy(() => import('@/app/public/pages/Privacy')))
const Policies = LoadableRoute(lazy(() => import('@/app/public/pages/Policies')))

export const PublicRouter = [
  {
    path: '/cobro/:paymentId',
    element: <ChargePaymentLink />
  },
  {
    path: '/comercio/registro',
    element: <CommerceRegister />
  },
  {
    path: '/registro',
    element: <RegisterCards />
  },
  {
    path: PUBLIC_PATHS.privacy,
    element: <Privacy />
  },
  {
    path: PUBLIC_PATHS.policies,
    element: <Policies />
  }
]

export const WHITE_THEME_LIST = ['/comercio/registro', '/registro', '/cobro/*']
