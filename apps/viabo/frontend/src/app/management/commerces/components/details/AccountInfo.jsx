import { Card, Grid, Typography } from '@mui/material'

export function AccountInfo({ account }) {
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
          <Typography variant="body2">{account?.name}</Typography>
        </Grid>

        <Grid item xs={12} sm={6}>
          <Typography paragraph variant="overline" sx={{ color: 'text.disabled' }}>
            Correo Electronico
          </Typography>
          <Typography variant="body2">{account?.email ?? '-'}</Typography>
        </Grid>

        <Grid item xs={12} sm={6}>
          <Typography paragraph variant="overline" sx={{ color: 'text.disabled' }}>
            Telefono
          </Typography>
          <Typography variant="body2">{account?.phone ?? '-'}</Typography>
        </Grid>

        <Grid item xs={12} sm={6}>
          <Typography paragraph variant="overline" sx={{ color: 'text.disabled' }}>
            Fecha Registro
          </Typography>
          <Typography variant="body2">{account?.register ?? '-'}</Typography>
        </Grid>

        <Grid item xs={12} sm={6}>
          <Typography paragraph variant="overline" sx={{ color: 'text.disabled' }}>
            Estado
          </Typography>
          <Typography variant="body2">{account?.status ?? '-'}</Typography>
        </Grid>

        <Grid item xs={12} sm={6}>
          <Typography paragraph variant="overline" sx={{ color: 'text.disabled' }}>
            Último Inicio de Sesión
          </Typography>
          <Typography variant="body2">{account?.lastLogged ?? '-'}</Typography>
        </Grid>
      </Grid>
    </Card>
  )
}
