import { createStore } from '@/app/shared/store'

const initialState = {
  stpAccount: null,
  openSpeiOut: false,
  selectedAccounts: []
}
const adminDashboardSpeiStore = (set, get) => ({
  ...initialState,
  setStpAccount: stpAccount => {
    set(
      state => ({
        stpAccount
      }),
      false,
      'SET_ADMIN_DASHBOARD_SPEI_STP_ACCOUNT'
    )
  },
  setOpenSpeiOut: open => {
    set(
      state => ({
        openSpeiOut: open
      }),
      false,
      'SET_ADMIN_DASHBOARD_OPEN_SPEI_OUT'
    )
  }
})

export const useAdminDashboardSpeiStore = createStore(adminDashboardSpeiStore)
