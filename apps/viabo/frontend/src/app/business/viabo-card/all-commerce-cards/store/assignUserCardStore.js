import { createStore } from '@/app/shared/store'

const initialState = {
  cardInfo: null,
  openUserInfo: false
}
const assignUserInfo = (set, get) => ({
  ...initialState,
  setOpenUserInfo: open => {
    set(
      state => ({
        openUserInfo: open
      }),
      false,
      'SET_OPEN_USER_INFO_MODAL'
    )
  },
  setCardInfo: card => {
    set(
      state => ({
        cardInfo: card
      }),
      false,
      'SET_CARD_INFO'
    )
  }
})

export const useAssignUserCard = createStore(assignUserInfo)
