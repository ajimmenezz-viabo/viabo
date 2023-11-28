import { createStore } from '@/app/shared/store'

const initialState = {
  commerce: null,
  openCommerceDetails: false,
  openCommerceCommissions: false
}
const commerceDetailsStore = (set, get) => ({
  ...initialState,
  setCommerce: commerce => {
    set(state => ({
      commerce
    }))
  },
  setOpenCommerceDetails: open => {
    set(
      state => ({
        openCommerceDetails: open
      }),
      false,
      'SET_OPEN_COMMERCE_DETAILS'
    )
  },
  setOpenCommerceCommissions: open => {
    set(
      state => ({
        openCommerceCommissions: open
      }),
      false,
      'SET_OPEN_COMMERCE_COMMISSIONS'
    )
  }
})

export const useCommerce = createStore(commerceDetailsStore)
