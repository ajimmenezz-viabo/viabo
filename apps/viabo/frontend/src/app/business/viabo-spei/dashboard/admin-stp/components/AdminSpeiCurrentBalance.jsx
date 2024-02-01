import { useEffect, useState } from 'react'

import { MoreVert, Person } from '@mui/icons-material'
import {
  Avatar,
  Box,
  CardContent,
  CardHeader,
  IconButton,
  MenuItem,
  Stack,
  Typography,
  alpha,
  styled,
  useTheme
} from '@mui/material'
import { PiEyeBold, PiEyeClosedBold } from 'react-icons/pi'

import { useFindViaboSpeiBalance } from '../../../shared/hooks'
import { useAdminDashboardSpeiStore } from '../store'

import { MenuPopover } from '@/shared/components/containers'
import { FullLogo } from '@/shared/components/images'
import { RequestLoadingComponent } from '@/shared/components/loadings'
import { ErrorRequestPage } from '@/shared/components/notifications'
import { fCurrency } from '@/shared/utils'

const HEIGHT = 330

const RootStyle = styled('div')(({ theme }) => ({
  position: 'relative',
  height: HEIGHT,
  borderRadius: Number(theme.shape.borderRadius) * 2
}))

const CardItemStyle = styled('div')(({ theme }) => ({
  position: 'relative',
  height: HEIGHT - 16,
  padding: theme.spacing(3),
  // color: theme.palette.common.white,
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  // backgroundColor: 'inherit',
  background: `linear-gradient(to right, ${alpha(
    theme.palette.mode === 'dark' ? theme.palette.secondary.dark : theme.palette.primary.lighter,
    0.7
  )},rgba(22, 28, 36, 0.4)), url(https://minimals.cc/assets/background/overlay_2.jpg)`,
  // backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
  backdropFilter: 'blur(40px)',
  borderRadius: Number(theme.shape.borderRadius) * 2,
  boxShadow: theme.customShadows.card
}))

const shadowStyle = {
  mx: 'auto',
  width: 'calc(100% - 16px)',
  borderRadius: 2,
  position: 'absolute',
  height: 200,
  zIndex: 8,
  bottom: 8,
  left: 0,
  right: 0,
  bgcolor: 'grey.500',
  backdropFilter: 'blur(40px)',
  opacity: 0.32
}

const AdminSpeiCurrentBalance = () => {
  const { data, isLoading, isError, error, refetch } = useFindViaboSpeiBalance()
  const stpAccount = useAdminDashboardSpeiStore(state => state.stpAccount)
  const setStpAccount = useAdminDashboardSpeiStore(state => state.setStpAccount)

  useEffect(() => {
    if (data) {
      setStpAccount(data)
    }
  }, [data])

  const [show, setShow] = useState(false)

  return (
    <RootStyle>
      <Box
        sx={{
          position: 'relative',
          zIndex: 9
        }}
      >
        <CardItemStyle>
          {isLoading && <RequestLoadingComponent />}
          {!isLoading && !isError && (
            <>
              <CardHeader
                sx={{ p: 0, pb: 3 }}
                avatar={
                  <Avatar sx={{ backgroundColor: theme => theme.palette.background.default }}>
                    <Person color="primary" />
                  </Avatar>
                }
                action={
                  <Stack direction={'row'} spacing={1} alignItems={'center'} justifyContent={'center'}>
                    <Stack direction={'row'} spacing={1} alignItems={'center'} justifyContent={'center'}>
                      <FullLogo sx={{ width: 60 }} />
                      <Typography variant="h4" color={'primary.main'}>
                        |
                      </Typography>
                      <Typography variant="h5" color={'primary.main'}>
                        spei
                      </Typography>
                    </Stack>
                    <MoreMenuButton />
                  </Stack>
                }
                title="Ramses Hoyos"
                subheader="Admin"
              />
              <CardContent sx={{ p: 0 }}>
                <Stack gap={4}>
                  <Stack gap={1}>
                    <Typography color={'primary.main'} sx={{ typography: 'subtitle1', fontWeight: 'bold' }}>
                      Balance Total
                    </Typography>
                    <Typography sx={{ typography: 'h2' }}>{fCurrency(stpAccount?.balance)}</Typography>
                  </Stack>

                  <Stack gap={2}>
                    <Typography color={'primary.main'} sx={{ typography: 'subtitle1', fontWeight: 'bold' }}>
                      Cuenta Origen | STP
                    </Typography>
                    <Stack direction={'row'} spacing={1} alignItems={'center'}>
                      <Typography sx={{ typography: 'h6' }}>
                        {show ? stpAccount?.accountNumber : stpAccount?.accountNumberHidden}
                      </Typography>
                      <Box>
                        <IconButton size={'small'} color="inherit" onClick={() => setShow(!show)} sx={{ opacity: 0.7 }}>
                          {show ? <PiEyeBold /> : <PiEyeClosedBold />}
                        </IconButton>
                      </Box>
                    </Stack>
                  </Stack>
                </Stack>
              </CardContent>
            </>
          )}
          {!isLoading && isError && <ErrorRequestPage errorMessage={error} handleButton={refetch} widthImage="30%" />}
        </CardItemStyle>
      </Box>

      <Box sx={{ ...shadowStyle }} />
      <Box
        sx={{
          ...shadowStyle,
          opacity: 0.16,
          bottom: 0,
          zIndex: 7,
          width: 'calc(100% - 40px)'
        }}
      />
    </RootStyle>
  )
}

export default AdminSpeiCurrentBalance

function MoreMenuButton() {
  const [anchorEl, setAnchorEl] = useState(null)
  const open = Boolean(anchorEl)
  const { setOpenSpeiOut } = useAdminDashboardSpeiStore()
  const theme = useTheme()

  const handleOpen = event => {
    setAnchorEl(event.currentTarget)
  }
  const handleClose = () => {
    setAnchorEl(null)
  }

  return (
    <Box position={'relative'}>
      <IconButton size="large" sx={{ color: 'white' }} onClick={handleOpen}>
        <MoreVert />
      </IconButton>

      <MenuPopover
        open={Boolean(open)}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
        transformOrigin={{ vertical: 'top', horizontal: 'right' }}
        arrow="right-start"
        sx={{
          mt: -1,
          mr: 0,
          p: 2,
          width: 250,
          '& .MuiMenuItem-root': {
            p: 1,
            typography: 'body1',
            borderRadius: 0.75,
            '& svg': { mr: 2, width: 20, height: 20 }
          }
        }}
      >
        <MenuItem
          onClick={() => {
            setOpenSpeiOut(true)
            handleClose()
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            stroke={theme.palette.primary.main}
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M12 19h-6a3 3 0 0 1 -3 -3v-8a3 3 0 0 1 3 -3h12a3 3 0 0 1 3 3v4.5" />
            <path d="M3 10h18" />
            <path d="M16 19h6" />
            <path d="M19 16l3 3l-3 3" />
            <path d="M7.005 15h.005" />
            <path d="M11 15h2" />
          </svg>
          SPEI Out
        </MenuItem>
      </MenuPopover>
    </Box>
  )
}
