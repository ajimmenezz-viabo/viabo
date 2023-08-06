import { axios } from '@/shared/interceptors'

export const getCommerceTerminals = async () =>
  //   const { data } = await axios.get(`/api/enabled-cards/commerce?paymentProcessorId=${cardTypeId}`)
  [{ id: '67830f19-ddc0-41c0-ab6f-ac1e880176a0', terminalId: '13', alias: 'terminal 1', balanceFormatted: '$2700.43' }]

export const createPaymentLink = async paymentLink => {
  const { data } = await axios.post(`/api/pay/payment-link`, paymentLink)
}
