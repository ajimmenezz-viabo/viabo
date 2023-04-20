import { Box, Button, Grid, Stack, Toolbar, Typography } from '@mui/material'
import { Scrollbar } from '@/shared/components/scroll'
import { AnimatePresence, m } from 'framer-motion'
import { AccountInfo, Documents, GeneralInfo, ServicesInfo } from '@/app/management/commerces/components/details'
import { varFade } from '@/shared/components/animate'

export function CommerceDetails(props) {
  const minHeight = 700
  return (
    <>
      <Toolbar
        sx={{
          position: 'sticky',
          top: 0,
          zIndex: 1
        }}
      >
        <Stack
          spacing={3}
          direction={'row'}
          justifyContent="space-between"
          sx={{ width: 1 }}
          alignItems={{ sm: 'center' }}
        >
          <Stack direction="row" spacing={1}>
            <Typography variant="h5">Detalles</Typography>
          </Stack>
          <Button variant="contained">Afiliación</Button>
        </Stack>
      </Toolbar>
      <Box sx={{ maxHeight: minHeight, minHeight: '100vh', overflow: 'auto' }}>
        <Scrollbar
          sx={
            {
              // height: 1,
              // '& .simplebar-content': { height: 1, display: 'flex', flexDirection: 'column' }
            }
          }
        >
          <Grid container sx={{ p: 2 }} spacing={3}>
            <AnimatePresence>
              <Grid item xs={12} xl={6}>
                <m.div {...varFade().in}>
                  <AccountInfo />
                </m.div>
              </Grid>

              <Grid item xs={12} xl={6}>
                <m.div {...varFade().in}>
                  <GeneralInfo />
                </m.div>
              </Grid>
              <Grid item xs={12} xl={6}>
                <m.div {...varFade().in}>
                  <ServicesInfo />
                </m.div>
              </Grid>
              <Grid item xs={12} xl={6}>
                <m.div {...varFade().in}>
                  <Documents />
                </m.div>
              </Grid>
            </AnimatePresence>
          </Grid>
        </Scrollbar>
      </Box>
    </>
  )
}
