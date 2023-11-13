import { ViaboPayLiquidatedMovementsAdapter } from '../adapters'

import { axios } from '@/shared/interceptors'

export const getViaboPayLiquidatedMovements = async signal => {
  const { data } = await axios.get('/api/commerces-pay/transactions/all?fromDate=2023-11-01&toDate=2023-11-30', {
    signal
  })
  return ViaboPayLiquidatedMovementsAdapter(data)
}
