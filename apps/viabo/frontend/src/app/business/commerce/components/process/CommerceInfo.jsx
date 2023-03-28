import { Stack, Typography } from '@mui/material'

export default function CommerceInfo() {
  return (
    <Stack direction="column" width={1} spacing={1}>
      <Typography variant="h4" color="textPrimary" align="center">
        Información del Comercio
      </Typography>
      <Typography paragraph align="center" variant="body1" color={'text.secondary'} whiteSpace="pre-line">
        Ingrese la información del comercio para continuar con el proceso
      </Typography>
    </Stack>
  )
}
