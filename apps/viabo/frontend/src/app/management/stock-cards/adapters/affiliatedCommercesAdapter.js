import { ManagementCommercesAdapter } from '@/app/management/commerces/adapters'
import { convertCatalogToReactSelect } from '@/shared/utils'

export const AffiliatedCommercesAdapter = commerces => {
  const dataAdapted = ManagementCommercesAdapter(commerces) || []
  return convertCatalogToReactSelect(dataAdapted, 'id', 'name')
}
