import { FundingOrdersAdapter } from '../adapters'

import { axios } from '@/shared/interceptors'

export const getFundingOrders = async () => {
  const { data } = await axios.get(`/api/main-cards/information`)
  return FundingOrdersAdapter([])
}
