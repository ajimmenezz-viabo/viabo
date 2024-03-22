import { STP_ACCOUNT_TYPES, getStpAccountType } from '../constants'

import { convertCatalogToReactSelect, fCurrency, getDecryptInfo } from '@/shared/utils'

export const ViaboSpeiAccountsAdapter = accounts => {
  const accountsDecrypted = getDecryptInfo(accounts?.ciphertext, accounts?.iv)
  console.log(accountsDecrypted)
  if (accountsDecrypted) {
    return {
      type: getStpAccountType(accountsDecrypted?.sectionData),
      concentrators: ConcentratorsAdapter(accountsDecrypted?.stpAccounts),
      costCenters: CostCentersAdapter(accountsDecrypted?.costCenters),
      companies: CompaniesAdapter(accountsDecrypted?.companies)
    }
  }

  throw new Error('Error al obtener cuentas stp')
}

function ConcentratorsAdapter(concentrators) {
  const concentratorsAdapted =
    concentrators?.map(concentrator => ({
      id: concentrator?.id,
      name: concentrator?.name,
      type: STP_ACCOUNT_TYPES.CONCENTRATOR,
      account: {
        number: concentrator?.account,
        hidden: concentrator?.account?.replace(/.(?=.{4})/g, '*')
      },
      totalBalance: {
        number: concentrator?.balance,
        format: fCurrency(concentrator?.balance || 0)
      },
      companiesBalance: {
        number: concentrator?.companiesBalance,
        format: fCurrency(concentrator?.companiesBalance || 0)
      },
      balance: {
        number: concentrator?.availableBalance,
        format: fCurrency(concentrator?.availableBalance || 0)
      },
      companies: CompaniesAdapter(concentrator?.companies)
    })) || []

  return convertCatalogToReactSelect(concentratorsAdapted, 'id', 'name')
}

function CostCentersAdapter(costCenters) {
  const costCentersAdapted =
    costCenters?.map(costCenter => ({
      id: costCenter?.id,
      name: costCenter?.name,
      type: STP_ACCOUNT_TYPES.COST_CENTER,
      companies: CompaniesAdapter(costCenters?.companies || [])
    })) || []

  return convertCatalogToReactSelect(costCentersAdapted, 'id', 'name')
}

function CompaniesAdapter(companies) {
  const companiesAdapted =
    companies?.map(company => ({
      id: company?.id,
      name: company?.name,
      type: STP_ACCOUNT_TYPES.COMPANY,
      account: {
        number: company?.account,
        hidden: company?.account?.replace(/.(?=.{4})/g, '*')
      },
      clabe: company?.account,
      balance: {
        number: company?.balance,
        format: fCurrency(company?.balance || 0)
      },
      totalBalance: {
        number: company?.balance,
        format: fCurrency(company?.balance || 0)
      },
      concentrator: {
        number: company?.stpAccount,
        hidden: company?.stpAccount?.replace(/.(?=.{4})/g, '*')
      }
    })) || []

  return convertCatalogToReactSelect(companiesAdapted, 'id', 'name')?.filter(company => company.account?.number)
}