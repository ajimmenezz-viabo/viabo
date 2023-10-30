import { GlobalCardsAdapter, MasterMovementsAdapter } from '@/app/business/dashboard-master/adapters'
import { axios } from '@/shared/interceptors'

export const getGlobalCards = async () => {
  const { data } = await axios.get(`/api/main-cards/information`)
  return GlobalCardsAdapter(data)
}

export const getMasterMovements = async (initialDate, finalDate, signal) => {
  const fetchURL = new URL('/api/master-cards/movements', window.location.origin)
  fetchURL.searchParams.set('startDate', initialDate)
  fetchURL.searchParams.set('endDate', finalDate)
  const { data } = await axios.get(fetchURL.href)
  return MasterMovementsAdapter(data)
}
