import { ConciliateMovementsByOrderAdapter, FundingOrdersAdapter } from '../adapters'

import { axios } from '@/shared/interceptors'

export const getFundingOrders = async () => {
  const { data } = await axios.get('/api/anchoring-orders')
  return FundingOrdersAdapter(data)
}

export const getMovementsByFundingOrder = async order => {
  const { data } = await axios.get(`/api/main-cards/information`)
  return ConciliateMovementsByOrderAdapter([])
}

export const conciliateFundingOrder = async conciliateOrder => {
  const { data } = await axios.get(`/api/main-cards/information`)
  return data
}
