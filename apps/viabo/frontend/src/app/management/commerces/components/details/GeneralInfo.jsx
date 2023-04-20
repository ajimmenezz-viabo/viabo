import { Card, Grid, Stack, Typography } from '@mui/material'
import ViaboCard from '@/shared/assets/img/viabo-card.png'
import ViaboPay from '@/shared/assets/img/viabo-pay.png'
import { Image } from '@/shared/components/images'

export function GeneralInfo({ commerce }) {
  const allInfoIsRequired = true
  return (
    <Card sx={{ p: 5 }}>
      <Grid container spacing={5}>
        <Grid item xs={12} sm={12}>
          <Typography variant="h6" color="textPrimary">
            Comercio
          </Typography>
        </Grid>

        <Grid item xs={12} sm={6}>
          <Typography paragraph variant="overline" sx={{ color: 'text.disabled' }}>
            Nombre Comercial
          </Typography>
          <Typography variant="body2">Comercio 1</Typography>
        </Grid>

        <Grid item xs={12} sm={6}>
          <Typography paragraph variant="overline" sx={{ color: 'text.disabled' }}>
            Nombre Fiscal
          </Typography>
          <Typography variant="body2">Comercio 1</Typography>
        </Grid>

        <Grid item xs={12} sm={6}>
          <Typography paragraph variant="overline" sx={{ color: 'text.disabled' }}>
            RFC
          </Typography>
          <Typography variant="body2">321HJG3HJ12G312KJ</Typography>
        </Grid>

        <Grid item xs={12} sm={6}>
          <Typography paragraph variant="overline" sx={{ color: 'text.disabled' }}>
            Numero de Empleados
          </Typography>
          <Typography variant="body2">321</Typography>
        </Grid>

        <Grid item xs={12} sm={6}>
          <Typography paragraph variant="overline" sx={{ color: 'text.disabled' }}>
            Numero de Sucursales
          </Typography>
          <Typography variant="body2">20</Typography>
        </Grid>

        <Grid item xs={12} sm={6}>
          <Typography paragraph variant="overline" sx={{ color: 'text.disabled' }}>
            Servicios
          </Typography>
          <Stack spacing={2} direction={'row'}>
            <Image disabledEffect visibleByDefault alt="logo" src={ViaboPay} sx={{ maxWidth: 120 }} />
            <Image disabledEffect visibleByDefault alt="logo" src={ViaboCard} sx={{ maxWidth: 120 }} />
          </Stack>
        </Grid>
      </Grid>
    </Card>
  )
}
