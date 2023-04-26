import { Alert, Box, Card, Collapse, Grid, Stack, Typography } from '@mui/material'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import {
  DetailsComponents,
  SuccessIconDetails,
  WarningIconDetails
} from '@/app/management/commerces/components/details/DetailsComponents'

export function GeneralInfo({ info, expanded, handleChange, status }) {
  const isExpanded = Boolean(expanded === 'general-info')
  const available = Boolean(info?.available)

  return (
    <Card
      sx={{
        p: 5,
        border: isExpanded ? 3 : 0,
        borderColor: isExpanded
          ? theme => (theme.palette.mode === 'dark' ? theme.palette.secondary.main : theme.palette.primary.main)
          : 'inherit'
      }}
    >
      <Stack display="flex" flexDirection={{ xs: 'column', sm: 'row' }} alignItems="center">
        <Stack direction={'row'} spacing={1.5} alignItems={'center'}>
          {available ? (
            <SuccessIconDetails widthWrapper={25} heightWrapper={25} opacity={0.2} sx={{ width: 15, height: 15 }} />
          ) : (
            <WarningIconDetails />
          )}
          <Typography variant="subtitle1" color="textPrimary">
            Comercio
          </Typography>
        </Stack>
        <Box sx={{ flex: '1 1 auto' }} />
        <DetailsComponents
          expand={isExpanded}
          onClick={() => {
            handleChange('general-info')
          }}
          aria-expanded={isExpanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </DetailsComponents>
      </Stack>
      <Collapse in={isExpanded} timeout="auto">
        {!available ? (
          <Alert sx={{ mt: 3 }} severity="warning" variant={'filled'}>
            <Typography variant="body2">No se ha registrado la información para este comercio!</Typography>
            <Typography variant="caption">
              Etapa de registro: <b>{status?.step}</b>
            </Typography>
          </Alert>
        ) : (
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
        )}
      </Collapse>
    </Card>
  )
}
