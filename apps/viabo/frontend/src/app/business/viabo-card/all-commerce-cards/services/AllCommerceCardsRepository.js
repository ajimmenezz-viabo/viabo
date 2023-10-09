import { CardsPaginatedAdapter } from '@/app/shared/adapters'
import { axios } from '@/shared/interceptors'

export const getCommerceCards = async (filters, signal) => {
  const { columnFilters, globalFilter, pageIndex, pageSize, sorting } = filters

  const fetchURL = new URL('/api/cards/commerce', window.location.origin)
  fetchURL.searchParams.set('start', `${pageIndex * pageSize}`)
  fetchURL.searchParams.set('size', `${pageSize}`)
  fetchURL.searchParams.set('filters', JSON.stringify(columnFilters ?? []))
  fetchURL.searchParams.set('globalFilter', globalFilter ?? '')
  fetchURL.searchParams.set('sorting', JSON.stringify(sorting ?? []))

  // const response = await fetch(fetchURL.href)
  // const json = await response.json()
  // return json

  const { data } = await axios.get(fetchURL.href, {
    timeout: 30000,
    signal
  })
  return CardsPaginatedAdapter(data)
}

export const assignCards = async cards => {
  const { data } = await axios.put('/api/assign/commerce-card/to/user', cards)
  return cards
}
