import { memo } from 'react'

import PropTypes from 'prop-types'

import {
  Avatar,
  Box,
  Checkbox,
  ListItem,
  ListItemAvatar,
  ListItemButton,
  Stack,
  Tooltip,
  Typography
} from '@mui/material'
import { styled } from '@mui/material/styles'

import { BUSINESS_PERMISSIONS } from '@/app/business/shared/routes'
import { useCommerceDetailsCard } from '@/app/business/viabo-card/cards/store'
import { CarnetLogo, MasterCardLogo } from '@/shared/components/images'
import { BadgeStatus } from '@/shared/components/notifications'
import { useUser } from '@/shared/hooks'

const RootStyle = styled(ListItemButton)(({ theme }) => ({
  borderRadius: '8px!important',
  width: 1,
  justifyContent: 'center',
  display: 'flex',
  alignItems: 'center',
  mb: 1
  // transition: theme.transitions.create('all')
}))

CardItem.propTypes = {
  isOpenSidebar: PropTypes.bool,
  selected: PropTypes.bool,
  card: PropTypes.object,
  onSelectRow: PropTypes.func,
  onOpenDetails: PropTypes.func
}

function CardItem({ isOpenSidebar, card, selected, onSelectRow, onOpenDetails }) {
  const { id, cardUserNumber, cardType } = card
  const setCommerceCard = useCommerceDetailsCard(state => state.setCard)
  const commerceCard = useCommerceDetailsCard(state => state.card)
  const addInfoCard = useCommerceDetailsCard(state => state.addInfoCard)
  const user = useUser()
  const userActions = user?.permissions ?? []

  const status =
    id === commerceCard?.id && commerceCard ? (commerceCard?.cardON === true ? 'online' : 'offline') : 'invisible'

  const isSelected = id === commerceCard?.id

  const handleSelectedRow = e => {
    const type = e.target?.type
    if (!type && !isSelected) {
      setCommerceCard(card)

      addInfoCard({
        movements: [],
        expenses: '$0.00',
        income: '$0.00',
        balanceMovements: '$0.00'
      })
      onOpenDetails()
    }
  }

  return (
    <Tooltip title={!isOpenSidebar ? cardUserNumber : ''} arrow placement="right">
      <ListItem
        sx={{
          mb: 1,
          padding: 0,
          borderRadius: 1,
          '& :hover': { color: 'text.primary' }
        }}
        secondaryAction={
          isOpenSidebar &&
          userActions.includes(BUSINESS_PERMISSIONS.COMMERCE_CARDS) && (
            <Checkbox edge="start" checked={selected} onClick={onSelectRow} inputProps={{ 'aria-labelledby': id }} />
          )
        }
        disablePadding
      >
        <RootStyle
          onClick={handleSelectedRow}
          sx={{
            ...(isSelected && { bgcolor: 'secondary.light', color: 'black', '& :hover': { color: 'text.primary' } }),
            '& :hover': { color: 'text.primary' },
            width: 1,
            py: 1,
            gap: 1
          }}
        >
          <ListItemAvatar sx={{ ml: 2, m: 0 }}>
            <Box sx={{ position: 'relative' }}>
              <Avatar
                sx={theme => ({
                  width: 30,
                  height: 30,
                  m: 0,
                  color: theme.palette.primary.contrastText,
                  backgroundColor: theme.palette.primary.main
                })}
              >
                {cardType === 'Carnet' ? (
                  <CarnetLogo sx={{ width: 20 }} color={'white'} />
                ) : (
                  <MasterCardLogo sx={{ width: 20 }} />
                )}
              </Avatar>
              <BadgeStatus status={status} sx={{ right: 0, bottom: 0, position: 'absolute' }} />
            </Box>
          </ListItemAvatar>

          {isOpenSidebar && (
            <>
              <Stack
                sx={{
                  width: 1
                }}
              >
                <Typography noWrap variant={'subtitle2'}>
                  {cardUserNumber}
                </Typography>
              </Stack>
            </>
          )}
        </RootStyle>
      </ListItem>
    </Tooltip>
  )
}

export default memo(CardItem)