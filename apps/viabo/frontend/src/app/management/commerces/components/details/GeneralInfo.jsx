import { Card, Grid, Typography } from '@mui/material'

export function GeneralInfo({ info }) {
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
          <Typography variant="body2">{info?.commercialName}</Typography>
        </Grid>

        <Grid item xs={12} sm={6}>
          <Typography paragraph variant="overline" sx={{ color: 'text.disabled' }}>
            Nombre Fiscal
          </Typography>
          <Typography variant="body2">{info?.fiscalName}</Typography>
        </Grid>

        <Grid item xs={12} sm={6}>
          <Typography paragraph variant="overline" sx={{ color: 'text.disabled' }}>
            RFC
          </Typography>
          <Typography variant="body2">{info?.rfc}</Typography>
        </Grid>

        <Grid item xs={12} sm={6}>
          <Typography paragraph variant="overline" sx={{ color: 'text.disabled' }}>
            Persona
          </Typography>
          <Typography variant="body2">{info?.fiscalTypePerson}</Typography>
        </Grid>

        <Grid item xs={12} sm={6}>
          <Typography paragraph variant="overline" sx={{ color: 'text.disabled' }}>
            Numero de Empleados
          </Typography>
          <Typography variant="body2">{info?.employeesNumber}</Typography>
        </Grid>

        <Grid item xs={12} sm={6}>
          <Typography paragraph variant="overline" sx={{ color: 'text.disabled' }}>
            Numero de Sucursales
          </Typography>
          <Typography variant="body2">{info?.branchesNumber}</Typography>
        </Grid>
      </Grid>
    </Card>
  )
}
