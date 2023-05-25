import { useSettings } from '@theme/hooks'
import { varFade } from '@/shared/components/animate'
import { NAVBAR } from '@theme/overrides/options'
import { useEffect, useMemo, useState } from 'react'
import { Backdrop, Divider, IconButton, Stack, Typography } from '@mui/material'
import { AnimatePresence } from 'framer-motion'
import { SideBarStyle } from '@/app/shared/components'
import { Close } from '@mui/icons-material'
import { useCommerceDetailsCard } from '@/app/business/cards/store'
import { TransactionForm } from '@/app/business/cards/components/transfer/TransactionForm'
import { useGetQueryData } from '@/shared/hooks'
import { CARDS_COMMERCES_KEYS } from '@/app/business/cards/adapters'
import { fCurrency } from '@/shared/utils'

export function TransferSideBar({ open, setOpen, isBinCard, bincardBalance, bincardId }) {
  const { themeDirection } = useSettings()

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

  const varSidebar =
    themeDirection !== 'rtl'
      ? varFade({
          distance: NAVBAR.BASE_WIDTH,
          durationIn: 0.32,
          durationOut: 0.32
        }).inRight
      : varFade({
          distance: NAVBAR.BASE_WIDTH,
          durationIn: 0.32,
          durationOut: 0.32
        }).inLeft

  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
  }, [open])

  const handleClose = () => {
    setOpen(false)
  }

  return (
    <>
      <Backdrop
        open={open}
        onClick={handleClose}
        sx={{ background: 'transparent', zIndex: theme => theme.zIndex.drawer + 1 }}
      />

      <AnimatePresence>
        {open && (
          <>
            <SideBarStyle {...varSidebar}>
              <Stack direction="row" alignItems="center" justifyContent="space-between" sx={{ py: 2, pr: 1, pl: 2.5 }}>
                <Typography variant="subtitle1">{isBinCard ? 'Fondear' : 'Transferencias'}</Typography>
                <div>
                  <IconButton aria-label="close" size="medium" onClick={handleClose}>
                    <Close width={20} height={20} fontSize="inherit" color="primary" />
                  </IconButton>
                </div>
              </Stack>

              <Divider sx={{ borderStyle: 'dashed' }} />
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
                balance={card?.balance}
                setCurrentBalance={setCurrentBalance}
                insufficient={insufficient}
                cardOrigin={isBinCard ? bincardId : card?.id}
                setOpen={setOpen}
                isBinCard={isBinCard}
              />
            </SideBarStyle>
          </>
        )}
      </AnimatePresence>
    </>
  )
}
