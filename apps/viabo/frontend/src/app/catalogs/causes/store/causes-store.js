import { createStore } from '@/app/shared/store'

const initialState = {
  openNewCause: false
}

const causesStore = (set, get) => ({
  ...initialState,
  setOpenNewCause: open => {
    set(
      state => ({
        openNewCause: open
      }),
      false,
      'SET_OPEN_NEW_CAUSE'
    )
  }
})

export const useCausesStore = createStore(causesStore)
