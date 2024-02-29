import PropTypes from 'prop-types'

import { List, ListSubheader, Typography } from '@mui/material'

import { AdminSpeiMovementItem } from './AdminSpeiMovementItem'
import { AdminSpeiMovementSkeleton } from './AdminSpeiMovementSkeleton'

export const AdminSpeiLastMovements = ({ movementsGrouped, isLoading, ...others }) => (
  <List
    disablePadding
    {...others}
    sx={{
      width: '100%',
      position: 'relative',
      overflow: 'auto',
      maxHeight: 600,
      '& ul': { padding: 0 }
    }}
    subheader={<li />}
  >
    {!isLoading &&
      Object.entries(movementsGrouped)?.map(([dateKey, movements]) => (
        <li key={`section-${dateKey}`}>
          <ul>
            <ListSubheader sx={{ backgroundColor: 'transparent', pt: 2 }}>
              <Typography variant="subtitle1" color="text.secondary">
                {dateKey}
              </Typography>
            </ListSubheader>
            {movements?.map(movement => (
              <AdminSpeiMovementItem key={movement?.id} movement={movement} />
            ))}
          </ul>
        </li>
      ))}

    {isLoading && [...Array(20)]?.map((number, index) => <AdminSpeiMovementSkeleton key={index} />)}
  </List>
)

AdminSpeiLastMovements.propTypes = {
  isLoading: PropTypes.any,
  movementsGrouped: PropTypes.any
}
