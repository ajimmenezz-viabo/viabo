import { create } from 'zustand'
import { devtools } from 'zustand/middleware'

const assignCardStore = (set, get) => ({
  open: false,
  card: null,
  isReadyToAssign: false,
  setCard: card => {
    set(
      state => ({
        card
      }),
      false,
      'SET_CARD'
    )
  },
  setReadyToAssign: ready => {
    set(
      state => ({
        isReadyToAssign: ready
      }),
      false,
      'SET_READY_TO_ASSIGN'
    )
  },
  setOpen: open => {
    set(
      state => ({
        open
      }),
      false,
      'SET_OPEN'
    )
  }
})

export const useAssignCardStore = create(devtools(assignCardStore))
