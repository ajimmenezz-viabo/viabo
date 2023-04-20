import { Card, Grid, Typography } from '@mui/material'
import { fDate, fDateTime } from '@/shared/utils'

export function AccountInfo() {
  return (
    <Card sx={{ p: 5 }}>
      <Grid container spacing={5}>
        <Grid item xs={12} sm={12}>
          <Typography variant="h6" color="textPrimary">
            Cuenta
          </Typography>
        </Grid>

        <Grid item xs={12} sm={6}>
          <Typography paragraph variant="overline" sx={{ color: 'text.disabled' }}>
            Nombre
          </Typography>
          <Typography variant="body2">Test Viabo System</Typography>
        </Grid>

        <Grid item xs={12} sm={6}>
          <Typography paragraph variant="overline" sx={{ color: 'text.disabled' }}>
            Correo Electronico
          </Typography>
          <Typography variant="body2">test@viabo.com</Typography>
        </Grid>

        <Grid item xs={12} sm={6}>
          <Typography paragraph variant="overline" sx={{ color: 'text.disabled' }}>
            Telefono
          </Typography>
          <Typography variant="body2">+5255425443543</Typography>
        </Grid>

        <Grid item xs={12} sm={6}>
          <Typography paragraph variant="overline" sx={{ color: 'text.disabled' }}>
            Fecha Registro
          </Typography>
          <Typography variant="body2">{fDate(new Date())}</Typography>
        </Grid>

        <Grid item xs={12} sm={6}>
          <Typography paragraph variant="overline" sx={{ color: 'text.disabled' }}>
            Estado
          </Typography>
          <Typography variant="body2">Activo</Typography>
        </Grid>

        <Grid item xs={12} sm={6}>
          <Typography paragraph variant="overline" sx={{ color: 'text.disabled' }}>
            Último Inicio de Sesión
          </Typography>
          <Typography variant="body2">{fDateTime(new Date())}</Typography>
        </Grid>
      </Grid>
    </Card>
  )
}
