import { axios } from '@/shared/interceptors'
import { CommerceProcessAdapter } from '@/app/business/commerce/adapters'

export const createNewCommerce = async commerce => {
  const { data } = await axios.post('/api/security/legalRepresentative/new', commerce)
  return data
}

export const getCommerceToken = async commerceEmail => {
  const { data } = await axios.get(`/api/legal-representative/verificate`, {
    headers: {
      Username: `${commerceEmail}`
    }
  })
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
export const getCommerceProcess = async () => {
  const { data } = await axios.get(`/api/commerce/legal-representative`)
  return CommerceProcessAdapter(data)
}

export const updateCommerceProcess = async commerceInfo => {
  const { data } = await axios.put(`/api/commerce/${commerceInfo?.commerceId}/update`, commerceInfo)
  return data
}
