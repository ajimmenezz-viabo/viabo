import { axios } from '@/shared/interceptors'

export const createNewDemoUser = async user => {
  const { data } = await axios.post('/api/security/commerce-demo/user/new', user)
  return data
}

export const assignCardToDemoUser = async card => {
  const { data } = await axios.put('/api/assign/commerce-demo-card/to/user', card)
  return data
}
