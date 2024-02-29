import { createStore } from '@/app/shared/store'

const initialState = {
  stpAccount: null,
  openSpeiOut: false,
  selectedAccounts: [],
  isOpenTransactions: false,
  queryMovements: {},
  transaction: null,
  isOpenDetailsTransaction: false
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
  },
  setOpenTransactions: open => {
    set(
      state => ({
        isOpenTransactions: open
      }),
      false,
      'SET_ADMIN_DASHBOARD_OPEN_TRANSACTIONS_DETAILS'
    )
  },
  setQueryMovements: queryMovements => {
    set(
      state => ({
        queryMovements
      }),
      false,
      'SET_ADMIN_DASHBOARD_QUERY_MOVEMENTS'
    )
  },
  setTransaction: transaction => {
    set(
      state => ({
        transaction
      }),
      false,
      'SET_ADMIN_DASHBOARD_TRANSACTION_INFO'
    )
  },
  setOpenDetailsTransaction: open => {
    set(
      state => ({
        isOpenDetailsTransaction: open
      }),
      false,
      'SET_ADMIN_DASHBOARD_OPEN_TRANSACTION_DETAILS'
    )
  }
})

export const useAdminDashboardSpeiStore = createStore(adminDashboardSpeiStore)
