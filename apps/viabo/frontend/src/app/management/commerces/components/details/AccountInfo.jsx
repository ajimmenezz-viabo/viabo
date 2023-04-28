import { Box, Card, Collapse, Grid, Stack, Typography } from '@mui/material'
import { DetailsComponents, SuccessIconDetails } from '@/app/management/commerces/components/details/DetailsComponents'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'

export function AccountInfo({ account, expanded, handleChange }) {
  const isExpanded = Boolean(expanded === 'account-info')

  return (
    <Card
      sx={{
        p: isExpanded ? 5 : 3,
        border: isExpanded ? 3 : 0,
        borderColor: isExpanded
          ? theme => (theme.palette.mode === 'dark' ? theme.palette.secondary.main : theme.palette.primary.main)
          : 'inherit'
      }}
    >
      <Stack display="flex" flexDirection={{ xs: 'column', sm: 'row' }} alignItems="center">
        <Stack direction={'row'} spacing={1.5} alignItems={'center'}>
          <SuccessIconDetails widthWrapper={25} heightWrapper={25} opacity={0.2} sx={{ width: 15, height: 15 }} />
          <Typography variant="subtitle1" color="textPrimary">
            Cuenta
          </Typography>
        </Stack>

        <Box sx={{ flex: '1 1 auto' }} />
        <DetailsComponents
          expand={isExpanded}
          onClick={() => {
            handleChange('account-info')
          }}
          aria-expanded={isExpanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </DetailsComponents>
      </Stack>
      <Collapse in={isExpanded} timeout="auto">
        <Grid container spacing={5} sx={{ mt: 0 }}>
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
      </Collapse>
    </Card>
  )
}
