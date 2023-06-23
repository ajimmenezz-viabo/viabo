import { axios } from '@/shared/interceptors'
import { CardAdapter, CardMainAdapter, CardMovementsAdapter, CardsAdapter } from '@/app/shared/adapters'
import { CreateFundingOrderResponseAdapter } from '@/app/business/cards/adapters'

export const getEnabledCommerceCards = async () => {
  const { data } = await axios.get('/api/enabled-cards/commerce')
  return CardsAdapter(data)
}

export const getCardInfo = async cardId => {
  const { data } = await axios.get(`/api/card/information/${cardId}`)
  return CardAdapter(data)
}

export const changeStatusCard = async card => {
  const { data } = await axios.put(`/api/card/${card?.id}/block/${card?.cardON ? 'unblocked' : 'blocked'}`)
  return card
}

export const transactionsCard = async transactions => {
  const { data } = await axios.post('/api/card/transactions', transactions?.data)
  return transactions
}

export const getCardMovements = async (cardId, initialDate, finalDate) => {
  const { data } = await axios.get(`/api/card/${cardId}/movements/${initialDate}/to/${finalDate}`, { timeout: 30000 })
  return CardMovementsAdapter(data)
}

export const getMainCardCommerce = async () => {
  const { data } = await axios.get('/api/main-card/information')
  return CardMainAdapter(data)
}

export const sendMessageCards = async message => {
  const { data } = await axios.post('/api/cards/send/message', message)
  return data
}

export const sharedChargeKeys = async emails => {
  const { data } = await axios.post('/api/card/send/spei-key', emails)
  return data
}

export const createFundingOrder = async order => {
  const { data } = await axios.post('/api/conciliation/new', order)
  return CreateFundingOrderResponseAdapter(data)
}
