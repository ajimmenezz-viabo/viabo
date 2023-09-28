import { createStore } from '@/app/shared/store'

const initialState = {
  terminal: null,
  conciliateMovements: null,
  openConciliate: false
}

const TerminalDetailsStore = (set, get) => ({
  ...initialState,
  setTerminal: terminalSelected => {
    const { terminal } = get()

    set(
      state => ({
        terminal: { ...terminal, ...terminalSelected }
      }),
      false,
      'SET_TERMINAL_SELECTED'
    )
  },
  resetTerminal: () => {
    set(
      state => ({
        terminal: null
      }),
      false,
      'RESET_TERMINAL_SELECTED'
    )
  },

  addTerminalInfo: info => {
    const { terminal } = get()
    set(
      state => ({
        terminal: { ...terminal, ...info }
      }),
      false,
      'SET_TERMINAL_INFO'
    )
  },
  setOpenConciliate: open => {
    set(
      state => ({
        openConciliate: open
      }),
      false,
      'SET_OPEN_CONCILIATE'
    )
  },
  setConciliateMovements: movements => {
    set(
      state => ({
        conciliateMovements: movements
      }),
      false,
      'SET_CONCILIATE_MOVEMENTS'
    )
  }
})

export const useTerminalDetails = createStore(TerminalDetailsStore)
