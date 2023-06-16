import PropTypes from 'prop-types'
import { styled, useTheme } from '@mui/material/styles'
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
import { BadgeStatus } from '@/shared/components/notifications'
import { memo } from 'react'
import { useCommerceDetailsCard } from '@/app/business/cards/store'
import { CarnetLogo, MasterCardLogo } from '@/shared/components/images'
import { useUser } from '@/shared/hooks'
import { ACTIONS_PERMISSIONS } from '@/app/business/cards/adapters'

const RootStyle = styled(ListItemButton)(({ theme }) => ({
  padding: theme.spacing(1.5, 3),
  borderRadius: '8px!important',
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
  const { cardNumberHidden, id, expiration, cardType } = card
  const setCommerceCard = useCommerceDetailsCard(state => state.setCard)
  const commerceCard = useCommerceDetailsCard(state => state.card)
  const theme = useTheme()
  const user = useUser()
  const userActions = user?.modules?.userActions ?? []

  const status =
    id === commerceCard?.id && commerceCard ? (commerceCard?.cardON === true ? 'online' : 'offline') : 'invisible'

  const isSelected = id === commerceCard?.id

  const handleSelectedRow = e => {
    const type = e.target?.type
    if (!type) {
      setCommerceCard(card)
      onOpenDetails()
    }
  }

  return (
    <Tooltip title={!isOpenSidebar ? cardNumberHidden : ''} arrow placement="right">
      <ListItem
        sx={{
          mb: 1,
          borderRadius: 1
        }}
        secondaryAction={
          isOpenSidebar &&
          userActions.includes(ACTIONS_PERMISSIONS.COMMERCE_CARDS) && (
            <Checkbox edge="start" checked={selected} onClick={onSelectRow} inputProps={{ 'aria-labelledby': id }} />
          )
        }
        disablePadding
      >
        <RootStyle
          onClick={handleSelectedRow}
          sx={{
            ...(isSelected && { bgcolor: 'secondary.light', color: 'black', '& :hover': { color: 'text.primary' } })
          }}
        >
          <ListItemAvatar>
            <Box sx={{ position: 'relative', pl: 1 }}>
              <Avatar
                sx={theme => ({
                  width: 30,
                  height: 30,
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
              <Stack>
                <Typography noWrap variant={'subtitle2'}>
                  {cardNumberHidden}
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
