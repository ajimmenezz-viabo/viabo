import { Alert, Grid, Stack } from '@mui/material'
import { Scrollbar } from '@/shared/components/scroll'
import { SelectDataIllustration } from '@/shared/components/illustrations'
import { useCommerceDetailsCard } from '@/app/business/cards/store'
import {
  CardActions,
  CardAssignInfo,
  CardBalance,
  CardCharge,
  CardMovements
} from '@/app/business/cards/components/viaboCardDetails'
import { useFindCardDetails } from '@/app/business/cards/hooks'
import { RequestLoadingComponent } from '@/shared/components/loadings'
import { ErrorRequestPage } from '@/shared/components/notifications'
import { useCollapseDrawer } from '@theme/hooks'
import { useEffect } from 'react'
import { CardDetailsHeader } from '@/app/business/cards/components/viaboCardDetails/header'

export function CommerceViaboCardDetails() {
  const card = useCommerceDetailsCard(state => state.card)
  const addInfoCard = useCommerceDetailsCard(state => state.addInfoCard)
  const { data, isLoading, isError, error, refetch } = useFindCardDetails(card?.id, {
    enabled: !!card?.id
  })
  const { isCollapse } = useCollapseDrawer()

  useEffect(() => {
    if (data) {
      addInfoCard(data)
    }
  }, [data])

  return (
    <Stack
      sx={theme => ({
        pl: { xs: 0, lg: 2 },
        mt: 2,
        overflow: 'hidden',
        flexDirection: 'column',
        flexGrow: 1
      })}
    >
      {isError && !data && !isLoading && <ErrorRequestPage errorMessage={error} handleButton={refetch} />}
      {card && isLoading && <RequestLoadingComponent />}
      {card && data && (
        <>
          <CardDetailsHeader card={card} />
          <CardActions />
          <Scrollbar>
            <Stack pt={2} pb={4} px={2}>
              <Grid container spacing={3} sx={{ p: 0, pb: 3 }}>
                <Grid item xs={12} sm={12} md={12} lg={isCollapse ? 4 : 12} xl={4}>
                  <Stack spacing={3}>
                    <CardBalance />
                    <CardCharge />
                    <CardAssignInfo />
                  </Stack>
                </Grid>
                <Grid item xs={12} sm={12} md={12} lg={isCollapse ? 8 : 12} xl={8}>
                  <CardMovements />
                </Grid>
              </Grid>
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
