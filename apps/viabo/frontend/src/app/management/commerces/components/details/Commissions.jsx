import PropTypes from 'prop-types'

import { Stack, Typography } from '@mui/material'

import { DetailsCardLayout } from '@/app/management/commerces/components/details/DetailsCardLayout'

Commissions.propTypes = {
  handleChange: PropTypes.func.isRequired,
  expanded: PropTypes.string.isRequired
}

export function Commissions({ handleChange, expanded }) {
  return (
    <DetailsCardLayout
      headerText={'Comisiones'}
      handleChange={handleChange}
      expanded={expanded}
      expandedText={'commissions'}
    >
      <Stack>
        <Typography>Comisiones</Typography>
      </Stack>
    </DetailsCardLayout>
  )
}
