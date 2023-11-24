import { createStore } from '@/app/shared/store'

const initialState = {
  commerce: null,
  openDetailsCommerce: false
}
const commerceDetailsStore = (set, get) => ({
  ...initialState,
  setCommerce: commerce => {
    set(state => ({
      commerce
    }))
  },
  setOpenDetailsCommerce: open => {
    set(
      state => ({
        openDetailsCommerce: open
      }),
      false,
      'SET_OPEN_DETAILS_COMMERCE'
    )
  }
})

export const useCommerce = createStore(commerceDetailsStore)
