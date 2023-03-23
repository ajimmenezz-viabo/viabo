import { create } from 'zustand'
import { PROCESS_LIST } from '@/app/business/commerce/services'
import { devtools } from 'zustand/middleware'
import PropTypes from 'prop-types'

export const propTypesStore = {
  actualProcess: PropTypes.string,
  lastProcess: PropTypes.shape({
    name: PropTypes.any,
    info: PropTypes.any
  }),
  getComponent: PropTypes.func,
  setLastProcess: PropTypes.func,
  setActualProcess: PropTypes.func
}
const processStore = (set, get) => ({
  actualProcess: PROCESS_LIST.REGISTER,
  lastProcess: {
    name: null,
    info: null
  },
  processList: [
    {
      name: PROCESS_LIST.REGISTER,
      component: () => import('@/app/business/commerce/components/process/CommerceRegisterForm')
    },
    {
      name: PROCESS_LIST.VALIDATION_REGISTER_CODE,
      component: () => import('@/app/business/commerce/components/process/RegisterCodeValidation')
    }
  ],
  getComponent: () => {
    const { processList, actualProcess } = get()
    const componentDefault = () => import('@/app/business/commerce/components/process/RegisterCodeValidation')
    return processList.find(process => process.name === actualProcess).component ?? componentDefault
  },
  returnComponent: () => {
    const { lastProcess } = get()
    set(state => ({
      ...state,
      actualProcess: lastProcess.name || PROCESS_LIST.REGISTER
    }))
  },
  setLastProcess: process => {
    set(state => ({
      ...state,
      lastProcess: {
        name: process?.name || null,
        info: process?.info || null
      }
    }))
  },
  setActualProcess: processName => {
    set(state => ({
      ...state,
      actualProcess: processName
    }))
  }
})

export const useRegisterProcessStore = create(devtools(processStore))
