import { axios } from '@/shared/interceptors'
import { CardTypesAdapter } from '@/app/shared/adapters'

export const getCardTypes = async () => {
  const { data } = await axios.get('/api/payment-processors')
  return CardTypesAdapter(data)
}
