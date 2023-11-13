import { createStore } from '@/app/shared/store'

const initialState = {
  openDrawerLiquidateMovement: false,
  movement: null
}

const liquidatedMovementsStore = (set, get) => ({
  ...initialState,
  setMovementToLiquidate: movement => {
    set(
      state => ({
        movement
      }),
      false,
      'SET_DETAILS_MOVEMENT_TO_LIQUIDATE'
    )
  },

  setOpenDrawerLiquidateMovement: open => {
    set(
      state => ({
        openDrawerLiquidateMovement: open
      }),
      false,
      'SET_OPEN_LIQUIDATE_MOVEMENT_VIABO_PAY'
    )
  }
})

export const useViaboPayLiquidatedMovementsStore = createStore(liquidatedMovementsStore)
