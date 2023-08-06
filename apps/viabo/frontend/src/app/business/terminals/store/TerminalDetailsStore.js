import { createStore } from '@/app/shared/store'

const initialState = {
  terminal: null
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
        pos: null
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
  }
})

export const useTerminalDetails = createStore(TerminalDetailsStore)
