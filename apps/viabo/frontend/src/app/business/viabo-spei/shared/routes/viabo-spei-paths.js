import { path } from '@/routes/index.js'

const ROUTES = {
  root: { route: 'viabo-spei', name: 'Viabo Spei' },
  dashboard: { route: 'dashboard', name: 'Dashboard' },
  companies: { route: 'companies', name: 'Empresas' }
}

const ROOT = `/${ROUTES.root.route}`

const PATHS = {
  root: ROOT,
  dashboard: path(ROOT, `/${ROUTES.dashboard.route}`),
  companies: path(ROOT, `/${ROUTES.companies.route}`)
}

const viaboSpeiPaths = {
  paths: PATHS,
  routes: ROUTES
}

export { viaboSpeiPaths }
