import PropTypes from 'prop-types'

import { Grid, Typography } from '@mui/material'

import { DetailsCardLayout } from './DetailsCardLayout'

AccountInfo.propTypes = {
  account: PropTypes.object,
  expanded: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired
}

export function AccountInfo({ account, expanded, handleChange }) {
  return (
    <DetailsCardLayout
      headerText={'Cuenta'}
      handleChange={handleChange}
      expanded={expanded}
      expandedText={'account-info'}
    >
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
    </DetailsCardLayout>
  )
}
