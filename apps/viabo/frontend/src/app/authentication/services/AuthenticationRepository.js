import { axios } from '@/shared/interceptors'

export const signIn = async user => {
  const { data } = await axios.post('/api/login', user)
  return data
}
