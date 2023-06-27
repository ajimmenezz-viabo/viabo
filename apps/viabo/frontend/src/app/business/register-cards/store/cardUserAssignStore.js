import { create } from 'zustand'
import { devtools } from 'zustand/middleware'
import { CARD_ASSIGN_PROCESS_LIST } from '@/app/business/register-cards/services'

const initialState = {
  step: CARD_ASSIGN_PROCESS_LIST.USER_REGISTER,
  user: null,
  card: null
}
const cardUserAssign = (set, get) => ({
  ...initialState,
  setStepAssignRegister: step => {
    set(
      state => ({
        step
      }),
      false,
      'SET_STEP_ASSIGN'
    )
  },
  setUser: value => {
    set(
      state => ({
        user: value
      }),
      false,
      'SET_USER_ASSIGN'
    )
  },
  setCard: value => {
    set(
      state => ({
        card: value
      }),
      false,
      'SET_CARD_ASSIGN'
    )
  },
  resetState: () => {
    set(
      state => ({
        initialState
      }),
      false,
      'RESET_CARD_USER_STORE'
    )
  }
})

export const useCardUserAssign = create(devtools(cardUserAssign))
