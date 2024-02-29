import { lazy, useEffect } from 'react'

import { Box } from '@mui/material'
import { m } from 'framer-motion'

import { AdminDashboardSpeiResume } from './AdminDashboardSpeiResume'
import { AdminDashboardSpeiTransactionsPage } from './AdminDashboardSpeiTransactionsPage'

import { useSharedViaboSpeiStore } from '../../../shared/store'
import { useAdminDashboardSpeiStore } from '../store'

import { MotionContainer, varFade } from '@/shared/components/animate'
import { Lodable } from '@/shared/components/lodables'

const AdminSpeiMovementDrawer = Lodable(lazy(() => import('../components/movements/AdminSpeiMovementDrawer')))

const AdminDashboardViaboSpei = () => {
  const isOpenTransactions = useAdminDashboardSpeiStore(state => state.isOpenTransactions)
  const setDashboardTitle = useSharedViaboSpeiStore(state => state.setDashboardTitle)

  useEffect(() => {
    if (isOpenTransactions) {
      return setDashboardTitle('Transacciones')
    }
    return setDashboardTitle('Dashboard')
  }, [isOpenTransactions])

  return (
    <>
      <Box component={MotionContainer}>
        {!isOpenTransactions && (
          <m.div variants={varFade().in}>
            <AdminDashboardSpeiResume />
          </m.div>
        )}
        {isOpenTransactions && (
          <m.div variants={varFade().in}>
            <AdminDashboardSpeiTransactionsPage />
          </m.div>
        )}
      </Box>
      <AdminSpeiMovementDrawer />
    </>
  )
}

export default AdminDashboardViaboSpei
