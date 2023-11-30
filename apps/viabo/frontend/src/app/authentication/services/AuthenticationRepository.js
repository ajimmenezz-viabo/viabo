import { UserModulesAdapter } from '@/app/authentication/adapters'
import { axios } from '@/shared/interceptors'

export const signIn = async user => {
  const { data } = await axios.post('/api/login', user)
  return data
}

export const logout = async () => {
  const { data } = await axios.post('/api/logout')
  return data
}

export const getUserModules = async () => {
  const { data } = await axios.get('/api/modules/user')
  return UserModulesAdapter(data)
}

export const changePassword = async password => {
  const { data } = await axios.post('/api/user/password', password)
  return data
}
