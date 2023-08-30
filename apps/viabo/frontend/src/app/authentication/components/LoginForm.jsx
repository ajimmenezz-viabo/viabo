import { useEffect } from 'react'

import { LoadingButton } from '@mui/lab'
import { AlertTitle, InputLabel, Link, Stack, Typography } from '@mui/material'
import { useFormik } from 'formik'
import { m } from 'framer-motion'
import { Link as RouterLink } from 'react-router-dom'
import * as Yup from 'yup'

import { useSignIn } from '@/app/authentication/hooks'
import { AlertWithFocus } from '@/shared/components/alerts'
import { MotionViewport, varFade } from '@/shared/components/animate'
import { FormProvider, RFPasswordField, RFTextField, TypewriterTypography } from '@/shared/components/form'

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
        <Stack>
          <m.div variants={varFade().inRight}>
            <Typography
              align="center"
              variant="h3"
              sx={{
                color: 'primary.main',
                fontWeight: 'fontWeightMedium'
              }}
            >
              Aquí Comienza
            </Typography>
          </m.div>

          <m.div variants={varFade().inRight}>
            <Typography
              align="center"
              variant="h3"
              sx={{
                color: 'primary.light',
                fontWeight: 'fontWeightMedium'
              }}
            >
              tu agilidad en pagos
            </Typography>
          </m.div>
        </Stack>

        <TypewriterTypography
          color={'common'}
          text={'¡Es tiempo de transformar tu negocio!'}
          variant="h6"
          align="center"
        />

        {error && (
          <AlertWithFocus listenElement={error} sx={{ mt: 3, textAlign: 'initial' }} severity={error?.code}>
            <AlertTitle sx={{ textAlign: 'initial' }}>Inicio de Sesión</AlertTitle>
            {error?.message}
          </AlertWithFocus>
        )}
        <m.div {...varFade().in}>
          <FormProvider formik={formik}>
            <Stack spacing={2} flex={1}>
              <Stack spacing={1}>
                <InputLabel>Email</InputLabel>
                <RFTextField
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
        </m.div>
      </Stack>
    </MotionViewport>
  )
}
