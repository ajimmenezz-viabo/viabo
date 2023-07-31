import PropTypes from 'prop-types'

import { Box, Button, Divider, InputAdornment, Stack, TextField, Typography } from '@mui/material'

import { DetailsCardLayout } from '@/app/management/commerces/components/details/DetailsCardLayout'
import { CarnetLogo, MasterCardLogo } from '@/shared/components/images'

Commissions.propTypes = {
  handleChange: PropTypes.func.isRequired,
  expanded: PropTypes.string.isRequired
}

export function Commissions({ handleChange, expanded }) {
  return (
    <DetailsCardLayout
      headerText={'Comisiones'}
      handleChange={handleChange}
      expanded={expanded}
      expandedText={'commissions'}
    >
      <Stack mt={2} gap={3} flexDirection={'column'}>
        <Stack gap={2}>
          <Typography variant="subtitle2">SPEI</Typography>
          <Stack gap={3} flexDirection={'row'} flexWrap={'wrap'} alignItems={'center'} width={1}>
            <CarnetLogo />

            <Stack spacing={1} flexGrow={1}>
              <Typography m={0} paragraph variant="overline" sx={{ color: 'text.disabled' }}>
                Entrantes:
              </Typography>
              <TextField
                placeholder="0"
                autoFocus
                focused
                size={'small'}
                type="number"
                InputProps={{
                  endAdornment: <InputAdornment position="start">%</InputAdornment>
                }}
              />
            </Stack>

            <Stack spacing={1} flexGrow={1}>
              <Typography m={0} paragraph variant="overline" sx={{ color: 'text.disabled' }}>
                Salientes:
              </Typography>
              <TextField
                placeholder="0"
                type="number"
                size={'small'}
                InputProps={{
                  endAdornment: <InputAdornment position="start">%</InputAdornment>
                }}
              />
            </Stack>
          </Stack>

          <Stack gap={3} flexDirection={'row'} flexWrap={'wrap'} alignItems={'center'} width={1}>
            <MasterCardLogo />

            <Stack spacing={1} flexGrow={1}>
              <Typography m={0} paragraph variant="overline" sx={{ color: 'text.disabled' }}>
                Entrantes:
              </Typography>
              <TextField
                placeholder="0"
                autoFocus
                focused
                size={'small'}
                type="number"
                InputProps={{
                  endAdornment: <InputAdornment position="start">%</InputAdornment>
                }}
              />
            </Stack>

            <Stack spacing={1} flexGrow={1}>
              <Typography m={0} paragraph variant="overline" sx={{ color: 'text.disabled' }}>
                Salientes:
              </Typography>
              <TextField
                placeholder="0"
                type="number"
                size={'small'}
                InputProps={{
                  endAdornment: <InputAdornment position="start">%</InputAdornment>
                }}
              />
            </Stack>
          </Stack>
        </Stack>
        <Divider flexItem sx={{ borderStyle: 'dashed' }} />
        <Stack gap={2} flexDirection={'row'} alignItems={'center'} justifyContent={'space-between'}>
          <Typography variant="subtitle2">Viabo Pay</Typography>
          <TextField
            placeholder="0"
            autoFocus
            focused
            size={'small'}
            type="number"
            InputProps={{
              endAdornment: <InputAdornment position="start">%</InputAdornment>
            }}
          />
        </Stack>
        <Box display={'flex'} justifyContent={'center'}>
          <Button variant={'contained'}>Guardar</Button>
        </Box>
      </Stack>
    </DetailsCardLayout>
  )
}
