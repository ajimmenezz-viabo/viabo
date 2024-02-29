import { ViaboSpeiBalanceAdapter, ViaboSpeiMovementsAdapter, ViaboSpeiResumeBalance } from '../adapters'

import { axios } from '@/shared/interceptors'

export const getAccountInfoViaboSpei = async () => {
  const { data } = await axios.get('/api/spei/account/balance')

  return ViaboSpeiBalanceAdapter(data)
}

export const getBalanceResumeViaboSpei = async (startDate, endDate) => {
  const { data } = await axios.get('/api/spei/transaccions/balance', {
    params: {
      initialDate: startDate,
      endDate
    }
  })

  return ViaboSpeiResumeBalance(data)
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

export const getMovementsViaboSpei = async filters => {
  const { data } = await axios.get('/api/spei/transaccions', {
    params: filters
  })

  return ViaboSpeiMovementsAdapter(data)
}
