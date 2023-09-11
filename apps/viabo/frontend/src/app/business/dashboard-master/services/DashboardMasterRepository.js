import { GlobalCardsAdapter, MasterMovementsAdapter } from '@/app/business/dashboard-master/adapters'
import { axios } from '@/shared/interceptors'

export const getGlobalCards = async () => {
  const { data } = await axios.get(`/api/main-cards/information`)
  return GlobalCardsAdapter(data)
}

export const getMasterMovements = async (initialDate, finalDate, signal) => {
  const { data } = await axios.get(`/api/cards/movements/${initialDate}/to/${finalDate}`)
  return MasterMovementsAdapter(data)
}
