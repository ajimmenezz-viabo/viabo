import { useEffect, useRef } from 'react'

import { ArrowBack } from '@mui/icons-material'
import { Avatar, Box, Stack, Typography } from '@mui/material'
import { stringAvatar } from '@theme/utils'

import { ButtonViaboSpei } from '../../shared/components'
import { AdminSpeiAllTransactions } from '../components/movements/AdminSpeiAllTransactions'
import { useFindViaboSpeiAccountsInfo } from '../hooks'
import { useAdminDashboardSpeiStore } from '../store'

import { fCurrency } from '@/shared/utils'

export const AdminDashboardSpeiTransactionsPage = () => {
  const { data, refetch } = useFindViaboSpeiAccountsInfo({ enabled: false })
  const stpAccount = useAdminDashboardSpeiStore(state => state.stpAccount)
  const setStpAccount = useAdminDashboardSpeiStore(state => state.setStpAccount)
  const setOpenTransactions = useAdminDashboardSpeiStore(state => state.setOpenTransactions)
  const ref = useRef(null)

  useEffect(() => {
    if (!stpAccount) {
      refetch()
    }
  }, [stpAccount])

  useEffect(() => {
    if (data) {
      setStpAccount(data)
    }
  }, [data])

  useEffect(() => {
    if (ref?.current) {
      ref.current.scrollIntoView({ behavior: 'instant' })
    }
  }, [])

  return (
    <Stack gap={3} ref={ref}>
      <Box>
        <ButtonViaboSpei
          variant="outlined"
          sx={{ color: 'text.primary' }}
          onClick={() => setOpenTransactions(false)}
          startIcon={<ArrowBack />}
        >
          Regresar
        </ButtonViaboSpei>
      </Box>

      <Stack flexDirection={'row'} gap={3} alignItems={'center'}>
        <Avatar {...stringAvatar('CENTRAL PAY')}></Avatar>
        <Stack>
          <Typography variant="subtitle1" color={'text.disabled'}>
            Cuenta {stpAccount?.accountNumberHidden?.slice(-8)}
          </Typography>
          <Typography fontWeight={'bold'} sx={{ typography: 'h3' }}>
            {fCurrency(stpAccount?.balance)}
          </Typography>
        </Stack>
      </Stack>
      <AdminSpeiAllTransactions />
    </Stack>
  )
}
