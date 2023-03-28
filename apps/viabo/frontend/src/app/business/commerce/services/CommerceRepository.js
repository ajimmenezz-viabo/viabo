import { axios } from '@/shared/interceptors'

export const createNewCommerce = async commerce => {
  const { data } = await axios.post('/api/business/commerce/new', commerce)
  return data
}

export const getCommerceToken = async commerceEmail => {
  const { data } = await axios.get('/api/business/commerce/token', commerceEmail)
  return data
}

export const sendValidationCode = async () => {
  const { data } = await axios.post('/api/business/commerce/token')
  return data
}

export const validateCode = async validationCode => {
  const { data } = await axios.post('/api/business/commerce/validationCode', validationCode)
  return data
}

export const setServicesToCommerce = async services => {
  const { data } = await axios.post('/api/business/commerce/addServices', services)
  return data
}
