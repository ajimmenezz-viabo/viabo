import PropTypes from 'prop-types'

import {
  Avatar,
  Divider,
  ListItem,
  ListItemAvatar,
  ListItemButton,
  ListItemText,
  Stack,
  Typography
} from '@mui/material'
import { styled } from '@mui/material/styles'

import { stringAvatar } from '@/theme/utils'

const RootStyle = styled(ListItemButton)(({ theme }) => ({
  borderRadius: '8px!important',
  width: 1,
  justifyContent: 'start',
  display: 'flex',
  alignItems: 'center',
  mb: 1,
  transition: theme.transitions.create('all')
}))
export const AdminSpeiLastMovementItem = ({ movement }) => {
  const handleSelectedRow = e => {
    const type = e.target?.type
  }

  const isSelected = false
  const isOut = movement?.amount?.color === 'error'
  return (
    <>
      <ListItem
        sx={{
          my: 1,
          padding: 0,
          borderRadius: 1,
          '& :hover': { color: 'text.primary' }
        }}
        disablePadding
      >
        <RootStyle
          onClick={handleSelectedRow}
          sx={{
            ...(isSelected && {
              bgcolor: 'secondary.light',
              color: 'text.primary.contrastText',
              '& :hover': { color: 'text.primary' }
            }),
            '& :hover': { color: 'text.primary' },
            width: 1,
            py: 1,
            gap: 1
          }}
        >
          <ListItemAvatar>
            <Avatar {...stringAvatar(movement?.movement)}></Avatar>
          </ListItemAvatar>
          <ListItemText
            primary={
              <Stack flexDirection={'row'} justifyContent={'space-between'} alignItems={'center'}>
                <Typography variant="subtitle1" fontWeight={600}>
                  {movement?.movement}
                </Typography>
                <Typography variant="subtitle1" color={movement?.amount?.color || 'text.primary'} fontWeight={'bold'}>
                  {movement?.amount?.format}
                </Typography>
              </Stack>
            }
            secondary={
              <Typography sx={{ display: 'inline' }} component="span" variant="body2" color="text.secondary">
                {movement?.date?.time}
              </Typography>
            }
          />
        </RootStyle>
      </ListItem>
      <Divider />
    </>
  )
}

AdminSpeiLastMovementItem.propTypes = {
  movement: PropTypes.shape({
    amount: PropTypes.shape({
      color: PropTypes.string,
      format: PropTypes.any
    }),
    date: PropTypes.shape({
      dateTime: PropTypes.any,
      time: PropTypes.any
    }),
    movement: PropTypes.any
  })
}
