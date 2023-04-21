import { axios } from '@/shared/interceptors'
import { ManagementCommercesAdapter } from '@/app/management/commerces/adapters'

export const getCommerceList = async () => {
  const { data } = await axios.get('/api/new-commerces')
  return ManagementCommercesAdapter(data)
}
