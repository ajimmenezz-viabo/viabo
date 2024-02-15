import { convertCatalogToReactSelect } from '@/shared/utils'

export const SpeiCostCentersListAdapter = costCenters => {
  const costCentersAdapted =
    costCenters?.map(company => ({
      id: company?.id,
      name: company?.name,
      status: !!company?.active === '1',
      companies: company?.companies,
      create: {
        user: company?.createdByUser,
        date: company?.createDate
      }
    })) || []

  return convertCatalogToReactSelect(costCentersAdapted, 'id', 'name')
}
