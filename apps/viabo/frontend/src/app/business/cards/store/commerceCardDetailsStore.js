import { create } from 'zustand'
import { devtools } from 'zustand/middleware'

const commerceCardDetailsStore = (set, get) => ({
  card: null,
  mainCard: null,
  selectedCards: [],
  openFundingOrder: false,
  fundingCard: null,
  setCard: cardSelected => {
    const { card } = get()

    set(
      state => ({
        card: { ...card, ...cardSelected }
      }),
      false,
      'SET_CARD'
    )
  },
  setSelectedCards: cardsSelected => {
    const { card } = get()

    set(
      state => ({
        selectedCards: cardsSelected
      }),
      false,
      'SET_SELECTED_CARDS'
    )
  },
  addInfoCard: info => {
    const { card } = get()
    set(
      state => ({
        card: { ...card, ...info }
      }),
      false,
      'SET_INFO_CARD'
    )
  },
  setMainCard: card => {
    set(
      state => ({
        mainCard: card
      }),
      false,
      'SET_MAIN_CARD'
    )
  },
  setOpenFundingOrder: open => {
    set(
      state => ({
        openFundingOrder: open
      }),
      false,
      'SET_OPEN_FUNDING_ORDER'
    )
  },
  setFundingCard: card => {
    set(
      state => ({
        fundingCard: card
      }),
      false,
      'SET_FUNDING_CARD'
    )
  },
  resetFundingOrder: () => {
    set(
      state => ({
        fundingCard: null,
        openFundingOrder: false
      }),
      false,
      'RESET_FUNDING_ORDER'
    )
  }
})

export const useCommerceDetailsCard = create(devtools(commerceCardDetailsStore))
