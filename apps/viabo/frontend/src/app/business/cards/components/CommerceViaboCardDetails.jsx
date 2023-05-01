import { Alert, Box, Grid, Stack, Toolbar, Typography } from '@mui/material'
import { Scrollbar } from '@/shared/components/scroll'
import { SelectDataIllustration } from '@/shared/components/illustrations'
import { useCommerceDetailsCard } from '@/app/business/cards/store'
import { CardBalance } from '@/app/business/cards/components/viaboCardDetails'

export function CommerceViaboCardDetails() {
  const minHeight = 700
  const card = useCommerceDetailsCard(state => state.card)
  return (
    <>
      <Toolbar
        sx={{
          position: 'sticky',
          top: 0,
          zIndex: 1
        }}
      >
        <Stack
          spacing={3}
          direction={'row'}
          justifyContent="space-between"
          sx={{ width: 1 }}
          alignItems={{ sm: 'center' }}
        >
          <Stack direction="row" spacing={1}>
            <Typography variant="h5">Detalles</Typography>
          </Stack>
        </Stack>
      </Toolbar>
      {card ? (
        <Box sx={{ maxHeight: minHeight, minHeight: '100vh', overflow: 'auto' }}>
          <Scrollbar>
            <Grid container sx={{ p: 2 }} spacing={3}>
              <Grid item xs={12} sm={12} md={12} lg={7} xl={5}>
                <CardBalance />
              </Grid>
            </Grid>
          </Scrollbar>
        </Box>
      ) : (
        <Stack px={2} spacing={3} sx={{ height: '100%', width: '100%' }}>
          <Alert variant="filled" severity="info">
            Debe seleccionar una tarjeta para ver sus detalles!
          </Alert>
          <Stack alignItems={'center'}>
            <SelectDataIllustration sx={{ width: '30%' }} />
          </Stack>
        </Stack>
      )}
    </>
  )
}
