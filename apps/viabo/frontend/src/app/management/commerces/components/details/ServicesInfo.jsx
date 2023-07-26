import { Grid, Stack, Typography } from '@mui/material'
import { Image } from '@/shared/components/images'
import ViaboPay from '@/shared/assets/img/viabo-pay.png'
import ViaboCard from '@/shared/assets/img/viabo-card.png'
import { useMemo } from 'react'
import { ErrorIconDetails, SuccessIconDetails } from './DetailsComponents'
import { DetailsCardLayout } from './DetailsCardLayout'

export function ServicesInfo({ services, expanded, handleChange, status }) {
  const available = Boolean(services?.available)

  const hadViaboCard = useMemo(() => Boolean(services?.viaboCard), [services])
  const apiRequired = useMemo(() => Boolean(services?.apiRequired), [services])
  const customCards = useMemo(() => Boolean(services?.viaboCard?.customCardsRequired), [services])
  return (
    <DetailsCardLayout
      step={status?.step}
      headerText={'Servicios'}
      available={available}
      handleChange={handleChange}
      expandedText={'services-info'}
      expanded={expanded}
      alertText={'No se han seleccionado servicios para este comercio!'}
    >
      <Grid container spacing={5} sx={{ mt: 0 }}>
        <Grid item xs={12}>
          <Stack spacing={2} direction={'row'}>
            <Image disabledEffect visibleByDefault alt="logo" src={ViaboPay} sx={{ maxWidth: 150 }} />
            {hadViaboCard && (
              <Image disabledEffect visibleByDefault alt="logo" src={ViaboCard} sx={{ maxWidth: 150 }} />
            )}
          </Stack>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Typography paragraph variant="overline" sx={{ color: 'text.disabled' }}>
            No. Terminales TPV's
          </Typography>
          <Typography variant="body2">{services?.tpvsNumber}</Typography>
        </Grid>

        {hadViaboCard && (
          <>
            <Grid item xs={12} sm={6}>
              <Typography paragraph variant="overline" sx={{ color: 'text.disabled' }}>
                No. de Tarjetas
              </Typography>
              <Typography variant="body2">{services?.viaboCard?.cardNumbers}</Typography>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Typography paragraph variant="overline" sx={{ color: 'text.disabled' }}>
                Uso de las tarjetas viabo
              </Typography>
              <Typography variant="body2">{services?.viaboCard?.cardUse}</Typography>
            </Grid>
          </>
        )}

        <Grid item xs={12} sm={6}>
          <Typography paragraph variant="overline" sx={{ color: 'text.disabled' }}>
            API para ligas de cobro
          </Typography>
          {apiRequired ? <SuccessIconDetails /> : <ErrorIconDetails />}
        </Grid>

        {hadViaboCard && (
          <Grid item xs={12} sm={6}>
            <Typography paragraph variant="overline" sx={{ color: 'text.disabled' }}>
              Tarjetas fisicas personalizadas
            </Typography>
            {customCards ? <SuccessIconDetails /> : <ErrorIconDetails />}
          </Grid>
        )}
      </Grid>
    </DetailsCardLayout>
  )
}
