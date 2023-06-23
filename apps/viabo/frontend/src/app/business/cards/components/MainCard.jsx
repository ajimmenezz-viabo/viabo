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

  const color = 'primary'

  if (isLoading) {
    return (
      <Box p={3}>
        <RequestLoadingComponent open={isLoading} width={20} height={20} />
      </Box>
    )
  }

  if (isError) {
    return (
      <Box pb={3}>
        <Alert
          severity={'error'}
          sx={{ width: 1 }}
          action={
            <LoadingButton loading={isRefetching} color="inherit" size="small" onClick={() => refetch()}>
              Recargar
            </LoadingButton>
          }
        >
          {error}
        </Alert>
      </Box>
    )
  }

  if (isSuccess) {
    return (
      <Stack spacing={2}>
        <Card sx={{ p: 2 }}>
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
        </Card>

        <Card sx={{ p: 2 }}>
          <CardHeader title={<Typography variant="subtitle2">En Transito</Typography>} sx={{ p: 0 }} />
          <Stack spacing={1} alignItems={'center'}>
            <Stack direction={'row'} spacing={2} alignItems={'center'}>
              <Typography variant="h3">{data?.inTransitFormatted}</Typography>
              <Typography variant="caption">MXN</Typography>
            </Stack>
          </Stack>
        </Card>
      </Stack>
    )
  }
}

function MainCardDetails({ mainCard }) {
  const setCommerceCard = useCommerceDetailsCard(state => state.setCard)
  const setIsMainCard = useCommerceDetailsCard(state => state.setSelectedMainCard)
  const [anchorEl, setAnchorEl] = useState(null)
  const open = Boolean(anchorEl)
  const handleClick = event => {
    setAnchorEl(event.currentTarget)
  }
  const handleClose = () => {
    setAnchorEl(null)
  }

  const handleViewDetails = () => {
    setCommerceCard(mainCard)
    setIsMainCard(true)
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
