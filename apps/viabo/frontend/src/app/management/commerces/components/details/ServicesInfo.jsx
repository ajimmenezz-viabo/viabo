import { Alert, Box, Card, Collapse, Grid, Stack, Typography } from '@mui/material'
import { Image } from '@/shared/components/images'
import ViaboPay from '@/shared/assets/img/viabo-pay.png'
import ViaboCard from '@/shared/assets/img/viabo-card.png'
import { useMemo } from 'react'
import {
  DetailsComponents,
  ErrorIconDetails,
  SuccessIconDetails,
  WarningIconDetails
} from '@/app/management/commerces/components/details/DetailsComponents'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'

export function ServicesInfo({ services, expanded, handleChange, status }) {
  const isExpanded = Boolean(expanded === 'services-info')
  const available = Boolean(services?.available)

  const hadViaboCard = useMemo(() => Boolean(services?.viaboCard), [services])
  const apiRequired = useMemo(() => Boolean(services?.apiRequired), [services])
  const customCards = useMemo(() => Boolean(services?.viaboCard?.customCardsRequired), [services])
  return (
    <Card
      sx={{
        p: isExpanded ? 5 : 3,
        border: isExpanded ? 3 : 0,
        borderColor: isExpanded
          ? theme => (theme.palette.mode === 'dark' ? theme.palette.secondary.main : theme.palette.primary.main)
          : 'inherit'
      }}
    >
      <Stack display="flex" flexDirection={{ xs: 'column', sm: 'row' }} alignItems="center">
        <Stack direction={'row'} spacing={1.5} alignItems={'center'}>
          {available ? (
            <SuccessIconDetails widthWrapper={25} heightWrapper={25} opacity={0.2} sx={{ width: 15, height: 15 }} />
          ) : (
            <WarningIconDetails />
          )}
          <Typography variant="subtitle1" color="textPrimary">
            Servicios
          </Typography>
        </Stack>
        <Box sx={{ flex: '1 1 auto' }} />
        <DetailsComponents
          expand={isExpanded}
          onClick={() => {
            handleChange('services-info')
          }}
          aria-expanded={isExpanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </DetailsComponents>
      </Stack>

      <Collapse in={isExpanded} timeout="auto">
        {!available ? (
          <Alert sx={{ mt: 3 }} severity="warning" variant={'filled'}>
            <Typography variant="body2">No se han seleccionado servicios para este comercio!</Typography>
            <Typography variant="caption">
              Etapa de registro: <b>{status?.step}</b>
            </Typography>
          </Alert>
        ) : (
          <>
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
          </>
        )}
      </Collapse>
    </Card>
  )
}
