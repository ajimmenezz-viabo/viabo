import { Card, Grid, Typography } from '@mui/material'
import { alpha, styled } from '@mui/material/styles'
import { CheckTwoTone, ClearTwoTone } from '@mui/icons-material'

const IconWrapperStyle = styled('div')(({ theme }) => ({
  width: 30,
  height: 30,
  display: 'flex',
  borderRadius: '50%',
  alignItems: 'center',
  justifyContent: 'center',
  color: theme.palette.primary.main,
  backgroundColor: alpha(theme.palette.primary.main, 0.08)
}))

export function ServicesInfo() {
  return (
    <Card sx={{ p: 5 }}>
      <Grid container spacing={5}>
        <Grid item xs={12} sm={12}>
          <Typography variant="h6" color="textPrimary">
            Servicios
          </Typography>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Typography paragraph variant="overline" sx={{ color: 'text.disabled' }}>
            No. Terminales TPV's
          </Typography>
          <Typography variant="body2">4</Typography>
        </Grid>

        <Grid item xs={12} sm={6}>
          <Typography paragraph variant="overline" sx={{ color: 'text.disabled' }}>
            No. de Tarjetas
          </Typography>
          <Typography variant="body2">20</Typography>
        </Grid>

        <Grid item xs={12} sm={6}>
          <Typography paragraph variant="overline" sx={{ color: 'text.disabled' }}>
            Uso de las tarjetas viabo
          </Typography>
          <Typography variant="body2">Control de gastos</Typography>
        </Grid>

        <Grid item xs={12} sm={6}>
          <Typography paragraph variant="overline" sx={{ color: 'text.disabled' }}>
            API para ligas de cobro
          </Typography>
          <IconWrapperStyle
            sx={{
              color: 'error.main',
              bgcolor: theme => alpha(theme.palette.error.main, 0.08)
            }}
          >
            <ClearTwoTone width={20} height={20} />
          </IconWrapperStyle>
        </Grid>

        <Grid item xs={12} sm={6}>
          <Typography paragraph variant="overline" sx={{ color: 'text.disabled' }}>
            Tarjetas fisicas personalizadas
          </Typography>
          <IconWrapperStyle
            sx={{
              color: 'success.main',
              bgcolor: theme => alpha(theme.palette.success.main, 0.08)
            }}
          >
            <CheckTwoTone width={20} height={20} />
          </IconWrapperStyle>
        </Grid>
      </Grid>
    </Card>
  )
}
