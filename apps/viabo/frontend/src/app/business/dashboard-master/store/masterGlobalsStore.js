import { createStore } from '@/app/shared/store'

const initialState = {
  card: null,
  isMaster: true,
  movements: [],
  balanceMovements: '$0.00',
  income: '$0.00',
  expenses: '$0.00',
  filterPaymentProcessor: null
}

const masterGlobalsStore = (set, get) => ({
  ...initialState,
  setGlobalCard: cardSelected => {
    const { card } = get()

    set(
      state => ({
        card: cardSelected
      }),
      false,
      'SET_GLOBAL_CARD'
    )
  },
  resetGlobalCard: () => {
    set(
      state => ({
        card: null
      }),
      false,
      'RESET_GLOBAL_CARD'
    )
  },
  setIsMaster: isMaster => {
    set(
      state => ({
        isMaster
      }),
      false,
      'SET_IS_MASTER'
    )
  },
  setMovements: movements => {
    set(
      state => ({
        movements: movements?.movements || [],
        balanceMovements: movements?.balanceMovements || '$0.00',
        expenses: movements?.expenses || '$0.00',
        income: movements?.income || '$0.00'
      }),
      false,
      'SET_MASTER_MOVEMENTS'
    )
  },
  getBalance: () => {
    const { balanceMovements, income, expenses } = get()
    return {
      balanceMovements,
      income,
      expenses
    }
  },
  setFilterPaymentProcessor: filterPaymentProcessor => {
    set(
      state => ({
        filterPaymentProcessor
      }),
      false,
      'SET_FILTER_PAYMENT_PROCESSOR'
    )
  }
})

export const useMasterGlobalStore = createStore(masterGlobalsStore)
