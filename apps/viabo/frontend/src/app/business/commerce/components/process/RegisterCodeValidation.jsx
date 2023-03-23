import { useState } from 'react'
import { Box, Divider, Link, Stack, Typography } from '@mui/material'
import { MuiOtpInput } from 'mui-one-time-password-input'
import mail from '@/shared/assets/img/mail.svg'
import PropTypes from 'prop-types'
import { propTypesStore } from '@/app/business/commerce/store'
import { matchIsNumeric } from '@/shared/utils'
import { useSnackbar } from 'notistack'

RegisterCodeValidation.propTypes = {
  store: PropTypes.shape(propTypesStore)
}

function RegisterCodeValidation({ store }) {
  const { lastProcess } = store
  const { info } = lastProcess
  const { enqueueSnackbar } = useSnackbar()

  const [otp, setOtp] = useState('')

  const handleChange = newValue => {
    setOtp(newValue)
  }

  const validateChar = (value, index) => matchIsNumeric(value)

  const handleComplete = value => {
    setOtp('')
  }

  const handleResendCode = () => {
    enqueueSnackbar('Código Reenviado!', {
      variant: 'success'
    })
  }

  return (
    <>
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
        Enviamos un correo electrónico a {info?.email} con el código de verificacion de tu cuenta, ingrese el código en
        el cuadro a continuación para verificar su cuenta.
      </Typography>
      <MuiOtpInput
        length={6}
        value={otp}
        onComplete={handleComplete}
        onChange={handleChange}
        validateChar={validateChar}
        TextFieldsProps={{ placeholder: '-' }}
      />
      <Box mb={5}>
        <Divider sx={{ my: 4 }}>
          <Stack direction={'row'} spacing={1} justifyContent={'center'}>
            <Typography variant={'body2'}>¿No tengo un código?</Typography>
            <Link underline={'hover'} sx={{ cursor: 'pointer' }} onClick={handleResendCode}>
              <Typography variant={'body2'} color={'primary'}>
                Reenviar código
              </Typography>
            </Link>
          </Stack>
        </Divider>
      </Box>
    </>
  )
}

export default RegisterCodeValidation
