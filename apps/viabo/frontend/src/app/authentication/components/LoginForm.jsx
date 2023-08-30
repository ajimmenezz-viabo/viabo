import { useEffect } from 'react'

import { LoadingButton } from '@mui/lab'
import { AlertTitle, InputLabel, Link, Stack, Typography } from '@mui/material'
import { useFormik } from 'formik'
import { Link as RouterLink } from 'react-router-dom'
import * as Yup from 'yup'

import { useSignIn } from '@/app/authentication/hooks'
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
      <Stack spacing={3} p={4} justifyContent={'center'} height={1}>
        <Typography color={'primary'} align="center" component={'h1'} variant="h3">
          Aquí comienza tu agilidad en pagos.
        </Typography>

        <Typography variant="h6" align="center">
          ¡Es tiempo de transformar tu negocio!
        </Typography>
        {error && (
          <AlertWithFocus listenElement={error} sx={{ mt: 3, textAlign: 'initial' }} severity={error?.code}>
            <AlertTitle sx={{ textAlign: 'initial' }}>Inicio de Sesión</AlertTitle>
            {error?.message}
          </AlertWithFocus>
        )}
        <FormProvider formik={formik}>
          <Stack spacing={2} flex={1}>
            <Stack spacing={1}>
              <InputLabel>Email</InputLabel>
              <RFTextField
                autoFocus
                disabled={loading}
                name={'email'}
                placeholder={'usuario@dominio.com'}
                type={'email'}
                fullWidth
                InputLabelProps={{
                  shrink: true
                }}
              />
            </Stack>

            <Stack spacing={1}>
              <InputLabel>Contraseña</InputLabel>
              <RFPasswordField
                InputLabelProps={{
                  shrink: true
                }}
                disabled={loading}
                name="password"
                placeholder={'********'}
                fullWidth
              />
            </Stack>

            <Stack pt={1}>
              <LoadingButton
                loading={loading}
                variant="contained"
                color="primary"
                fullWidth
                type="submit"
                size={'large'}
                disabled={isSubmitting}
              >
                Accesar a mi cuenta
              </LoadingButton>
            </Stack>

            <Typography variant="body2" fontWeight={600} align="center" sx={{ color: 'text.secondary' }}>
              ¿No tienes una cuenta? &nbsp;
              <Link color="primary" component={RouterLink} to={'/registro'}>
                Inscribete.
              </Link>
            </Typography>
          </Stack>
        </FormProvider>
      </Stack>
    </MotionViewport>
  )
}
