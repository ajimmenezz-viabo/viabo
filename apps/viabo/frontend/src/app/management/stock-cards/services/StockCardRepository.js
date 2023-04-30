import { axios } from '@/shared/interceptors'
import { AffiliatedCommercesAdapter, CardTypesAdapter, StockCardsAdapter } from '@/app/management/stock-cards/adapters'

export const createNewStockCard = async card => {
  const { data } = await axios.post('/api/card/new', card)
  return data
}

export const getAffiliatedCommerces = async () => {
  const { data } = await axios.get(`/api/commerces/affiliates`)
  return AffiliatedCommercesAdapter(data)
}

export const getCardTypes = async () => {
  const { data } = await axios.get('/api/payment-processors')
  return CardTypesAdapter(data)
}

export const getStockCards = async () => {
  const { data } = await axios.get('/api/cards/stock')
  return StockCardsAdapter(data)
}
