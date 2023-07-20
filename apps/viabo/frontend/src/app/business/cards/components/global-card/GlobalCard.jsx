import { Button, Card, CardHeader, Divider, Stack, Typography } from '@mui/material'
import { CircularLoading } from '@/shared/components/loadings'
import { useFindMainCard } from '@/app/business/cards/hooks/useFindMainCard'
import { LoadingButton } from '@mui/lab'
import { useUser } from '@/shared/hooks'
import { Dangerous, Update } from '@mui/icons-material'
import { useCommerceDetailsCard } from '@/app/business/cards/store'
import { useEffect, useState } from 'react'
import { useFindTransitBalanceCommerce } from '@/app/business/cards/hooks'
import { CarnetLogo, MasterCardLogo } from '@/shared/components/images'
import { useNavigate } from 'react-router-dom'
import { BUSINESS_PATHS, BUSINESS_PERMISSIONS } from '@/app/business/shared/routes'
import { CardBalance, CardCharge } from '@/app/business/cards/components/details'

export function GlobalCard({ openSidebar }) {
  const user = useUser()
  const userActions = user?.permissions ?? []
  const navigate = useNavigate()

  if (!userActions.includes(BUSINESS_PERMISSIONS.COMMERCE_CARDS)) {
    return null
  }

  const cardTypeSelected = useCommerceDetailsCard(state => state.cardTypeSelected)
  const setCommerceCard = useCommerceDetailsCard(state => state.setCard)
  const addInfoCard = useCommerceDetailsCard(state => state.addInfoCard)
  const setIsMainCard = useCommerceDetailsCard(state => state.setSelectedMainCard)
  const isMainCard = useCommerceDetailsCard(state => state.isMainCardSelected)
  const [view, setView] = useState('1')

  const {
    data: transit,
    isError: isErrorTransit,
    refetch: refetchTransit,
    isSuccess: isSuccessTransit,
    isFetching: isRefetchingTransit
  } = useFindTransitBalanceCommerce(cardTypeSelected, {
    enabled: false
  })

  const {
    data,
    isError,
    refetch,
    isSuccess,
    isFetching: isRefetching
  } = useFindMainCard(cardTypeSelected, {
    enabled: false
  })

  useEffect(() => {
    if (cardTypeSelected) {
      refetchTransit()
      refetch()
    }
  }, [cardTypeSelected])

  if (!openSidebar) {
    return null
  }

  const handleOpenDetails = e => {
    if (!isMainCard) {
      setIsMainCard(true)
      setCommerceCard(data)
      addInfoCard({
        movements: [],
        expenses: '$0.00',
        income: '$0.00',
        balanceMovements: '$0.00'
      })
      navigate(BUSINESS_PATHS.globalCard)
    }
  }

  return (
    <Stack spacing={3}>
      <Card sx={{ p: 0 }} onClick={handleOpenDetails}>
        <CardHeader
          title={
            <Stack flexDirection={'row'} gap={1} alignItems={'center'}>
              <Typography variant="subtitle2">Global</Typography>
            </Stack>
          }
          sx={{ px: 2 }}
        />

        <Stack alignItems={'center'} pb={2} px={2}>
          {cardTypeSelected === '1' && <MasterCardLogo />}
          {cardTypeSelected === '2' && <CarnetLogo />}
          {isRefetching && (
            <CircularLoading
              size={25}
              containerProps={{
                display: 'flex',
                py: 1,
                alignItems: 'center'
              }}
            />
          )}
          {isError && !isRefetching && (
            <LoadingButton
              loading={isRefetching}
              variant={'contained'}
              size="small"
              color="error"
              sx={{ mt: 1, mb: 2 }}
              startIcon={<Dangerous />}
              onClick={() => {
                refetch()
              }}
            >
              Recargar
            </LoadingButton>
          )}
          {isSuccess && !isRefetching && (
            <Stack direction={'row'} spacing={1} alignItems={'center'}>
              <Typography variant="h3">{data?.balanceFormatted}</Typography>
              <Typography variant="caption">MXN</Typography>
            </Stack>
          )}

          <Stack direction={'row'} alignItems={'center'} spacing={1}>
            <Update sx={{ width: 30, height: 30, color: 'text.secondary' }} />

            <Stack alignItems={'center'}>
              <Typography variant={'subtitle2'}>En transito</Typography>
              {isRefetchingTransit && (
                <CircularLoading
                  size={15}
                  containerProps={{
                    py: 1
                  }}
                />
              )}
              {isErrorTransit && !isRefetchingTransit && (
                <LoadingButton
                  loading={isRefetchingTransit}
                  color="error"
                  sx={{ mt: 0.5 }}
                  startIcon={<Dangerous />}
                  size="small"
                  variant={'contained'}
                  onClick={() => {
                    refetchTransit()
                  }}
                >
                  Recargar
                </LoadingButton>
              )}
              {isSuccessTransit && !isRefetchingTransit && (
                <Stack direction={'row'} spacing={1} alignItems={'center'}>
                  <Typography variant="body1">{transit?.inTransitFormatted}</Typography>
                  <Typography variant="caption">MXN</Typography>
                </Stack>
              )}
            </Stack>
          </Stack>
        </Stack>
        {isMainCard && (
          <>
            <Divider sx={{ borderStyle: 'dashed' }} />
            <Stack p={2} flexDirection={'row'} justifyContent={'space-between'}>
              <Button onClick={() => setView('1')}>Balance</Button>
              <Button onClick={() => setView('2')}>Fondeo</Button>
            </Stack>
          </>
        )}
      </Card>

      {view === '1' && isMainCard && <CardBalance />}
      {view === '2' && isMainCard && <CardCharge disabledExpand={true} />}
    </Stack>
  )
}