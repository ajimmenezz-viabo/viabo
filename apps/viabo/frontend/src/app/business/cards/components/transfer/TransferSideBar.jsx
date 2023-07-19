import { useEffect, useMemo, useState } from 'react'
import { Avatar, Chip, Stack, ToggleButton, ToggleButtonGroup, Typography } from '@mui/material'
import { useCommerceDetailsCard } from '@/app/business/cards/store'
import { TransactionForm } from '@/app/business/cards/components/transfer/TransactionForm'
import { useGetQueryData } from '@/shared/hooks'
import { CARDS_COMMERCES_KEYS } from '@/app/business/cards/adapters'
import { fCurrency } from '@/shared/utils'
import { RightPanel } from '@/app/shared/components'
import { TransferToGlobalForm } from '@/app/business/cards/components/transfer/TransferToGlobalForm'
import { stringAvatar } from '@theme/utils'

export default function TransferSideBar({ open, setOpen, isFundingCard }) {
  const card = useCommerceDetailsCard(state => state.card)
  const mainCard = useCommerceDetailsCard(state => state.mainCard)
  const cardList = useGetQueryData([CARDS_COMMERCES_KEYS.CARDS_COMMERCE_LIST]) || []
  const [currentBalance, setCurrentBalance] = useState(isFundingCard ? mainCard?.balance : card?.balance)
  const [view, setView] = useState('1')
  const [transactionLoading, setTransactionLoading] = useState(false)

  const insufficient = useMemo(() => Boolean(currentBalance < 0), [currentBalance])

  useEffect(() => {
    if (!isFundingCard) {
      setCurrentBalance(card?.balance)
    }
  }, [card?.balance, isFundingCard])

  useEffect(() => {
    if (isFundingCard) {
      setCurrentBalance(mainCard?.balance)
    }
  }, [mainCard?.balance, isFundingCard])

  const filterCards = useMemo(
    () => cardList?.filter(commerceCard => commerceCard.id !== card?.id),
    [cardList, card?.id]
  )

  const handleClose = () => {
    setCurrentBalance(isFundingCard ? mainCard?.balance : card?.balance)
    setOpen(false)
  }

  const handleChangeView = (event, newValue) => {
    setView(newValue)
  }

  return (
    <RightPanel
      open={open}
      handleClose={handleClose}
      titleElement={
        isFundingCard ? (
          <Typography variant="h6">Fondear</Typography>
        ) : (
          <Stack>
            <Stack spacing={1} alignItems={'center'} direction={'row'}>
              <Typography variant="subtitle2">Origen: </Typography>
              <Typography variant="subtitle2">{card?.cardNumberMoreDigits} </Typography>
            </Stack>
            <Chip avatar={<Avatar {...stringAvatar(card?.assignUser?.name ?? '')} />} label={card?.assignUser?.name} />
          </Stack>
        )
      }
    >
      {!isFundingCard && (
        <Stack alignItems={'flex-end'} sx={{ py: 1, px: 3 }}>
          <ToggleButtonGroup
            size={'small'}
            color="primary"
            value={view}
            exclusive
            onChange={handleChangeView}
            aria-label="Platform"
            disabled={transactionLoading}
          >
            <ToggleButton value="1">Tarjetas</ToggleButton>
            <ToggleButton value="2">Global</ToggleButton>
          </ToggleButtonGroup>
        </Stack>
      )}

      <Stack
        flexDirection="column"
        alignItems={'center'}
        justifyContent={'space-between'}
        spacing={0}
        px={3}
        py={isFundingCard ? 3 : 1}
      >
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
      {isFundingCard && (
        <TransactionForm
          cards={isFundingCard ? cardList : filterCards}
          balance={isFundingCard ? mainCard?.balance : card?.balance}
          setCurrentBalance={setCurrentBalance}
          insufficient={insufficient}
          cardOrigin={isFundingCard ? mainCard?.id : card?.id}
          setOpen={setOpen}
          isBinCard={isFundingCard}
        />
      )}
      {!isFundingCard && (
        <>
          {view === '1' && (
            <TransactionForm
              cards={isFundingCard ? cardList : filterCards}
              balance={isFundingCard ? mainCard?.balance : card?.balance}
              setCurrentBalance={setCurrentBalance}
              insufficient={insufficient}
              cardOriginId={isFundingCard ? mainCard?.id : card?.id}
              setOpen={setOpen}
              isBinCard={isFundingCard}
              setTransactionLoading={setTransactionLoading}
            />
          )}
          {view === '2' && (
            <TransferToGlobalForm
              mainCard={mainCard}
              balance={card?.balance}
              setCurrentBalance={setCurrentBalance}
              insufficient={insufficient}
              cardOriginId={card?.id}
              setOpen={setOpen}
              setTransactionLoading={setTransactionLoading}
            />
          )}
        </>
      )}
    </RightPanel>
  )
}
