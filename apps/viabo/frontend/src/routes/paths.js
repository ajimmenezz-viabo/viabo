// ----------------------------------------------------------------------

import { BUSINESS_ROUTES_NAMES } from '@/app/business/shared/routes'
import { MANAGEMENT_ROUTES_NAMES } from '@/app/management/shared/routes'

export function path(root, sublink) {
  return `${root}${sublink}`
}

const ROOTS_AUTH = '/auth'
const ROOTS_DASHBOARD = '/'

export const PATH_AUTH = {
  root: ROOTS_AUTH,
  login: path(ROOTS_AUTH, '/login')
}

export const PATH_DASHBOARD = {
  root: ROOTS_DASHBOARD
}

export const AUTH_PERMISSION_PATHS = {
  business: BUSINESS_ROUTES_NAMES,
  management: MANAGEMENT_ROUTES_NAMES
}
