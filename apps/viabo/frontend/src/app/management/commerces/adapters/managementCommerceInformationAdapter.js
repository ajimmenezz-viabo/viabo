export const ManagementCommerceInformationAdapter = (information, commerce) => {
  const formCommerce = new FormData()

  const dataAdapted = {
    commerceId: commerce?.id,
    fiscalPersonType: information?.fiscalTypePerson,
    taxName: information?.fiscalName,
    tradeName: information?.commercialName,
    rfc: information?.rfc,
    employees: information?.employeesNumber,
    branchOffices: information?.branchesNumber,
    postalAddress: information?.postalAddress,
    phonesNumbers: information?.phonesNumbers,
    slug: information?.terminalCommerceSlug?.toLowerCase(),
    publicTerminal: information?.publicTerminal?.value || null,
    logo: information?.commerceLogo
  }

  Object.entries(dataAdapted).forEach(([key, value]) => {
    formCommerce.append(key, value)
  })

  return formCommerce
}
