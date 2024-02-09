import { fCurrency } from '@/shared/utils'

export const SpeiCompaniesListAdapter = companies => {
  const companiesAdapted =
    companies?.map(company => ({
      id: company?.id,
      name: company?.name,
      balance: fCurrency(company?.balance || '0'),
      status: !!company?.active,
      rfc: company?.rfc,
      stpAccount: company?.stpAccount
    })) || []

  return companiesAdapted
}
