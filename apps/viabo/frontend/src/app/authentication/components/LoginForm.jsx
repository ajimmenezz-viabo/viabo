import React from 'react'
import { AlertTitle, Box, InputAdornment, Stack, Typography } from '@mui/material'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import { FormProvider, RFPasswordField, RFTextField } from '@/shared/components/form'
import { AccountCircleTwoTone } from '@mui/icons-material'
import { MotionViewport } from '@/shared/components/animate'
import { useSignIn } from '@/app/authentication/hooks'
import { LoadingButton } from '@mui/lab'
import { AlertWithFocus } from '@/shared/components/alerts'
import ViaboLogo from '@/shared/assets/img/logo-big.png'

export function LoginForm() {
  const { mutate: login, error, isError, isLoading } = useSignIn()
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
      const data = {
        username: values?.email,
        password: values?.password
      }
      login(data, {
        onSuccess: () => {
          setSubmitting(false)
          console.log('inicio de sesion correcto')
        },
        onError: () => {
          setSubmitting(false)
        }
      })
    }
  })

  const { isSubmitting } = formik

  const loading = isLoading || isSubmitting

  return (
    <MotionViewport>
      <Stack spacing={3} p={4} justifyContent={'center'}>
        <Box sx={{ textAlign: 'center', display: 'flex', justifyContent: 'center' }}>
          <img src={ViaboLogo} alt={'viabo-logo'} />
        </Box>

        <Typography variant="h5" align="center" gutterBottom>
          ¡Bienvenido!
        </Typography>
        {isError && (
          <AlertWithFocus listenElement={isError} sx={{ mt: 3, textAlign: 'initial' }} severity={error?.code}>
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
