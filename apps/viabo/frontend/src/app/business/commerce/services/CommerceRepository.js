import { axios } from '@/shared/interceptors'

export const createNewCommerce = async commerce => {
  const { data } = await axios.post('/api/security/legalRepresentative/new', commerce)
  return data
}

export const getCommerceToken = async commerceEmail => {
  const { data } = await axios.get(`/api/register/commerce/legalRepresentative/find/${commerceEmail}`)
  return data
}

export const sendValidationCode = async token => {
  const { data } = await axios.post('/api/code/verification/resend', token)
  return data
}

export const validateCode = async validationCode => {
  const { data } = await axios.post('/api/code/verificate', validationCode)
  return data
}

export const setServicesToCommerce = async services => {
  const { data } = await axios.post('/api/business/commerce/addServices', services)
  return data
}
