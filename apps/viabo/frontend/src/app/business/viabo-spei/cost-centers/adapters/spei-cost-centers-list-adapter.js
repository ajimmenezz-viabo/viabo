export const SpeiCostCentersListAdapter = costCenters => {
  const costCentersAdapted =
    costCenters?.map(company => ({
      id: company?.id,
      name: company?.name,
      status: !!company?.active,
      companies: company?.companies
    })) || []

  return costCentersAdapted
}
