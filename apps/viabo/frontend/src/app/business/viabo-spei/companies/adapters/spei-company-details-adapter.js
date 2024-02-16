export const SpeiCompanyDetailsAdapter = company => {
  const companyAdapted = {
    id: company?.id,
    commercialName: company?.tradeName,
    fiscalName: company?.fiscalName,
    rfc: company?.rfc,
    adminUsers: company?.users?.map(user => user?.id) || [],
    costCenters: company?.costCenters?.map(costCenter => costCenter?.id) || []
  }

  return companyAdapted
}
