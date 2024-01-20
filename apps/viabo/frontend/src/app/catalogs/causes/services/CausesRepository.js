import { axios } from '@/shared/interceptors'

export const newCause = async cause => {
  const { data } = await axios.post('/api/support-reason/new', cause)

  return data
}
