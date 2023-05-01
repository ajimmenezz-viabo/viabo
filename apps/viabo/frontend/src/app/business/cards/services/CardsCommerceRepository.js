import { axios } from '@/shared/interceptors'
import { CardsAdapter } from '@/app/shared/adapters'

export const getCommerceCards = async () => {
  const { data } = await axios.get('/api/cards/commerce')
  return CardsAdapter(data)
}
