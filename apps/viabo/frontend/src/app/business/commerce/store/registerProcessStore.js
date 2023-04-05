import { create } from 'zustand'
import { PROCESS_LIST } from '@/app/business/commerce/services'
import { devtools } from 'zustand/middleware'
import PropTypes from 'prop-types'

export const propTypesStore = {
  actualProcess: PropTypes.string,
  token: PropTypes.string,
  resume: PropTypes.object,
  lastProcess: PropTypes.shape({
    name: PropTypes.any,
    info: PropTypes.any
  }),
  getComponent: PropTypes.func,
  setLastProcess: PropTypes.func,
  setActualProcess: PropTypes.func,
  setToken: PropTypes.func,
  setResume: PropTypes.func
}
const processStore = (set, get) => ({
  actualProcess: PROCESS_LIST.REGISTER,
  token: null,
  resume: null,
  lastProcess: {
    name: null,
    info: null
  },
  processList: [
    {
      name: PROCESS_LIST.REGISTER,
      component: () => import('@/app/business/commerce/components/process/register/CommerceRegisterForm')
    },
    {
      name: PROCESS_LIST.VALIDATION_CODE,
      component: () => import('@/app/business/commerce/components/process/ValidationCode')
    },
    {
      name: PROCESS_LIST.SERVICES_SELECTION,
      component: () => import('@/app/business/commerce/components/process/ServicesSelection')
    },
    {
      name: PROCESS_LIST.COMMERCE_INFO,
      component: () => import('@/app/business/commerce/components/process/CommerceInfo')
    },
    {
      name: PROCESS_LIST.CONTINUE_PROCESS,
      component: () => import('@/app/business/commerce/components/process/ProcessContinue')
    }
  ],
  getComponent: () => {
    const { processList, actualProcess } = get()
    const componentDefault = () => import('@/app/business/commerce/components/process/ValidationCode')
    return processList.find(process => process.name === actualProcess).component ?? componentDefault
  },
  setLastProcess: process => {
    set(state => ({
      lastProcess: {
        name: process?.name || null,
        info: process?.info || null
      }
    }))
  },
  setActualProcess: processName => {
    set(state => ({
      actualProcess: processName
    }))
  },
  setToken: token => {
    set(state => ({
      token
    }))
  },
  setResume: resume => {
    set(state => ({
      resume
    }))
  }
})

export const useRegisterProcessStore = create(devtools(processStore))
