import { BUSINESS_PERMISSIONS } from '@/app/business/shared/routes/businessPermissions'
import { path } from '@/routes'

export const BUSINESS_ROUTES_NAMES = {
  root: { route: 'commerce', name: 'Comercio' },
  cards: { route: 'cards', name: 'Tarjetas' },
  globalCard: { route: 'cards/global', name: 'Tarjeta Global Comercio', permission: BUSINESS_PERMISSIONS.GLOBAL_CARD },
  allCards: { route: 'stock-cards', name: 'Stock de Tarjetas' },
  terminals: { route: 'terminals', name: 'Pay' }
}

const ROOT = `/${BUSINESS_ROUTES_NAMES.root.route}/`
export const BUSINESS_PATHS = {
  root: ROOT,
  cards: path(ROOT, `${BUSINESS_ROUTES_NAMES.cards.route}`),
  globalCard: path(ROOT, `${BUSINESS_ROUTES_NAMES.globalCard.route}`),
  allCards: path(ROOT, `${BUSINESS_ROUTES_NAMES.allCards.route}`),
  terminals: path(ROOT, `${BUSINESS_ROUTES_NAMES.terminals.route}`)
}
