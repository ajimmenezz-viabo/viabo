import { ManagementCommercesAdapter } from '@/app/management/commerces/adapters'
import { axios } from '@/shared/interceptors'

export const getCommerceList = async () => {
  const { data } = await axios.get('/api/new-commerces')
  return ManagementCommercesAdapter(data)
}
