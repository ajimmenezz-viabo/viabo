import { Alert, Box, Button, Card, Stack, Typography } from '@mui/material'
import { RequestLoadingComponent } from '@/shared/components/loadings'
import { useFindMainCard } from '@/app/business/cards/hooks/useFindMainCard'
import { LoadingButton } from '@mui/lab'
import { ACTIONS_PERMISSIONS } from '@/app/business/cards/adapters'
import { useUser } from '@/shared/hooks'
import { Receipt } from '@mui/icons-material'
import { useCommerceDetailsCard } from '@/app/business/cards/store'

export function MainCard() {
  const user = useUser()
  const userActions = user?.modules?.userActions ?? []
  const setOpenFundingOrder = useCommerceDetailsCard(state => state.setOpenFundingOrder)
  const setFundingCard = useCommerceDetailsCard(state => state.setFundingCard)

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
          <Stack spacing={1} alignItems={'center'}>
            <Typography variant="subtitle2">Global</Typography>
            <Stack direction={'row'} spacing={2} alignItems={'center'}>
              <Typography variant="h3">{data?.balanceFormatted}</Typography>
              <Typography variant="caption">MXN</Typography>
            </Stack>
            <Button
              color={'primary'}
              variant={'contained'}
              startIcon={<Receipt />}
              onClick={() => {
                setOpenFundingOrder(true)
                setFundingCard(data)
              }}
            >
              Orden Fondeo
            </Button>
          </Stack>
        </Card>

        <Card sx={{ p: 2 }}>
          <Stack spacing={1} alignItems={'center'}>
            <Typography variant="subtitle2">En Transito</Typography>
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
