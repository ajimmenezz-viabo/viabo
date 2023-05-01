import { create } from 'zustand'
import { devtools } from 'zustand/middleware'

const commerceCardDetailsStore = (set, get) => ({
  card: null,
  setCard: card => {
    set(state => ({
      card
    }))
  }
})

export const useCommerceDetailsCard = create(devtools(commerceCardDetailsStore))
