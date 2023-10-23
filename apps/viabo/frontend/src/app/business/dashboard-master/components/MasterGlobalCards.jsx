import { useMemo, useState } from 'react'

import PropTypes from 'prop-types'

import { CurrencyExchangeOutlined, Update } from '@mui/icons-material'
import { LoadingButton } from '@mui/lab'
import { Box, Button, Card, CardHeader, Divider, Stack, Typography } from '@mui/material'
import { AnimatePresence, motion } from 'framer-motion'

import FundingCommerceCardsDrawer from './FundingCommerceCardsDrawer'

import { useFindCommerceCards } from '../../viabo-card/cards/hooks'

import { FundingGlobalCard } from '@/app/business/dashboard-master/components/FundingGlobalCard'
import { useMasterGlobalStore } from '@/app/business/dashboard-master/store'
import { CardBalance } from '@/app/business/viabo-card/cards/components/details'
import { getCardTypeByName } from '@/app/shared/services'
import { RequestLoadingComponent } from '@/shared/components/loadings'
import { Scrollbar } from '@/shared/components/scroll'

export function MasterGlobalCards({ data, isLoading }) {
  const [view, setView] = useState('1')
  const cardSelected = useMasterGlobalStore(state => state.card)
  const setGlobalCard = useMasterGlobalStore(state => state.setGlobalCard)
  const resetGlobalCard = useMasterGlobalStore(state => state.resetGlobalCard)
  const setIsMaster = useMasterGlobalStore(state => state.setIsMaster)
  const setFilterPaymentProcessor = useMasterGlobalStore(state => state.setFilterPaymentProcessor)
  const getBalance = useMasterGlobalStore(state => state.getBalance)
  const movements = useMasterGlobalStore(state => state.movements)
  const isMaster = useMasterGlobalStore(state => state.isMaster)

  const {
    data: commerceCards,
    isLoading: isLoadingCards,
    isRefetching: isRefetchingCards,
    refetch,
    isSuccess
  } = useFindCommerceCards(cardSelected?.paymentProcessorId, {
    enabled: !!cardSelected?.paymentProcessorId
  })

  const balance = useMemo(() => getBalance(), [movements])

  const [openTransfer, setOpenTransfer] = useState(false)

  const master = data?.master
  const globals = data?.globals

  const handleSelectPaymentProcessor = card => () => {
    setFilterPaymentProcessor(card?.paymentProcessor)
    setIsMaster(false)
    setGlobalCard(card)
    setView('1')
  }

  const handleSelectOperation = (card, view) => () => {
    setFilterPaymentProcessor(card?.paymentProcessor)
    setGlobalCard(card)
    setView(view)
    setIsMaster(false)
  }

  return (
    <AnimatePresence>
      <Stack spacing={2} flex={1}>
        <motion.div
          onClick={() => {
            setIsMaster(true)
            setView('1')
            resetGlobalCard()
            setFilterPaymentProcessor(null)
          }}
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.8 }}
        >
          <Card
            sx={{
              p: 0,
              cursor: 'pointer',
              border: isMaster ? 3 : 0,
              borderColor: theme =>
                isMaster
                  ? theme.palette.mode === 'dark'
                    ? theme.palette.secondary.main
                    : theme.palette.primary.main
                  : 'inherit'
            }}
          >
            <CardHeader
              title={
                <Stack flexDirection={'row'} gap={1} alignItems={'center'}>
                  <Typography variant="subtitle2">Global [Master]</Typography>
                </Stack>
              }
              sx={{ px: 2, py: 2 }}
            />
            {isLoading ? (
              <RequestLoadingComponent mb={3} />
            ) : (
              <Stack alignItems={'center'} pb={2} px={2}>
                <Stack direction={'row'} alignItems={'center'} spacing={1}>
                  <Typography variant="h3">{master?.balanceFormatted}</Typography>
                  <Typography variant="caption">MXN</Typography>
                </Stack>

                <Stack direction={'row'} alignItems={'center'} spacing={1}>
                  <Update sx={{ width: 30, height: 30, color: 'text.secondary' }} />

                  <Stack alignItems={'center'}>
                    <Typography variant={'subtitle2'}>En transito</Typography>

                    <Stack direction={'row'} spacing={1} alignItems={'center'}>
                      <Typography variant="body1">{master?.inTransitFormatted}</Typography>
                      <Typography variant="caption">MXN</Typography>
                    </Stack>
                  </Stack>
                </Stack>
              </Stack>
            )}
          </Card>
        </motion.div>

        <Box>
          <Scrollbar>
            <Stack direction={{ xs: 'column', md: 'row' }} spacing={2} pb={2}>
              {globals?.map(card => {
                const cardLogo = getCardTypeByName(card?.paymentProcessor)
                const CardLogoComponent = cardLogo?.component
                const selected = cardSelected?.id === card?.id
                return (
                  <Stack key={card?.cardId} flexGrow={1} position={'relative'}>
                    <Card
                      sx={{
                        minWidth: { xs: 300, md: 'auto' },
                        border: selected ? 3 : 0,
                        borderColor: theme =>
                          selected
                            ? theme.palette.mode === 'dark'
                              ? theme.palette.secondary.main
                              : theme.palette.primary.main
                            : 'inherit'
                      }}
                    >
                      <motion.div
                        onClick={handleSelectPaymentProcessor(card)}
                        whileTap={{ scale: 0.8 }}
                        style={{ cursor: 'pointer' }}
                      >
                        <CardHeader
                          title={
                            <Stack flexDirection={'row'} gap={1} alignItems={'center'} justifyContent={'space-between'}>
                              <Typography variant="caption">{card?.paymentProcessor}</Typography>
                              {cardLogo && <CardLogoComponent sx={{ width: 30, height: 30 }} />}
                            </Stack>
                          }
                          sx={{ px: 2, py: 2 }}
                        />

                        <Stack alignItems={'center'} pb={2} px={2}>
                          <Stack direction={'row'} alignItems={'center'} spacing={1}>
                            <Typography variant="h6">{card?.balanceFormatted}</Typography>
                            <Typography variant="caption">MXN</Typography>
                          </Stack>

                          <Stack direction={'row'} alignItems={'center'} spacing={1}>
                            <Update sx={{ width: 20, height: 20, color: 'text.secondary' }} />

                            <Stack alignItems={'center'}>
                              <Typography variant={'subtitle2'}>En transito</Typography>

                              <Stack direction={'row'} spacing={1} alignItems={'center'}>
                                <Typography variant="body2">{card?.inTransitFormatted}</Typography>
                                <Typography variant="caption">MXN</Typography>
                              </Stack>
                            </Stack>
                          </Stack>
                        </Stack>
                      </motion.div>

                      <Divider sx={{ borderStyle: 'dashed' }} />
                      <Stack px={2} py={1} flexDirection={'row'} justifyContent={'space-between'}>
                        <Button onClick={handleSelectOperation(card, '1')}>Balance</Button>
                        <Button onClick={handleSelectOperation(card, '2')}>Fondeo</Button>
                      </Stack>
                    </Card>
                  </Stack>
                )
              })}
            </Stack>
          </Scrollbar>
        </Box>

        {view === '1' && (
          <CardBalance
            card={balance}
            title={
              cardSelected && !isMaster ? `Balance ${cardSelected?.paymentProcessor?.toLowerCase()}` : 'Balance Master'
            }
          />
        )}
        {view === '2' && cardSelected && !isMaster && (
          <>
            <FundingGlobalCard
              actions={
                <LoadingButton
                  fullWidth
                  variant="contained"
                  color="secondary"
                  startIcon={<CurrencyExchangeOutlined />}
                  sx={{ color: 'black', fontWeight: 'bolder' }}
                  loading={isRefetchingCards}
                  onClick={() => {
                    setOpenTransfer(true)
                  }}
                >
                  Fondear Tarjetas
                </LoadingButton>
              }
            />
            <FundingCommerceCardsDrawer
              setOpen={setOpenTransfer}
              open={openTransfer}
              card={cardSelected}
              cardList={commerceCards}
            />
          </>
        )}
      </Stack>
    </AnimatePresence>
  )
}

MasterGlobalCards.propTypes = {
  data: PropTypes.shape({
    globals: PropTypes.array,
    master: PropTypes.shape({
      balanceFormatted: PropTypes.any,
      inTransitFormatted: PropTypes.any
    })
  }),
  isLoading: PropTypes.any
}
