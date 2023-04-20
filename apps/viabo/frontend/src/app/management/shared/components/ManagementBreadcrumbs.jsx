import { SimpleBreadcrumbs } from '@/shared/components/breadcrumbs'
import { MANAGEMENT_FRIENDLY_NAMES } from '@/app/management/shared/routes'

export function ManagementBreadcrumbs() {
  return <SimpleBreadcrumbs friendlyPages={MANAGEMENT_FRIENDLY_NAMES} />
}
