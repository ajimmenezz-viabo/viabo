import { Alert, Box, Card, CardHeader, IconButton, MenuItem, Stack, Tooltip, Typography } from '@mui/material'
import { RequestLoadingComponent } from '@/shared/components/loadings'
import { useFindMainCard } from '@/app/business/cards/hooks/useFindMainCard'
import { LoadingButton } from '@mui/lab'
import { ACTIONS_PERMISSIONS } from '@/app/business/cards/adapters'
import { useUser } from '@/shared/hooks'
import { MoreVertTwoTone, Payment } from '@mui/icons-material'
import { useCommerceDetailsCard } from '@/app/business/cards/store'
import { useState } from 'react'
import { MenuPopover } from '@/shared/components/containers'
import { useFindTransitBalanceCommerce } from '@/app/business/cards/hooks'

export function MainCard() {
  const user = useUser()
  const userActions = user?.modules?.userActions ?? []
  const setOpenFundingOrder = useCommerceDetailsCard(state => state.setOpenFundingOrder)
  const setFundingCard = useCommerceDetailsCard(state => state.setFundingCard)
  const [copiedSPEI, setCopiedSPEI] = useState(false)

  if (!userActions.includes(ACTIONS_PERMISSIONS.COMMERCE_CARDS)) {
    return null
  }
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { data, isLoading, isError, error, refetch, isSuccess, isRefetching } = useFindMainCard()
  const {
    data: transit,
    isLoading: isLoadingTransit,
    isError: isErrorTransit,
    error: errorTransit,
    refetch: refetchTransit,
    isSuccess: isSuccessTransit,
    isRefetching: isRefetchingTransit
  } = useFindTransitBalanceCommerce()

  const color = 'primary'

  return (
    <Stack spacing={2} m={{ xs: 2, md: 0 }}>
      <Card sx={{ p: 2 }}>
        {isLoading && (
          <Box p={3}>
            <RequestLoadingComponent open={true} width={20} height={20} />
          </Box>
        )}
        {isError && !isLoading && (
          <Box>
            <Alert
              severity={'error'}
              sx={{ width: 1 }}
              action={
                <LoadingButton
                  loading={isRefetching}
                  color="inherit"
                  size="small"
                  onClick={() => {
                    refetch()
                  }}
                >
                  Recargar
                </LoadingButton>
              }
            >
              {error}
            </Alert>
          </Box>
        )}
        {isSuccess && !isLoading && (
          <>
            <CardHeader
              action={<MainCardDetails mainCard={data} />}
              title={<Typography variant="subtitle2">Global</Typography>}
              sx={{ p: 0 }}
            />
            <Stack spacing={1} alignItems={'center'}>
              <Stack direction={'row'} spacing={2} alignItems={'center'}>
                <Typography variant="h3">{data?.balanceFormatted}</Typography>
                <Typography variant="caption">MXN</Typography>
              </Stack>
            </Stack>
          </>
        )}
      </Card>

      <Card sx={{ p: 2 }}>
        {isLoadingTransit && (
          <Box p={3}>
            <RequestLoadingComponent open={true} width={20} height={20} />
          </Box>
        )}

        {isErrorTransit && !isLoadingTransit && (
          <Box>
            <Alert
              severity={'error'}
              sx={{ width: 1 }}
              action={
                <LoadingButton
                  loading={isRefetchingTransit}
                  color="inherit"
                  size="small"
                  onClick={() => {
                    refetchTransit()
                  }}
                >
                  Recargar
                </LoadingButton>
              }
            >
              {errorTransit}
            </Alert>
          </Box>
        )}

        {isSuccessTransit && !isLoadingTransit && (
          <>
            <CardHeader title={<Typography variant="subtitle2">En Tránsito</Typography>} sx={{ p: 0 }} />
            <Stack spacing={1} alignItems={'center'}>
              <Stack direction={'row'} spacing={2} alignItems={'center'}>
                <Typography variant="h3">{transit?.inTransitFormatted}</Typography>
                <Typography variant="caption">MXN</Typography>
              </Stack>
            </Stack>
          </>
        )}
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
