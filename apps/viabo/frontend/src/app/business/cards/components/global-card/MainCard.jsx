import { Card, CardHeader, IconButton, MenuItem, Stack, Tooltip, Typography } from '@mui/material'
import { CircularLoading } from '@/shared/components/loadings'
import { useFindMainCard } from '@/app/business/cards/hooks/useFindMainCard'
import { LoadingButton } from '@mui/lab'
import { useUser } from '@/shared/hooks'
import { Dangerous, MoreVertTwoTone, Payment, Update } from '@mui/icons-material'
import { useCommerceDetailsCard } from '@/app/business/cards/store'
import { useEffect, useState } from 'react'
import { MenuPopover } from '@/shared/components/containers'
import { useFindTransitBalanceCommerce } from '@/app/business/cards/hooks'
import { CarnetLogo, MasterCardLogo } from '@/shared/components/images'
import { useNavigate } from 'react-router-dom'
import { BUSINESS_PATHS, BUSINESS_PERMISSIONS } from '@/app/business/shared/routes'

export function MainCard({ openSidebar }) {
  const user = useUser()
  const userActions = user?.permissions ?? []
  const navigate = useNavigate()

  if (!userActions.includes(BUSINESS_PERMISSIONS.COMMERCE_CARDS)) {
    return null
  }

  const cardTypeSelected = useCommerceDetailsCard(state => state.cardTypeSelected)

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

  return (
    <Stack spacing={2} m={{ xs: 2, md: 0 }}>
      <Card sx={{ p: 2 }} onClick={() => navigate(BUSINESS_PATHS.globalCard)}>
        <CardHeader
          action={isSuccess && <MainCardDetails mainCard={data} />}
          title={
            <Stack flexDirection={'row'} gap={1} alignItems={'center'}>
              <Typography variant="subtitle2">Global</Typography>
            </Stack>
          }
          sx={{ p: 0 }}
        />

        <Stack alignItems={'center'} mb={1}>
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
      </Card>
    </Stack>
  )
}

function MainCardDetails({ mainCard }) {
  const setCommerceCard = useCommerceDetailsCard(state => state.setCard)
  const setIsMainCard = useCommerceDetailsCard(state => state.setSelectedMainCard)
  const addInfoCard = useCommerceDetailsCard(state => state.addInfoCard)
  const commerceCard = useCommerceDetailsCard(state => state.card)

  const [anchorEl, setAnchorEl] = useState(null)
  const open = Boolean(anchorEl)

  const isSelected = mainCard?.id === commerceCard?.id
  const handleClick = event => {
    setAnchorEl(event.currentTarget)
  }
  const handleClose = () => {
    setAnchorEl(null)
  }

  const handleViewDetails = () => {
    if (!isSelected) {
      setCommerceCard(mainCard)
      setIsMainCard(true)
      addInfoCard({
        movements: [],
        expenses: '$0.00',
        income: '$0.00',
        balanceMovements: '$0.00'
      })
    }

    handleClose()
  }

  return (
    <>
      <Tooltip title="Acciones">
        <IconButton
          onClick={handleClick}
          sx={{ ml: 2 }}
          aria-controls={open ? 'card-menu' : undefined}
          aria-haspopup="true"
          aria-expanded={open ? 'true' : undefined}
        >
          <MoreVertTwoTone width={20} height={20} />
        </IconButton>
      </Tooltip>
      <MenuPopover
        open={Boolean(open)}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
        transformOrigin={{ vertical: 'top', horizontal: 'right' }}
        arrow="right-start"
        sx={{
          mt: -1,
          mr: 0,
          p: 2,
          width: 250,
          '& .MuiMenuItem-root': {
            px: 1,
            typography: 'body2',
            borderRadius: 0.75,
            '& svg': { mr: 2, width: 20, height: 20 }
          }
        }}
      >
        <MenuItem onClick={handleViewDetails} sx={{ color: 'text.secondary' }}>
          <Payment width={24} height={24} />
          Ver Detalles
        </MenuItem>
      </MenuPopover>
    </>
  )
}
