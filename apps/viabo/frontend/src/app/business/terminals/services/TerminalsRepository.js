import { CommerceTerminalsAdapter, TerminalMovementsAdapter } from '../adapters'

import { axios } from '@/shared/interceptors'

export const getCommerceTerminals = async () => {
  const { data } = await axios.get('/api/commerces/terminals')
  return CommerceTerminalsAdapter(data)
}

export const createPaymentLink = async paymentLink => {
  const { data } = await axios.post(`/api/commerce/pay/new`, paymentLink)
  return data
}

export const generatePaymentByVirtualTerminal = async payment => {
  const { data } = await axios.post(`/api/commerce/virtual/pay`, payment)
  return data
}

export const getTerminalMovements = async (terminalId, initialDate, finalDate) => {
  const { data } = await axios.get(
    `/api/commerces-pay/transactions?fromDate=${initialDate}&toDate=${finalDate}&terminalId=${terminalId}`
  )
  return TerminalMovementsAdapter(data)
}
