import { convertCatalogToReactSelect } from '@/shared/utils'

export const SpeiCompaniesListAdapter = companies => {
  const companiesAdapted =
    companies?.map(company => ({
      id: company?.id,
      name: company?.alias && company?.alias?.trim() !== '' ? company?.alias : company?.beneficiary,
      beneficiary: company?.beneficiary,
      alias: company?.alias,
      clabe: company?.interbankCLABE,
      email: company?.email,
      phone: company?.phone,
      bank: { name: company?.shorNameBank, id: company?.bankId },
      status: company?.active === '1',
      date: company?.date,
      rfc: company?.rfc
    })) || []

  return convertCatalogToReactSelect(companiesAdapted, 'id', 'name', 'status')
}
