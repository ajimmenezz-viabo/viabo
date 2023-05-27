import { RightPanel } from '@/app/shared/components'
import { Stack, Typography } from '@mui/material'
import { fCurrency } from '@/shared/utils'
import { useCommerceDetailsCard } from '@/app/business/cards/store'
import { useEffect, useMemo, useState } from 'react'
import { PaymentForm } from '@/app/business/cards/components/sendPayment/PaymentForm'

export default function PaymentSidebar({ open, setOpen }) {
  const card = useCommerceDetailsCard(state => state.card)

  const [currentBalance, setCurrentBalance] = useState(card?.balance)

  const insufficient = useMemo(() => Boolean(currentBalance < 0), [currentBalance])
  const handleClose = () => {
    setOpen(false)
  }

  useEffect(() => {
    setCurrentBalance(card?.balance)
  }, [card?.balance])

  return (
    <RightPanel open={open} handleClose={handleClose} title={'Enviar Pago'}>
      <Stack flexDirection="column" alignItems={'center'} justifyContent={'space-between'} spacing={0} p={5}>
        <Typography variant="subtitle1">Saldo</Typography>
        <Stack direction={'row'} spacing={2} alignItems={'center'}>
          <Typography variant="h3" color={insufficient ? 'error' : 'success.main'}>
            {fCurrency(currentBalance)}
          </Typography>
          <Typography variant="caption" color={insufficient ? 'error' : 'success.main'}>
            MXN
          </Typography>
        </Stack>
        {insufficient && (
          <Typography variant="caption" color={'warning.main'} textAlign={'center'}>
            No cuenta con suficiente saldo para realizar la operación
          </Typography>
        )}
      </Stack>
      <PaymentForm balance={card?.balance} insufficient={insufficient} setCurrentBalance={setCurrentBalance} />
    </RightPanel>
  )
}
