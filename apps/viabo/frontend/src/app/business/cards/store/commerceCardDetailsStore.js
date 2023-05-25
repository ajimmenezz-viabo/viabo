import { create } from 'zustand'
import { devtools } from 'zustand/middleware'

const commerceCardDetailsStore = (set, get) => ({
  card: null,
  selectedCards: [],
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
  }
})

export const useCommerceDetailsCard = create(devtools(commerceCardDetailsStore))
