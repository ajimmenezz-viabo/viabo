import { createStore } from '@/app/shared/store'

const initialState = {
  stpAccount: null,
  balanceResume: null,
  balanceFilter: null,
  openSpeiOut: false,
  selectedAccounts: [],
  isOpenTransactions: false,
  filterMovements: null,
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
  setFilterMovements: filters => {
    set(
      state => ({
        filterMovements: filters
      }),
      false,
      'SET_ADMIN_DASHBOARD_FILTERS_MOVEMENTS'
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
  },
  setBalanceResume: balance => {
    set(
      state => ({
        balanceResume: balance
      }),
      false,
      'SET_ADMIN_DASHBOARD_BALANCE_RESUME'
    )
  },
  setBalanceFilter: filter => {
    set(
      state => ({
        balanceFilter: filter
      }),
      false,
      'SET_ADMIN_DASHBOARD_BALANCE_FILTER'
    )
  }
})

export const useAdminDashboardSpeiStore = createStore(adminDashboardSpeiStore)
