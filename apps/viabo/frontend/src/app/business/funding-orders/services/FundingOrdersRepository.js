import { ConciliateMovementsByOrderAdapter, FundingOrdersAdapter } from '../adapters'

import { axios } from '@/shared/interceptors'

export const getFundingOrders = async () => {
  const { data } = await axios.get('/api/funding-orders')
  return FundingOrdersAdapter(data)
}

export const getMovementsByFundingOrder = async order => {
  const { data } = await axios.get(`/api/master-card/movements/unreconciled?fundingOrderId=${order?.id}`)
  return ConciliateMovementsByOrderAdapter(data)
}

export const conciliateFundingOrder = async conciliateOrder => {
  const { data } = await axios.put(`/api/funding-order/conciliation`, conciliateOrder)
  return data
}

export const cancelFundingOrder = async fundingOrder => {
  const { data } = await axios.get(`/api/main-cards/information`)
  return data
}
