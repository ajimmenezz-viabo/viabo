import { create } from 'zustand'
import { devtools } from 'zustand/middleware'

const unassignedCards = (set, get) => ({
  cards: [],
  setSelectedCard: cardSelected => {
    const { cards } = get()
    const selectedIndex = cards.indexOf(cardSelected)

    let newSelected = []

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(cards, cardSelected)
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(cards.slice(1))
    } else if (selectedIndex === cards.length - 1) {
      newSelected = newSelected.concat(cards.slice(0, -1))
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(cards.slice(0, selectedIndex), cards.slice(selectedIndex + 1))
    }

    set(
      state => ({
        cards: newSelected
      }),
      false,
      'SET_SELECTED_INACTIVE_CARDS'
    )
  },
  setAllCards: cards => {
    set(
      state => ({
        cards
      }),
      false,
      'SET_SELECTED_ALL_INACTIVE_CARDS'
    )
  },
  resetCards: () => {
    set(
      state => ({
        cards: []
      }),
      false,
      'RESET_SELECTED_INACTIVE_CARDS'
    )
  }
})

export const useUnassignedCards = create(devtools(unassignedCards))
