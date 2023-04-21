import { Card, CardHeader, Grid, Stack, Typography } from '@mui/material'
import { alpha, styled } from '@mui/material/styles'
import { CheckTwoTone, ClearTwoTone } from '@mui/icons-material'
import { Image } from '@/shared/components/images'
import ViaboPay from '@/shared/assets/img/viabo-pay.png'
import ViaboCard from '@/shared/assets/img/viabo-card.png'
import { useMemo } from 'react'

const IconWrapperStyle = styled('div')(({ theme }) => ({
  width: 30,
  height: 30,
  display: 'flex',
  borderRadius: '50%',
  alignItems: 'center',
  justifyContent: 'center',
  color: theme.palette.primary.main,
  backgroundColor: alpha(theme.palette.primary.main, 0.08)
}))

export function ServicesInfo({ services }) {
  const hadViaboCard = useMemo(() => Boolean(services?.viaboCard), [services])
  const apiRequired = useMemo(() => Boolean(services?.apiRequired), [services])
  const customCards = useMemo(() => Boolean(services?.viaboCard?.customCardsRequired), [services])
  return (
    <Card sx={{ p: 5 }}>
      <CardHeader
        title="Servicios"
        subheader={
          <Stack spacing={2} direction={'row'}>
            <Image disabledEffect visibleByDefault alt="logo" src={ViaboPay} sx={{ maxWidth: 150 }} />
            {hadViaboCard && (
              <Image disabledEffect visibleByDefault alt="logo" src={ViaboCard} sx={{ maxWidth: 150 }} />
            )}
          </Stack>
        }
        sx={{
          p: 0,
          mb: 3,
          '& .MuiCardHeader-action': { alignSelf: 'center' }
        }}
      />
      <Grid container spacing={5}>
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
          <IconWrapperStyle
            sx={{
              color: `${apiRequired ? 'success.main' : 'error.main'}`,
              bgcolor: theme =>
                apiRequired ? alpha(theme.palette.success.main, 0.08) : alpha(theme.palette.error.main, 0.08)
            }}
          >
            {apiRequired ? <CheckTwoTone width={20} height={20} /> : <ClearTwoTone width={20} height={20} />}
          </IconWrapperStyle>
        </Grid>

        {hadViaboCard && (
          <Grid item xs={12} sm={6}>
            <Typography paragraph variant="overline" sx={{ color: 'text.disabled' }}>
              Tarjetas fisicas personalizadas
            </Typography>
            <IconWrapperStyle
              sx={{
                color: `${customCards ? 'success.main' : 'error.main'}`,
                bgcolor: theme =>
                  customCards ? alpha(theme.palette.success.main, 0.08) : alpha(theme.palette.error.main, 0.08)
              }}
            >
              {customCards ? <CheckTwoTone width={20} height={20} /> : <ClearTwoTone width={20} height={20} />}
            </IconWrapperStyle>
          </Grid>
        )}
      </Grid>
    </Card>
  )
}
