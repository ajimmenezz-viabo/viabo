import PropTypes from 'prop-types'
import { styled } from '@mui/material/styles'
import { Box, Link, Typography } from '@mui/material'
import { MyAvatar } from '@/shared/layout/dashboard/header'
import { useAuth } from '@/shared/hooks'

const RootStyle = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(2, 2.5),
  borderRadius: Number(theme.shape.borderRadius) * 1.5,
  backgroundColor: theme.palette.grey[500_12],
  transition: theme.transitions.create('opacity', {
    duration: theme.transitions.duration.shorter
  })
}))

NavbarAccount.propTypes = {
  isCollapse: PropTypes.bool
}

export default function NavbarAccount({ isCollapse }) {
  const { user } = useAuth()
  return (
    <Link underline="none" color="inherit" href="/">
      <RootStyle
        sx={{
          ...(isCollapse && {
            bgcolor: 'transparent'
          })
        }}
      >
        <MyAvatar />

        <Box
          sx={{
            ml: 2,
            transition: theme =>
              theme.transitions.create('width', {
                duration: theme.transitions.duration.shorter
              }),
            ...(isCollapse && {
              ml: 0,
              width: 0
            })
          }}
        >
          <Typography variant="subtitle2">{user?.name}</Typography>
          <Typography textAlign={'left'} variant="body2" noWrap sx={{ color: 'text.secondary' }}>
            {user?.profile}
          </Typography>
        </Box>
      </RootStyle>
    </Link>
  )
}
