import { createStore } from '@/app/shared/store'

const initialState = {
  ticket: null,
  totalTicketsGenerated: 0,
  totalTicketsAssigned: 0,
  isTableFullScreen: false,
  openTicketConversation: false
}
const ticketSupportListStore = (set, get) => ({
  ...initialState,
  setSupportTicketDetails: ticket => {
    set(
      state => ({
        ticket
      }),
      false,
      'SET_SUPPORT_TICKET_DETAILS'
    )
  },
  setOpenTicketConversation: open => {
    set(
      state => ({
        openTicketConversation: open
      }),
      false,
      'SET_SUPPORT_TICKET_CONVERSATION'
    )
  },
  setFullScreenTableSupportList: isFullScreen => {
    set(
      state => ({
        isTableFullScreen: isFullScreen
      }),
      false,
      'SET_FULL_SCREEN_TABLE_SUPPORT_LIST'
    )
  },
  setTotalSupportTicketsGenerated: totalTicketsGenerated => {
    set(
      state => ({
        totalTicketsGenerated
      }),
      false,
      'SET_TOTAL_SUPPORT_TICKETS_GENERATED'
    )
  },
  setTotalSupportTicketsAssigned: totalTicketsAssigned => {
    set(
      state => ({
        totalTicketsAssigned
      }),
      false,
      'SET_TOTAL_SUPPORT_TICKETS_ASSIGNED'
    )
  }
})

export const useTicketSupportListStore = createStore(ticketSupportListStore)
