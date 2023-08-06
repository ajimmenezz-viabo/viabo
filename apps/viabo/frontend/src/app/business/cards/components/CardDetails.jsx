import { useEffect } from 'react'

import { Alert, Grid, Stack } from '@mui/material'
import { useCollapseDrawer } from '@theme/hooks'

import {
  CardActions,
  CardAssignInfo,
  CardBalance,
  CardCharge,
  CardMovements
} from '@/app/business/cards/components/details'
import { CardDetailsHeader } from '@/app/business/cards/components/details/header'
import { useFindCardDetails } from '@/app/business/cards/hooks'
import { useCommerceDetailsCard } from '@/app/business/cards/store'
import { SelectDataIllustration } from '@/shared/components/illustrations'
import { RequestLoadingComponent } from '@/shared/components/loadings'
import { ErrorRequestPage } from '@/shared/components/notifications'
import { Scrollbar } from '@/shared/components/scroll'

export function CardDetails() {
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
    <>
      {isLoading && card && <RequestLoadingComponent />}
      <Stack
        sx={theme => ({
          pl: { xs: 0, lg: 2 },
          overflow: 'hidden',
          flexDirection: 'column',
          flexGrow: 1
        })}
      >
        {isError && !data && !isLoading && (
          <ErrorRequestPage sx={{ justifyContent: 'flex-start' }} errorMessage={error} handleButton={refetch} />
        )}
        {card && !isLoading && data && (
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
          <Stack spacing={3} sx={{ height: '100%', width: '100%' }}>
            <Alert variant="filled" severity="info">
              Debe seleccionar una tarjeta para ver sus detalles!
            </Alert>
            <Stack alignItems={'center'}>
              <SelectDataIllustration sx={{ width: '30%' }} />
            </Stack>
          </Stack>
        )}
      </Stack>
    </>
  )
}
