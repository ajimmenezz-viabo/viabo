import { useEffect, useMemo, useState } from 'react'

import PropTypes from 'prop-types'

import { Box, Stack, ToggleButton, ToggleButtonGroup, Typography } from '@mui/material'

import { CARDS_COMMERCES_KEYS } from '@/app/business/cards/adapters'
import { TransactionForm } from '@/app/business/cards/components/transfer/TransactionForm'
import { TransferToGlobalForm } from '@/app/business/cards/components/transfer/TransferToGlobalForm'
import { useCommerceDetailsCard } from '@/app/business/cards/store'
import { RightPanel } from '@/app/shared/components'
import { Label } from '@/shared/components/form'
import { useGetQueryData, useUser } from '@/shared/hooks'
import { fCurrency } from '@/shared/utils'

export default function TransferSideBar({ open, setOpen, isFundingCard }) {
  const user = useUser()
  const card = useCommerceDetailsCard(state => state.card)
  const mainCard = useCommerceDetailsCard(state => state.mainCard)
  const cardList = useGetQueryData([CARDS_COMMERCES_KEYS.CARDS_COMMERCE_LIST]) || []
  const [currentBalance, setCurrentBalance] = useState(0)
  const balance = useMemo(() => (isFundingCard ? mainCard?.balance : card?.balance), [mainCard?.balance, card?.balance])
  const [view, setView] = useState('1')
  const [transactionLoading, setTransactionLoading] = useState(false)

  const insufficient = useMemo(
    () => Boolean((parseFloat(balance) - currentBalance).toFixed(2) < 0),
    [currentBalance, balance]
  )
  const isLegalRepresentative = useMemo(() => user?.profile?.toLowerCase() === 'representante legal', [user])

  const filterCards = useMemo(
    () => cardList?.filter(commerceCard => commerceCard.id !== card?.id),
    [cardList, card?.id]
  )

  const handleClose = () => {
    setCurrentBalance(0)
    setOpen(false)
  }

  const handleChangeView = (event, newValue) => {
    if (newValue) {
      setView(newValue)
    }
  }

  useEffect(() => {
    setCurrentBalance(0)
  }, [view])

  return (
    <RightPanel
      open={open}
      handleClose={handleClose}
      titleElement={
        isFundingCard ? (
          <Typography variant="h6">Fondear</Typography>
        ) : (
          <Box>
            <Stack spacing={1} alignItems={'center'} direction={'row'} mb={0.5}>
              <Typography variant="subtitle2">Origen: </Typography>
              <Typography variant="subtitle2">{card?.cardNumberMoreDigits} </Typography>
            </Stack>
            <Label color={'info'}>{card?.assignUser?.name}</Label>
          </Box>
        )
      }
    >
      {!isFundingCard && isLegalRepresentative && (
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
        pt={isFundingCard ? 2 : 1}
      >
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

      {isFundingCard && (
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

      {!isFundingCard && isLegalRepresentative && (
        <>
          {view === '1' && (
            <TransactionForm
              cards={isFundingCard ? cardList : filterCards}
              balance={currentBalance}
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
      {!isFundingCard && !isLegalRepresentative && (
        <TransactionForm
          cards={isFundingCard ? cardList : filterCards}
          balance={currentBalance}
          setCurrentBalance={setCurrentBalance}
          insufficient={insufficient}
          cardOriginId={isFundingCard ? mainCard?.id : card?.id}
          setOpen={setOpen}
          isBinCard={isFundingCard}
          setTransactionLoading={setTransactionLoading}
        />
      )}
    </RightPanel>
  )
}

TransferSideBar.propTypes = {
  isFundingCard: PropTypes.bool,
  open: PropTypes.bool,
  setOpen: PropTypes.func
}
