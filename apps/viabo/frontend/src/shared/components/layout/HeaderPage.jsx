import PropTypes from 'prop-types'
import { Box, Button, Stack, Typography } from '@mui/material'
import { Link as RouterLink } from 'react-router-dom'
import { Add } from '@mui/icons-material'
import { LoadingButton } from '@mui/lab'
import React from 'react'

HeaderPage.propTypes = {
  onClick: PropTypes.func,
  name: PropTypes.string.isRequired,
  buttonName: PropTypes.string,
  to: PropTypes.string,
  disableButton: PropTypes.bool,
  loading: PropTypes.bool,
  breadcrumbs: PropTypes.elementType
}

export function HeaderPage({ name, buttonName, to = '', onClick, loading = false, breadcrumbs }) {
  return (
    <Stack display="flex" mb={5} spacing={3} flexDirection={{ xs: 'column', sm: 'row' }} alignItems={{ sm: 'center' }}>
      <Box sx={{ flexGrow: 1 }}>
        <Typography variant="h4" gutterBottom>
          {name}
        </Typography>
        {React.createElement(breadcrumbs)}
      </Box>
      <Box sx={{ flex: '1 1 auto' }} />

      {buttonName && (
        <Box sx={{ flexShrink: 0, paddingLeft: 2 }}>
          {to === '' ? (
            <LoadingButton loading={loading} variant="contained" onClick={onClick} startIcon={<Add />}>
              {buttonName}
            </LoadingButton>
          ) : (
            <Button variant="contained" component={RouterLink} to={to} startIcon={<Add />}>
              {buttonName}
            </Button>
          )}
        </Box>
      )}
    </Stack>
  )
}
