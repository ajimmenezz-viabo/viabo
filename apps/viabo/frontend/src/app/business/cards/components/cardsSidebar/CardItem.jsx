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
import { CreditCard } from '@mui/icons-material'
import { memo } from 'react'
import { useCommerceDetailsCard } from '@/app/business/cards/store'
import { CarnetLogo, MasterCardLogo } from '@/shared/components/images'

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
          pb: 1,
          borderRadius: 1
        }}
        secondaryAction={
          isOpenSidebar && (
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
            <Box sx={{ position: 'relative', pl: isOpenSidebar ? 1 : 0 }}>
              <Avatar
                sx={theme => ({
                  width: 48,
                  height: 48,
                  color: theme.palette.primary.contrastText,
                  backgroundColor: theme.palette.primary.main
                })}
              >
                <CreditCard width={24} height={24} />
              </Avatar>
              <BadgeStatus status={status} sx={{ right: 2, bottom: 2, position: 'absolute' }} />
            </Box>
          </ListItemAvatar>

          {isOpenSidebar && (
            <>
              <Stack>
                <Typography noWrap variant={'subtitle2'}>
                  {cardNumberHidden}
                </Typography>
                <Stack flexDirection={'row'} alignItems={'center'} gap={6}>
                  <Typography color={'text.secondary'} variant={'subtitle2'}>
                    {expiration}
                  </Typography>
                  {cardType === 'Carnet' ? (
                    <CarnetLogo sx={{ width: 40 }} color={isSelected ? 'black' : theme.palette.text.primary} />
                  ) : (
                    <MasterCardLogo sx={{ width: 40 }} color={theme.palette.text.primary} />
                  )}
                </Stack>
              </Stack>
            </>
          )}
        </RootStyle>
      </ListItem>
    </Tooltip>
  )
}

export default memo(CardItem)
