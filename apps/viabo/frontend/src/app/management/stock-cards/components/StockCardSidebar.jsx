import { Backdrop, Divider, IconButton, Stack, Typography } from '@mui/material'
import { useEffect } from 'react'
import { varFade } from '@/shared/components/animate'
import { NAVBAR } from '@theme/overrides/options'
import { useSettings } from '@theme/hooks'
import { Close } from '@mui/icons-material'
import { AnimatePresence, m } from 'framer-motion'
import { alpha, styled } from '@mui/material/styles'
import { cssStyles } from '@theme/utils'
import { StockCardForm } from '@/app/management/stock-cards/components/StockCardForm'

const RootStyle = styled(m.div)(({ theme, isDesktop }) => ({
  ...cssStyles(theme).bgBlur({ color: theme.palette.background.paper, opacity: 0.92 }),
  top: 0,
  right: 0,
  bottom: 0,
  display: 'flex',
  position: 'fixed',
  overflow: 'hidden',
  width: NAVBAR.BASE_WIDTH + 200,
  [theme.breakpoints.down('md')]: {
    width: '100%'
  },

  flexDirection: 'column',
  margin: 0,
  paddingBottom: theme.spacing(3),
  zIndex: theme.zIndex.drawer + 3,
  borderRadius: Number(theme.shape.borderRadius) * 1.5,
  boxShadow: `-24px 12px 32px -4px ${alpha(
    theme.palette.mode === 'light' ? theme.palette.grey[500] : theme.palette.common.black,
    0.16
  )}`
}))

export function StockCardSidebar({ open, setOpen }) {
  const { themeDirection } = useSettings()

  const varSidebar =
    themeDirection !== 'rtl'
      ? varFade({
          distance: NAVBAR.BASE_WIDTH,
          durationIn: 0.32,
          durationOut: 0.32
        }).inRight
      : varFade({
          distance: NAVBAR.BASE_WIDTH,
          durationIn: 0.32,
          durationOut: 0.32
        }).inLeft

  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
  }, [open])

  const handleClose = () => {
    setOpen(false)
  }

  return (
    <>
      <Backdrop
        open={open}
        onClick={handleClose}
        sx={{ background: 'transparent', zIndex: theme => theme.zIndex.drawer + 1 }}
      />

      <AnimatePresence>
        {open && (
          <>
            <RootStyle {...varSidebar}>
              <Stack direction="row" alignItems="center" justifyContent="space-between" sx={{ py: 2, pr: 1, pl: 2.5 }}>
                <Typography variant="subtitle1">Nueva Tarjeta</Typography>
                <div>
                  <IconButton aria-label="close" size="medium" onClick={handleClose}>
                    <Close width={20} height={20} fontSize="inherit" color="primary" />
                  </IconButton>
                </div>
              </Stack>

              <Divider sx={{ borderStyle: 'dashed' }} />

              <StockCardForm setOpen={setOpen} />
            </RootStyle>
          </>
        )}
      </AnimatePresence>
    </>
  )
}
