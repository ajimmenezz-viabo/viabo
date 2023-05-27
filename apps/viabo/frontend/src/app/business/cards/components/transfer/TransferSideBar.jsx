import { useEffect, useMemo, useState } from 'react'
import { Stack, Typography } from '@mui/material'
import { useCommerceDetailsCard } from '@/app/business/cards/store'
import { TransactionForm } from '@/app/business/cards/components/transfer/TransactionForm'
import { useGetQueryData } from '@/shared/hooks'
import { CARDS_COMMERCES_KEYS } from '@/app/business/cards/adapters'
import { fCurrency } from '@/shared/utils'
import { RightPanel } from '@/app/shared/components'

export default function TransferSideBar({ open, setOpen, isBinCard, bincardBalance, bincardId }) {
  const card = !isBinCard ? useCommerceDetailsCard(state => state.card) : null
  const cardList = useGetQueryData([CARDS_COMMERCES_KEYS.CARDS_COMMERCE_LIST]) || []
  const [currentBalance, setCurrentBalance] = useState(isBinCard ? bincardBalance : card?.balance)

  const insufficient = useMemo(() => Boolean(currentBalance < 0), [currentBalance])

  useEffect(() => {
    setCurrentBalance(card?.balance)
  }, [card?.balance])

  useEffect(() => {
    if (bincardBalance) {
      setCurrentBalance(bincardBalance)
    }
  }, [bincardBalance])

  const filterCards = useMemo(
    () => cardList?.filter(commerceCard => commerceCard.id !== card?.id),
    [cardList, card?.id]
  )

  const handleClose = () => {
    setCurrentBalance(isBinCard ? bincardBalance : card?.balance)
    setOpen(false)
  }

  return (
    <RightPanel open={open} handleClose={handleClose} title={isBinCard ? 'Fondear' : 'Transferencias'}>
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
            No cuenta con suficiente saldo para realizar la(s) operacion(es)
          </Typography>
        )}
      </Stack>
      <TransactionForm
        cards={isBinCard ? cardList : filterCards}
        balance={isBinCard ? bincardBalance : card?.balance}
        setCurrentBalance={setCurrentBalance}
        insufficient={insufficient}
        cardOrigin={isBinCard ? bincardId : card?.id}
        setOpen={setOpen}
        isBinCard={isBinCard}
      />
    </RightPanel>
  )
}
