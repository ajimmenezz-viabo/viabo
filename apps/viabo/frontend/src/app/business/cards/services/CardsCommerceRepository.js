import { axios } from '@/shared/interceptors'
import { CardAdapter, CardsAdapter } from '@/app/shared/adapters'

export const getCommerceCards = async () => {
  const { data } = await axios.get('/api/cards/commerce')
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
