import { Alert, Box, Button, Grid, Stack, Toolbar, Typography } from '@mui/material'
import { Scrollbar } from '@/shared/components/scroll'
import { m } from 'framer-motion'
import { AccountInfo, Documents, GeneralInfo, ServicesInfo } from '@/app/management/commerces/components/details'
import { varFade } from '@/shared/components/animate'
import { useCommerce } from '@/app/management/commerces/store'
import { shallow } from 'zustand/shallow'
import { SelectDataIllustration } from '@/shared/components/illustrations'
import React from 'react'

export function CommerceDetails() {
  const { commerce } = useCommerce(state => state, shallow)

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
          {commerce && commerce?.status?.id === '2' && <Button variant="contained">Afiliación</Button>}
        </Stack>
      </Toolbar>
      {commerce ? (
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
              <Grid item xs={12} xl={6}>
                <m.div {...varFade().in}>
                  <AccountInfo account={commerce?.account} />
                </m.div>
              </Grid>

              {commerce?.information.available && (
                <Grid item xs={12} xl={6}>
                  <m.div {...varFade().in}>
                    <GeneralInfo info={commerce?.information} />
                  </m.div>
                </Grid>
              )}

              {commerce?.services.available && (
                <Grid item xs={12} xl={6}>
                  <m.div {...varFade().in}>
                    <ServicesInfo services={commerce?.services} />
                  </m.div>
                </Grid>
              )}

              {commerce?.documents?.length > 0 && (
                <Grid item xs={12} xl={6}>
                  <m.div {...varFade().in}>
                    <Documents documents={commerce?.documents} />
                  </m.div>
                </Grid>
              )}
            </Grid>
          </Scrollbar>
        </Box>
      ) : (
        <Stack px={2} spacing={3} sx={{ height: '100%', width: '100%' }}>
          <Alert variant="filled" severity="info">
            Debe seleccionar un comercio para ver sus detalles!
          </Alert>
          <Stack alignItems={'center'}>
            <SelectDataIllustration sx={{ width: '30%' }} />
          </Stack>
        </Stack>
      )}
    </>
  )
}
