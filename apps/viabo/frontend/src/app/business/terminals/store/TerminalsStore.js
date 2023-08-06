import { createStore } from '@/app/shared/store'

const initialState = {
  terminals: [],
  isOpenList: true,
  isCollapse: false
}

const TerminalsStore = (set, get) => ({
  ...initialState,
  setTerminals: terminals => {
    set(
      state => ({
        terminals
      }),
      false,
      'SET_TERMINAL'
    )
  },
  setOpenList: open => {
    set(
      state => ({
        isOpenList: open
      }),
      false,
      'SET_OPEN_LIST'
    )
  },
  setCollapse: collapse => {
    set(
      state => ({
        isCollapse: collapse
      }),
      false,
      'SET_COLLAPSE'
    )
  }
})

export const useTerminals = createStore(TerminalsStore)
