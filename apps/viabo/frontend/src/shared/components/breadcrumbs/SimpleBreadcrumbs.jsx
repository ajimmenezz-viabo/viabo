import PropTypes from 'prop-types'
import { Link as RouterLink, useLocation } from 'react-router-dom'
import { Box, Breadcrumbs, Link, Typography } from '@mui/material'
import { snakeCase } from 'lodash'

SimpleBreadcrumbs.propTypes = {
  friendlyPages: PropTypes.object.isRequired
}

export function SimpleBreadcrumbs({ friendlyPages = {} }) {
  const location = useLocation()
  const pathnames = location.pathname.split('/').filter(x => x)
  const pages = {
    home: 'Inicio',
    ...friendlyPages
  }
  return (
    <Breadcrumbs
      separator={<Box component="span" sx={{ width: 4, height: 4, borderRadius: '50%', bgcolor: 'text.disabled' }} />}
      aria-label="breadcrumb"
    >
      <Link
        color="text.primary"
        underline="hover"
        href="/"
        variant="body2"
        sx={{ display: 'flex', alignItems: 'center', textTransform: 'capitalize' }}
      >
        {pages.home}
      </Link>
      {pathnames.map((value, index) => {
        const last = index === pathnames.length - 1
        const to = `/${pathnames.slice(0, index + 1).join('/')}`

        return last ? (
          <Typography color="text.disabled" key={to} variant="body2" textTransform={'capitalize'}>
            {pages[snakeCase(value)] || value}
          </Typography>
        ) : (
          <Link
            component={RouterLink}
            underline="hover"
            color="text.primary"
            variant="body2"
            to={to}
            key={to}
            sx={{ display: 'flex', alignItems: 'center', textTransform: 'capitalize' }}
          >
            {pages[snakeCase(value)] || value}
          </Link>
        )
      })}
    </Breadcrumbs>
  )
}
