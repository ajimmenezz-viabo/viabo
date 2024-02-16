export const SpeiCompanyDetailsAdapter = company => {
  const companyAdapted = {
    id: company?.id,
    commercialName: company?.tradeName,
    fiscalName: company?.fiscalName,
    rfc: company?.rfc,
    adminUsers: company?.assignedUsers || [],
    costCenters: company?.costCenters || []
  }

  return companyAdapted
}
