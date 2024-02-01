import { ViaboSpeiBalanceAdapter, ViaboSpeiMovementsAdapter } from '../adapters'

import { axios } from '@/shared/interceptors'

export const getBalanceViaboSpei = async () => {
  const { data } = await axios.get('/api/spei/account/balance')

  return ViaboSpeiBalanceAdapter(data)
}

export const createSpeiOut = async transactions => {
  const { data } = await axios.post('/api/spei/transaction/process-payments', transactions)
  if (data && Array.isArray(data)) {
    return data?.map(operation => ({
      account: operation?.externalAccount,
      url: operation?.url
    }))
  }

  throw new Error('Se realizo las transacciones pero no se obtuvo los comprobantes de las operaciones')
}

export const getMovementsViaboSpei = async () => {
  const { data } = await axios.get('/api/spei/account/movements')

  return ViaboSpeiMovementsAdapter(data)
}
