import { CardsAdapter } from '@/app/shared/adapters'
import { axios } from '@/shared/interceptors'

export const getCommerceCards = async () => {
  const { data } = await axios.get('/api/cards/commerce')
  return CardsAdapter(data)
}

export const assignCards = async cards => {
  const { data } = await axios.put('/api/assign/commerce-card/to/user', cards)
  return cards
}
