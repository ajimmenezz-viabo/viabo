import { create } from 'zustand'
import { devtools } from 'zustand/middleware'

const commerceDetailsStore = (set, get) => ({
  commerce: null,
  setCommerce: commerce => {
    set(state => ({
      commerce
    }))
  }
})

export const useCommerce = create(devtools(commerceDetailsStore))
