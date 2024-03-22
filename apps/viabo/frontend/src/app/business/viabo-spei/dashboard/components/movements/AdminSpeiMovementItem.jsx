import PropTypes from 'prop-types'

import {
  Avatar,
  Divider,
  ListItem,
  ListItemAvatar,
  ListItemButton,
  ListItemText,
  Stack,
  Typography,
  styled
} from '@mui/material'

import { useAdminDashboardSpeiStore } from '../../store'

import { stringAvatar } from '@/theme/utils'

const RootStyle = styled(ListItemButton)(({ theme }) => ({
  borderRadius: 0,
  width: 1,
  justifyContent: 'start',
  display: 'flex',
  alignItems: 'center',
  transition: theme.transitions.create('all')
}))
export const AdminSpeiMovementItem = ({ movement, ...others }) => {
  const setOpenDetailsTransaction = useAdminDashboardSpeiStore(state => state.setOpenDetailsTransaction)
  const setTransaction = useAdminDashboardSpeiStore(state => state.setTransaction)
  const transaction = useAdminDashboardSpeiStore(state => state.transaction)

  const handleSelectedRow = e => {
    setOpenDetailsTransaction(true)
    setTransaction(movement)
  }

  const isSelected = transaction?.id === movement?.id
  return (
    <>
      <ListItem
        {...others}
        sx={{
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
            width: 1
          }}
        >
          <ListItemAvatar>
            <Avatar title={movement?.beneficiary?.name} {...stringAvatar(movement?.beneficiary?.name)}></Avatar>
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

AdminSpeiMovementItem.propTypes = {
  movement: PropTypes.shape({
    amount: PropTypes.shape({
      color: PropTypes.string,
      format: PropTypes.any
    }),
    date: PropTypes.shape({
      dateTime: PropTypes.any,
      time: PropTypes.any
    }),
    id: PropTypes.any,
    movement: PropTypes.any
  })
}