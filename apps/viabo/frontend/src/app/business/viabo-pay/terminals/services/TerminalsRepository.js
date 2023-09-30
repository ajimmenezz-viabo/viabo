import { CommerceTerminalsAdapter, MovementsToConciliateTerminalAdapter, TerminalMovementsAdapter } from '../adapters'

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
  const terminal = terminalId
    ? `?fromDate=${initialDate}&toDate=${finalDate}&terminalId=${terminalId}`
    : `?fromDate=${initialDate}&toDate=${finalDate}`
  const { data } = await axios.get(`/api/commerces-pay/transactions/all${terminal}`)
  return TerminalMovementsAdapter(data)
}

export const getMovementsToConciliateTerminal = async (terminal, date) => {
  const { data } = await axios.get(`/api/card/movements/${terminal}/consolidated/${date}`)
  return MovementsToConciliateTerminalAdapter(data)
}

export const conciliateTerminalMovements = async movements => {
  const { data } = await axios.post(`/api/commerce/terminal/consolidation/create`, movements)
  return data
}
