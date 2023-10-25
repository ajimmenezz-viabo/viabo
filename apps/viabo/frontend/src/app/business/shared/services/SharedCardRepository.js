import { axios } from '@/shared/interceptors'

export const verifyExpenses = async expenses => {
  const { data } = await axios.post('/api/code/verificate', expenses)
  return data
}
