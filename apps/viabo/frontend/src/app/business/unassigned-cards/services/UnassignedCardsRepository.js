import { CardsAdapter } from '@/app/shared/adapters'
import { axios } from '@/shared/interceptors'

export const getUnassignedCommerceCards = async () => {
  const { data } = await axios.get('/api/disabled-cards/commerce')
  return CardsAdapter(data)
}

export const assignCards = async cards => {
  const { data } = await axios.put('/api/assign/commerce-card/to/user', cards)
  return cards
}
