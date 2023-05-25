import { Avatar, Box, Checkbox, Link, TableCell, TableRow, Typography } from '@mui/material'
import PropTypes from 'prop-types'
import { CreditCard } from '@mui/icons-material'
import { BadgeStatus } from '@/shared/components/notifications'
import { useCommerceDetailsCard } from '@/app/business/cards/store'
import React from 'react'

CardRow.propTypes = {
  row: PropTypes.object,
  selected: PropTypes.bool,
  onSelectRow: PropTypes.func
}

export function CardRow({ row, selected, onSelectRow }) {
  const { cardNumber, cardNumberHidden, id } = row
  const setCommerceCard = useCommerceDetailsCard(state => state.setCard)
  const commerceCard = useCommerceDetailsCard(state => state.card)

  const status =
    id === commerceCard?.id && commerceCard ? (commerceCard?.cardON === true ? 'online' : 'offline') : 'invisible'

  const isSelected = id === commerceCard?.id

  const handleSelectedRow = () => setCommerceCard(row)

  return (
    <TableRow
      hover
      selected={selected || isSelected}
      sx={theme => ({
        backgroundColor: `${
          isSelected
            ? `${theme.palette.primary.light}!important`
            : selected
            ? `${theme.palette.primary.lighter}!important`
            : 'inherit'
        }`
      })}
    >
      <TableCell padding="checkbox">
        <Checkbox color={'secondary'} checked={selected} onClick={onSelectRow} />
      </TableCell>

      <TableCell sx={{ display: 'flex', alignItems: 'center' }}>
        <Box sx={{ position: 'relative' }}>
          <Avatar
            sx={{
              width: 48,
              height: 48,
              color: 'text.secondary',
              bgcolor: 'background.neutral'
            }}
          >
            <CreditCard width={24} height={24} />
          </Avatar>
          <BadgeStatus status={status} sx={{ right: 2, bottom: 2, position: 'absolute' }} />
        </Box>
        <Box sx={{ ml: 2 }}>
          <Link underline={'hover'} color={'text.primary'} sx={{ cursor: 'pointer' }} onClick={handleSelectedRow}>
            <Typography variant={'subtitle2'} color={'text.primary'}>
              {cardNumberHidden}
            </Typography>
          </Link>
        </Box>
      </TableCell>
    </TableRow>
  )
}
