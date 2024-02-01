import { lazy, useMemo, useState } from 'react'

import { Stack, Typography } from '@mui/material'
import { m } from 'framer-motion'

import { useAdminDashboardSpeiStore } from '../../store'

import { useFindSpeiThirdAccountsList } from '@/app/business/viabo-spei/third-accounts/hooks'
import { RightPanel } from '@/app/shared/components'
import { varFade } from '@/shared/components/animate'
import { RequestLoadingComponent } from '@/shared/components/loadings'
import { Lodable } from '@/shared/components/lodables'
import { ErrorRequestPage } from '@/shared/components/notifications'
import { fCurrency } from '@/shared/utils'

const SpeiOutForm = Lodable(lazy(() => import('./SpeiOutForm')))
const SpeiOutResume = Lodable(lazy(() => import('./SpeiOutResume')))
const SpeiOutSuccess = Lodable(lazy(() => import('./SpeiOutSuccess')))

const SpeiOutDrawer = () => {
  const { data: accounts, isLoading, isError, error, refetch } = useFindSpeiThirdAccountsList()
  const { setOpenSpeiOut, openSpeiOut, stpAccount } = useAdminDashboardSpeiStore()

  const [currentBalance, setCurrentBalance] = useState(0)
  const [transactionForm, setTransactionForm] = useState(null)
  const balance = useMemo(() => stpAccount?.balance, [stpAccount?.balance])
  const [showResume, setShowResume] = useState(false)
  const [transactionData, setTransactionData] = useState(null)
  const [successTransaction, setSuccessTransaction] = useState(null)
  const [transactionLoading, setTransactionLoading] = useState(false)

  const insufficient = useMemo(
    () => Boolean((parseFloat(balance) - currentBalance).toFixed(2) < 0),
    [currentBalance, balance]
  )

  const handleClose = () => {
    setOpenSpeiOut(false)
    setCurrentBalance(0)
    setShowResume(false)
    setTransactionData(null)
    setTransactionLoading(false)
    setTransactionForm(null)
    setSuccessTransaction(null)
  }

  const handleSuccessForm = values => {
    setTransactionForm(values)

    setTransactionData({
      transactions: values?.transactions || [],
      concept: values?.concept,
      balance,
      currentBalance
    })
    setShowResume(true)
  }

  const handleBackResume = () => {
    setShowResume(false)
  }

  const handleSuccess = transaction => {
    setShowResume(false)
    setSuccessTransaction(transaction)
  }

  const titleTransaction = <Typography variant="h6">SPEI Out</Typography>

  const renderContentTransaction = (
    <>
      <Stack flexDirection="column" alignItems={'center'} justifyContent={'space-between'} spacing={0} px={3} pt={2}>
        <Typography variant="subtitle1">Saldo</Typography>
        <Stack direction={'row'} spacing={1} alignItems={'center'}>
          <Typography variant="h3" color={'success.main'}>
            {fCurrency(balance)}
          </Typography>
          <Typography variant="caption" color={'success.main'}>
            MXN
          </Typography>
        </Stack>
        <Stack direction={'row'} spacing={1} alignItems={'center'}>
          <Typography variant="subtitle1" color={'error'}>
            - {fCurrency(currentBalance)}
          </Typography>
          <Typography variant="caption" color={'error'}>
            MXN
          </Typography>
        </Stack>
        {insufficient && (
          <Typography variant="caption" color={'warning.main'} textAlign={'center'}>
            Saldo insuficiente para realizar la(s) operacion(es)
          </Typography>
        )}
      </Stack>
      <SpeiOutForm
        accounts={accounts || []}
        insufficient={insufficient}
        onSuccess={handleSuccessForm}
        setCurrentBalance={setCurrentBalance}
        initialValues={transactionForm}
      />
    </>
  )

  return (
    <RightPanel open={openSpeiOut} handleClose={handleClose} titleElement={titleTransaction}>
      {isLoading && <RequestLoadingComponent />}

      {isError && !isLoading && (
        <ErrorRequestPage errorMessage={error} titleMessage={'Lista de Cuentas'} handleButton={() => refetch()} />
      )}

      {!isError && !isLoading && openSpeiOut && !showResume && !successTransaction && (
        <m.div
          variants={varFade().in}
          style={{
            display: showResume ? 'none' : 'flex',
            flex: 1,
            overflow: 'hidden',
            flexDirection: 'column'
          }}
        >
          {renderContentTransaction}
        </m.div>
      )}

      {!isError && !isLoading && openSpeiOut && showResume && !successTransaction && (
        <m.div variants={varFade().in}>
          <SpeiOutResume
            data={transactionData}
            onBack={handleBackResume}
            setTransactionLoading={setTransactionLoading}
            transactionLoading={transactionLoading}
            onSuccess={handleSuccess}
          />
        </m.div>
      )}

      {!isError && !isLoading && openSpeiOut && !showResume && successTransaction && (
        <m.div variants={varFade().in}>
          <SpeiOutSuccess transactions={successTransaction} onFinish={handleClose} />
        </m.div>
      )}
    </RightPanel>
  )
}

export default SpeiOutDrawer
