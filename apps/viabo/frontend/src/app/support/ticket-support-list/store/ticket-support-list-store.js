import { createStore } from '@/app/shared/store'

const initialState = {
  ticket: null,
  totalTicketsGenerated: 0,
  totalTicketsAssigned: 0,
  isTableFullScreen: false
}
const ticketSupportListStore = (set, get) => ({
  ...initialState,
  setSupportTicketDetails: ticket => {
    set(
      state => ({
        ticket: open
      }),
      false,
      'SET_SUPPORT_TICKET_DETAILS'
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
