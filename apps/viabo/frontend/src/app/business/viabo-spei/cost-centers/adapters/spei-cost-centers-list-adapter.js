import { convertCatalogToReactSelect } from '@/shared/utils'

export const SpeiCostCentersListAdapter = costCenters => {
  const costCentersAdapted =
    costCenters?.map(costCenter => ({
      id: costCenter?.id,
      name: costCenter?.name,
      status: costCenter?.active === '1',
      companies: costCenter?.companies,
      create: {
        user: costCenter?.createdByUser,
        date: costCenter?.createDate
      },
      adminUsers: costCenter?.assignedUsers || []
    })) || []

  return convertCatalogToReactSelect(costCentersAdapted, 'id', 'name')
}
