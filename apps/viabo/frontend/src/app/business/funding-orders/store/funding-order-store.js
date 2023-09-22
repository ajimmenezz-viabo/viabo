import { createStore } from '@/app/shared/store'

const initialState = {
  openConciliateModal: false,
  fundingOrder: null
}

const fundingOrderStore = (set, get) => ({
  ...initialState,
  setOpenConciliateModal: open => {
    set(
      state => ({
        openConciliateModal: open
      }),
      false,
      'SET_OPEN_CONCILIATE_MODAL'
    )
  },
  setFundingOrder: order => {
    set(
      state => ({
        fundingOrder: order
      }),
      false,
      'SET_FUNDING_ORDER'
    )
  }
})

export const useFundingOrderStore = createStore(fundingOrderStore)
