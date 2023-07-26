import { useEffect } from 'react'

import { AccountCircleTwoTone } from '@mui/icons-material'
import { LoadingButton } from '@mui/lab'
import { AlertTitle, Box, InputAdornment, Stack, Typography } from '@mui/material'
import { useFormik } from 'formik'
import * as Yup from 'yup'

import { useSignIn } from '@/app/authentication/hooks'
import ViaboLogo from '@/shared/assets/img/logo-big.png'
import { AlertWithFocus } from '@/shared/components/alerts'
import { MotionViewport } from '@/shared/components/animate'
import { FormProvider, RFPasswordField, RFTextField } from '@/shared/components/form'

export function LoginForm() {
  const { mutate: login, error, isError, isLoading, isSuccess, setCustomError } = useSignIn()
  const LoginSchema = Yup.object().shape({
    email: Yup.string().email('Ingrese un correo valido').required('El correo es requerido'),
    password: Yup.string().required('La contraseña es requerida')
  })

  const formik = useFormik({
    initialValues: {
      email: '',
      password: ''
    },
    validationSchema: LoginSchema,
    onSubmit: (values, { setSubmitting }) => {
      setCustomError(null)
      const data = {
        username: values?.email,
        password: values?.password
      }
      login(data)
    }
  })

  const { isSubmitting, setSubmitting } = formik

  const loading = isLoading || isSubmitting

  useEffect(() => {
    if (isSuccess || isError) {
      setSubmitting(false)
    }
  }, [isError, isSuccess])

  return (
    <MotionViewport>
      <Stack spacing={3} p={4} justifyContent={'center'}>
        <Box sx={{ textAlign: 'center', display: 'flex', justifyContent: 'center' }}>
          <img src={ViaboLogo} alt={'viabo-logo'} />
        </Box>

        <Typography variant="h5" align="center" gutterBottom>
          ¡Bienvenido!
        </Typography>
        {error && (
          <AlertWithFocus listenElement={error} sx={{ mt: 3, textAlign: 'initial' }} severity={error?.code}>
            <AlertTitle sx={{ textAlign: 'initial' }}>Inicio de Sesión</AlertTitle>
            {error?.message}
          </AlertWithFocus>
        )}
        <FormProvider formik={formik}>
          <Stack spacing={3}>
            <RFTextField
              autoFocus
              disabled={loading}
              name={'email'}
              label="Usuario"
              placeholder={'usuario@dominio.com'}
              type={'email'}
              fullWidth
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <AccountCircleTwoTone />
                  </InputAdornment>
                )
              }}
            />

            <RFPasswordField disabled={loading} name="password" label="Contraseña" placeholder={'********'} fullWidth />

            <LoadingButton
              loading={loading}
              variant="contained"
              color="primary"
              fullWidth
              type="submit"
              disabled={isSubmitting}
            >
              Iniciar Sesión
            </LoadingButton>
          </Stack>
        </FormProvider>
      </Stack>
    </MotionViewport>
  )
}
