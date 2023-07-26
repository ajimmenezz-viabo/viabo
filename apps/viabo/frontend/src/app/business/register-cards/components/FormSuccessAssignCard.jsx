import { Box, Button, Stack, Typography } from '@mui/material'
import { Link as RouterLink } from 'react-router-dom'

import { useCardUserAssign } from '@/app/business/register-cards/store'
import { PATH_AUTH } from '@/routes'
import mail from '@/shared/assets/img/mail.svg'

export default function FormSuccessAssignCard() {
  const user = useCardUserAssign(state => state.user)
  const resetState = useCardUserAssign(state => state.resetState)

  return (
    <Stack sx={{ height: 1, p: 3 }} spacing={3}>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          my: 3
        }}
      >
        <img className="animate__animated animate__pulse" src={mail} width="25%" alt="Sent Mail" />
      </Box>
      <Stack direction="column" width={1} spacing={1}>
        <Typography variant="h4" color="textPrimary" align="center">
          Asignación Correcta
        </Typography>
        <Typography paragraph align="center" variant="body1" color={'text.secondary'} whiteSpace="pre-line">
          Enviamos un correo electrónico a {user?.email || '-'} con los datos de acceso de tu cuenta.
        </Typography>
      </Stack>

      <Button
        component={RouterLink}
        to={PATH_AUTH.login}
        onClick={() => {
          resetState()
        }}
        variant={'outlined'}
        color={'primary'}
      >
        Ingresar
      </Button>
    </Stack>
  )
}
