import { axios } from '@/shared/interceptors'

export const createNewCommerce = async commerce => {
  console.log(commerce)
  const { data } = axios.post('/api/business/commerce/new')
  return data
}
