import { ViaboSpeiBalanceAdapter } from '../adapters'

import { axios } from '@/shared/interceptors'

export const getBalanceViaboSpei = async () => {
  const { data } = await axios.get('/api/spei/account/balance')

  return ViaboSpeiBalanceAdapter(data)
}
