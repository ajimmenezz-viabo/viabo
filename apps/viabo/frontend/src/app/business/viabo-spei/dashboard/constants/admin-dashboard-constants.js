export const STP_ACCOUNT_TYPES = {
  CONCENTRATOR: 'Concentradora',
  COMPANY: 'Empresa',
  COST_CENTER: 'Centro de Costos'
}

export const getTitleAccountsByStpAccountType = type => {
  if (type === STP_ACCOUNT_TYPES.CONCENTRATOR) {
    return 'Mis Concentradoras'
  }

  if (type === STP_ACCOUNT_TYPES.COST_CENTER) {
    return 'Mis Centros de Costos'
  }

  if (type === STP_ACCOUNT_TYPES.COMPANY) {
    return 'Mis Empresas'
  }

  return ''
}

export const getStpAccountType = type => {
  if (type === 'stpAccounts') {
    return STP_ACCOUNT_TYPES.CONCENTRATOR
  }

  if (type === 'costCenters') {
    return STP_ACCOUNT_TYPES.COST_CENTER
  }

  if (type === 'companies') {
    return STP_ACCOUNT_TYPES.COMPANY
  }

  return ''
}
