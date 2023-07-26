import { Grid, Typography } from '@mui/material'
import { DetailsCardLayout } from './DetailsCardLayout'

export function GeneralInfo({ info, expanded, handleChange, status }) {
  const available = Boolean(info?.available)

  return (
    <DetailsCardLayout
      headerText={'Comercio'}
      handleChange={handleChange}
      step={status?.step}
      available={available}
      expanded={expanded}
      expandedText={'general-info'}
      alertText={'No se ha registrado la información para este comercio!'}
    >
      <Grid container spacing={5} sx={{ mt: 0 }}>
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
    </DetailsCardLayout>
  )
}
