import { Box, Button, CircularProgress, Divider, Link, Stack, Typography } from '@mui/material'
import mail from '@/shared/assets/img/mail.svg'
import { MuiOtpInput } from 'mui-one-time-password-input'
import { useState } from 'react'
import { matchIsNumeric } from '@/shared/utils'
import { useSendValidationCode, useValidateCode } from '@/app/business/commerce/hooks'
import { useCardUserAssign } from '@/app/business/register-cards/store'
import { CARD_ASSIGN_PROCESS_LIST } from '@/app/business/register-cards/services'

export default function FormUserCardValidation() {
  const setStep = useCardUserAssign(state => state.setStepAssignRegister)
  const user = useCardUserAssign(state => state.user)
  const [otp, setOtp] = useState('')
  const { mutate: sendValidationCode, isLoading: isSendingCode } = useSendValidationCode()
  const { mutate: validateCode, isLoading: isValidatingCode, isError: isErrorValidatingCode, reset } = useValidateCode()

  const handleChange = newValue => {
    setOtp(newValue)
    reset()
  }

  const validateChar = (value, index) => matchIsNumeric(value)

  const handleComplete = value => {
    setStep(CARD_ASSIGN_PROCESS_LIST.CARD_REGISTER)
  }

  const handleResendCode = () => {}

  return (
    <Stack>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          my: 4
        }}
      >
        <img className="animate__animated animate__pulse" src={mail} width="25%" alt="Sent Mail" />
      </Box>
      <Typography variant="h4" color="textPrimary" align="center">
        Verificación de Cuenta
      </Typography>

      <Typography
        paragraph
        sx={{ mb: 4, mt: 2 }}
        align="center"
        variant="body2"
        color={'text.secondary'}
        whiteSpace="pre-line"
      >
        Enviamos un correo electrónico a {user?.email || '-'} con el código de verificacion de tu cuenta, ingrese el
        código en el cuadro a continuación para verificar su cuenta.
      </Typography>
      <MuiOtpInput
        length={6}
        value={otp}
        onComplete={handleComplete}
        onChange={handleChange}
        validateChar={validateChar}
        sx={{ gap: { xs: 1.5, sm: 2, md: 3 } }}
        TextFieldsProps={{ placeholder: '-', error: isErrorValidatingCode, disabled: isValidatingCode }}
      />
      {Boolean(isErrorValidatingCode) && (
        <Box mt={1}>
          <Typography variant={'caption'} color={'error'}>
            Código incorrecto
          </Typography>
        </Box>
      )}
      <Box>
        <Divider sx={{ my: 4 }}>
          <Stack direction={'row'} spacing={1} justifyContent={'center'}>
            {isSendingCode ? (
              <CircularProgress wid sx={{ mx: 3 }} />
            ) : (
              <>
                <Typography variant={'body2'}>¿No tengo un código?</Typography>
                <Link underline={'hover'} sx={{ cursor: 'pointer' }} onClick={handleResendCode}>
                  <Typography variant={'body2'} color={'primary'}>
                    Reenviar código
                  </Typography>
                </Link>
              </>
            )}
          </Stack>
        </Divider>
      </Box>
      <Button
        variant={'outlined'}
        color={'inherit'}
        onClick={() => {
          setStep(CARD_ASSIGN_PROCESS_LIST.USER_REGISTER)
        }}
      >
        Cancelar
      </Button>
    </Stack>
  )
}
