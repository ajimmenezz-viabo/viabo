import { AssignedTicketsMock, GeneratedTicketsMock } from '../_mock'
import { AssignedTicketsListAdapter, GeneratedTicketsListAdapter } from '../adapters'

export const getGeneratedTicketsSupportList = async () => {
  // const { data } = await axios.get('/api/support/tickets/generated')

  const data = GeneratedTicketsMock
  return GeneratedTicketsListAdapter(data)
}

export const getAssignedTicketsSupportList = async () => {
  // const { data } = await axios.get('/api/support/tickets/assigned')

  const data = AssignedTicketsMock
  return AssignedTicketsListAdapter(data)
}
