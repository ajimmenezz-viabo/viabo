import { path } from '@/routes'

export const BUSINESS_ROUTES_NAMES = {
  root: { route: 'commerce', name: 'Comercio' },
  cards: { route: 'cards', name: 'Tarjetas' },
  unassignedCards: { route: 'stock-cards', name: 'Stock de Tarjetas' }
}

const ROOT = `/${BUSINESS_ROUTES_NAMES.root.route}/`
export const BUSINESS_PATHS = {
  root: ROOT,
  cards: path(ROOT, `${BUSINESS_ROUTES_NAMES.cards.route}`)
}
