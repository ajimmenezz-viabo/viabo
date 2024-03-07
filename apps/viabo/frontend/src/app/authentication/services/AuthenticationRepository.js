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
  const { data } = await axios.put('/api/user/password/reset', password)
  return data
}

export const getGoogleAuthQRCode = async () => {
  const { data } = await axios.get('/api/user/google-auth-qr')
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      reject(Error(''))
    }, 3000)
  })
}

export const enableTwoAuth = async twoAuth =>
  // const { data } = await axios.put('/api/user/two-auth/enable', twoAuth)
  new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('')
    }, 3000)
  })
