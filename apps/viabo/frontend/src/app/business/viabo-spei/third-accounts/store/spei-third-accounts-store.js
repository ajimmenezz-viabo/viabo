import { createStore } from '@/app/shared/store'

const initialState = {
  account: null,
  openNewAccount: false
}
const speiThirdAccountsStore = (set, get) => ({
  ...initialState,
  setSpeiThirdAccount: account => {
    set(state => ({
      account
    }))
  },
  setOpenNewSpeiThirdAccount: open => {
    set(
      state => ({
        openNewAccount: open
      }),
      false,
      'SET_OPEN_SPEI_NEW_THIRD_ACCOUNT'
    )
  }
})

export const useSpeiThirdAccounts = createStore(speiThirdAccountsStore)
