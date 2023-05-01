import { SimpleBreadcrumbs } from '@/shared/components/breadcrumbs'
import { CARDS_FRIENDLY_NAMES } from '@/app/business/shared/routes/businessFriendlyNames'

export function BusinessBreadcrumbs() {
  return <SimpleBreadcrumbs friendlyPages={CARDS_FRIENDLY_NAMES} />
}
