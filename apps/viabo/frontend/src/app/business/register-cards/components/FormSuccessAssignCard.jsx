import { Box, Button, Stack, Typography } from '@mui/material'
import mail from '@/shared/assets/img/mail.svg'
import { CARD_ASSIGN_PROCESS_LIST } from '@/app/business/register-cards/services'
import { useCardUserAssign } from '@/app/business/register-cards/store'

export default function FormSuccessAssignCard() {
  const setStep = useCardUserAssign(state => state.setStepAssignRegister)
  const user = useCardUserAssign(state => state.user)

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
        variant={'outlined'}
        color={'primary'}
        onClick={() => {
          setStep(CARD_ASSIGN_PROCESS_LIST.CARD_VALIDATION)
        }}
      >
        Regresar
      </Button>
    </Stack>
  )
}
