import { getIdTicketStatusByName } from '../services'

import { fDateTime } from '@/shared/utils'

export const GeneratedTicketsListAdapter = tickets => {
  console.log(tickets)

  return tickets?.map(ticket => ({
    id: ticket?.id,
    attendant: ticket?.attends,
    description: ticket?.description,
    cause: {
      name: ticket?.cause,
      color: ticket?.causeColor
    },
    date: {
      original: ticket?.date,
      dateTime: fDateTime(ticket?.date)
    },
    status: {
      id: getIdTicketStatusByName(ticket?.status),
      name: ticket?.status
    }
  }))
}
