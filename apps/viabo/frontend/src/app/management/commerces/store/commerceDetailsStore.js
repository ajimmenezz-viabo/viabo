import { createStore } from '@/app/shared/store'

const initialState = {
  commerce: null
}
const commerceDetailsStore = (set, get) => ({
  ...initialState,
  setCommerce: commerce => {
    set(state => ({
      commerce
    }))
  }
})

export const useCommerce = createStore(commerceDetailsStore)
