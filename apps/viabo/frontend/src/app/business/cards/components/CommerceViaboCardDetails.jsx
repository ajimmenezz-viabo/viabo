import { Alert, Grid, Stack, Toolbar, Typography } from '@mui/material'
import { Scrollbar } from '@/shared/components/scroll'
import { SelectDataIllustration } from '@/shared/components/illustrations'
import { useCommerceDetailsCard } from '@/app/business/cards/store'
import {
  CardActions,
  CardBalance,
  CardCharge,
  CardTransactions
} from '@/app/business/cards/components/viaboCardDetails'
import { CardNumber } from '@/app/shared/components/card'
import { useFindCardDetails } from '@/app/business/cards/hooks'
import { RequestLoadingComponent } from '@/shared/components/loadings'
import { ErrorRequestPage } from '@/shared/components/notifications'
import { useCollapseDrawer } from '@theme/hooks'

export function CommerceViaboCardDetails() {
  const card = useCommerceDetailsCard(state => state.card)
  const { data, isLoading, isError, error, refetch } = useFindCardDetails(card?.id, {
    enabled: !!card?.id
  })
  const { isCollapse } = useCollapseDrawer()

  return (
    <Stack
      sx={theme => ({
        pl: 2,
        display: { xs: 'none', lg: 'flex' },
        overflow: 'hidden',
        flexDirection: 'column',
        flexGrow: 1
      })}
    >
      {isError && !data && !isLoading && <ErrorRequestPage errorMessage={error} handleButton={refetch} />}
      {card && isLoading && <RequestLoadingComponent />}
      {card && data && (
        <>
          <Toolbar
            sx={theme => ({
              position: 'sticky',
              borderRadius: 1,
              py: 4,
              top: 0,
              zIndex: 1,
              backgroundColor: theme.palette.primary.light,
              color: 'white'
            })}
          >
            <Stack flexDirection={'row'} justifyContent="space-between" sx={{ width: 1 }} alignItems={'center'}>
              <Stack flexDirection="column" spacing={0}>
                <Typography variant="subtitle2">Disponible</Typography>
                <Stack direction={'row'} spacing={2} alignItems={'center'}>
                  <Typography variant="h3">{data?.balance}</Typography>
                  <Typography variant="caption">MXN</Typography>
                </Stack>
              </Stack>
              <CardNumber card={card} />
            </Stack>
          </Toolbar>
          <CardActions card={card} />
          <Scrollbar>
            <Stack pt={2} pb={4} px={2}>
              <Grid container spacing={3} sx={{ p: 0, pb: 3 }}>
                <Grid item xs={12} sm={12} md={12} lg={isCollapse ? 5 : 12} xl={5}>
                  <CardBalance cardDetails={data} />
                </Grid>
                <Grid item xs={12} sm={12} md={12} lg={isCollapse ? 7 : 12} xl={5}>
                  <CardCharge cardDetails={data} />
                </Grid>
              </Grid>
              <CardTransactions movements={data?.movements} />
            </Stack>
          </Scrollbar>
        </>
      )}
      {!card && (
        <Stack px={2} spacing={3} sx={{ height: '100%', width: '100%' }}>
          <Alert variant="filled" severity="info">
            Debe seleccionar una tarjeta para ver sus detalles!
          </Alert>
          <Stack alignItems={'center'}>
            <SelectDataIllustration sx={{ width: '30%' }} />
          </Stack>
        </Stack>
      )}
    </Stack>
  )
}
