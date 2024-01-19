import { axios } from '@/shared/interceptors'

export const newCause = async cause => {
  const { data } = await axios.post(`/api/tickets/catalogs/causes/new`, cause)

  return data
}
