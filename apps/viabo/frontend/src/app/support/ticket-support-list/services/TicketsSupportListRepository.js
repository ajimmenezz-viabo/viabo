import { ConversationTicketMock } from '../_mock'
import { AssignedTicketsListAdapter, GeneratedTicketsListAdapter, TicketConversationAdapter } from '../adapters'

import { axios } from '@/shared/interceptors'

export const getGeneratedTicketsSupportList = async () => {
  const fetchURL = new URL('/api/tickets', window.location.origin)
  fetchURL.searchParams.set('created', true)

  const { data } = await axios.get(fetchURL)

  // const data = GeneratedTicketsMock
  return GeneratedTicketsListAdapter(data)
}

export const getAssignedTicketsSupportList = async () => {
  const fetchURL = new URL('/api/tickets', window.location.origin)
  fetchURL.searchParams.set('assigned', true)

  const { data } = await axios.get(fetchURL)

  // const data = AssignedTicketsMock
  return AssignedTicketsListAdapter(data)
}

export const getSupportTicketConversation = async ticketId => {
  // const { data } = await axios.get('/api/support/tickets/assigned')

  const data = ConversationTicketMock
  return TicketConversationAdapter(data)
}

export const addMessageToSupportTicketConversation = async message => {
  const { data } = await axios.post('/api/support/tickets/add-message', message)

  return data
}

export const finishSupportTicket = async ticket => {
  const { data } = await axios.post('/api/support/tickets/finish-ticket', ticket)

  return data
}
