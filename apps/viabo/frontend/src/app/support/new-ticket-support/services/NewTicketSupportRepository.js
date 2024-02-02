import { TicketCausesByProfileAdapter } from '../adapters'

import { axios } from '@/shared/interceptors'

export const newTicketSupport = async ticket => {
  const { data } = await axios.post('/api/support-ticket/new', ticket)
  return data
}

export const getTicketCausesByProfile = async () => {
  const { data } = await axios.get('/api/tickets/applicant-profile/support-reasons')
  // const data = [
  //   { id: '1', name: 'Causa 1', color: '' },
  //   { id: '2', name: 'Causa 2', color: '#2deb89' },
  //   { id: '3', name: 'Causa 3', color: '#85b8ff' }
  // ]
  return TicketCausesByProfileAdapter(data)
}
