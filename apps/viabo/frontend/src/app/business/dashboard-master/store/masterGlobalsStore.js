import { createStore } from '@/app/shared/store'

const initialState = {
  card: null
}

const masterGlobalsStore = (set, get) => ({
  ...initialState,
  setGlobalCard: cardSelected => {
    const { card } = get()

    set(
      state => ({
        card: { ...card, ...cardSelected }
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
  addInfoGlobalCard: info => {
    const { card } = get()
    set(
      state => ({
        card: { ...card, ...info }
      }),
      false,
      'SET_INFO_GLOBAL_CARD'
    )
  }
})

export const useMasterGlobalStore = createStore(masterGlobalsStore)
