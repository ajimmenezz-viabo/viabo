import { useState } from 'react'

import { Alert, Button, Grid, Stack, Typography } from '@mui/material'
import { m } from 'framer-motion'
import { shallow } from 'zustand/shallow'

import {
  AccountInfo,
  Commissions,
  Documents,
  GeneralInfo,
  ServicesInfo
} from '@/app/management/commerces/components/details'
import { useCommerce } from '@/app/management/commerces/store'
import { varFade } from '@/shared/components/animate'
import { SelectDataIllustration } from '@/shared/components/illustrations'

export function CommerceDetails() {
  const { commerce } = useCommerce(state => state, shallow)
  const [expanded, setExpanded] = useState('')

  const handleChange = newExpanded => {
    if (expanded === newExpanded) {
      setExpanded('')
    } else {
      setExpanded(newExpanded)
    }
  }

  return (
    <>
      <Stack
        spacing={3}
        direction={'row'}
        justifyContent="space-between"
        sx={{ width: 1, mb: 2 }}
        alignItems={{ sm: 'center' }}
      >
        <Stack direction="row" spacing={1}>
          <Typography variant="h5">Detalles</Typography>
        </Stack>
        {commerce && commerce?.status?.id === '2' && <Button variant="contained">Afiliación</Button>}
      </Stack>

      {commerce ? (
        <Stack>
          <Grid container spacing={3}>
            <Grid item xs={12} xl={6}>
              <m.div {...varFade().in}>
                <AccountInfo
                  account={commerce?.account}
                  expanded={expanded}
                  handleChange={handleChange}
                  status={commerce?.status}
                />
              </m.div>
            </Grid>

            <Grid item xs={12} xl={6}>
              <m.div {...varFade().in}>
                <GeneralInfo
                  info={commerce?.information}
                  expanded={expanded}
                  handleChange={handleChange}
                  status={commerce?.status}
                />
              </m.div>
            </Grid>

            <Grid item xs={12} xl={6}>
              <m.div {...varFade().in}>
                <ServicesInfo
                  services={commerce?.services}
                  expanded={expanded}
                  handleChange={handleChange}
                  status={commerce?.status}
                />
              </m.div>
            </Grid>

            <Grid item xs={12} xl={6}>
              <m.div {...varFade().in}>
                <Documents
                  documents={commerce?.documents}
                  expanded={expanded}
                  handleChange={handleChange}
                  status={commerce?.status}
                />
              </m.div>
            </Grid>

            <Grid item xs={12} xl={6}>
              <m.div {...varFade().in}>
                <Commissions expanded={expanded} handleChange={handleChange} />
              </m.div>
            </Grid>
          </Grid>
        </Stack>
      ) : (
        <Stack spacing={3} sx={{ height: '100%', width: '100%' }}>
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
