import { ManagementCommercesAdapter } from '@/app/management/commerces/adapters'
import { axios } from '@/shared/interceptors'

export const getCommerceList = async () => {
  const { data } = await axios.get('/api/commerces')
  return ManagementCommercesAdapter(data)
}

export const updateCommerceCommissions = async commissions => {
  const { data } = await axios.post('/api/commerce/commissions/register', commissions)
  return data
}
