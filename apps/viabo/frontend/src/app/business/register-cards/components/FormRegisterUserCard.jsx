import { InputAdornment, Stack, Typography } from '@mui/material'
import { FormProvider, RFTextField } from '@/shared/components/form'
import { EmailOutlined, VerifiedUser } from '@mui/icons-material'
import { MuiTelInput } from 'mui-tel-input'
import { LoadingButton } from '@mui/lab'
import * as Yup from 'yup'
import { useFormik } from 'formik'
import { Scrollbar } from '@/shared/components/scroll'
import { useCardUserAssign } from '@/app/business/register-cards/store'
import { CARD_ASSIGN_PROCESS_LIST } from '@/app/business/register-cards/services'

export default function FormRegisterUserCard() {
  const setStep = useCardUserAssign(state => state.setStepAssignRegister)
  const setUser = useCardUserAssign(state => state.setUser)

  const registerValidation = Yup.object({
    name: Yup.string().required('El nombre es requerido'),
    email: Yup.string().email('Ingresa un correo valido').required('El correo es requerido'),
    phone: Yup.string()
      .test('longitud', 'El telefono es muy corto', value => !(value && value.replace(/[\s+]/g, '').length < 10))
      .required('El telefono es requerido')
  })

  const formik = useFormik({
    initialValues: {
      name: '',
      phone: '',
      email: ''
    },
    validationSchema: registerValidation,
    onSubmit: values => {
      setUser(values)
      setStep(CARD_ASSIGN_PROCESS_LIST.USER_VALIDATION)
    }
  })

  const { errors, touched, isSubmitting, setFieldValue, values, setSubmitting } = formik

  const loading = isSubmitting

  return (
    <Stack
      sx={{
        display: 'flex',
        overflow: 'hidden'
      }}
    >
      <Stack direction="column" width={1} spacing={1}>
        <Typography variant="h4" color="textPrimary" align="center">
          Registrar Tarjeta
        </Typography>
        <Typography paragraph align="center" variant="body1" color={'text.secondary'} whiteSpace="pre-line">
          Ingrese la información del usuario para iniciar con el proceso de asociación de su tarjeta.
        </Typography>
      </Stack>
      <Scrollbar containerProps={{ sx: { flexGrow: 0, height: 'auto' } }}>
        <FormProvider formik={formik}>
          <Stack spacing={2} sx={{ p: 3 }}>
            <Stack>
              <Typography paragraph variant="overline" sx={{ color: 'text.disabled' }}>
                Nombre Completo*
              </Typography>
              <RFTextField name={'name'} required={true} placeholder={'Usuario'} disabled={loading} />
            </Stack>

            <Stack>
              <Typography paragraph variant="overline" sx={{ color: 'text.disabled' }}>
                Correo Electrónico*
              </Typography>
              <RFTextField
                name={'email'}
                required={true}
                placeholder={'usuario@dominio.com'}
                disabled={loading}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <EmailOutlined />
                    </InputAdornment>
                  )
                }}
              />
            </Stack>

            <Stack>
              <Typography paragraph variant="overline" sx={{ color: 'text.disabled' }}>
                Telefono*
              </Typography>
              <MuiTelInput
                name="phone"
                fullWidth
                langOfCountryName="es"
                preferredCountries={['MX', 'US']}
                continents={['NA', 'SA']}
                value={values.phone || '+52'}
                disabled={loading}
                required={true}
                onChange={(value, info) => {
                  setFieldValue('phone', value)
                }}
                error={touched.phone && Boolean(errors.phone)}
                helperText={touched.phone && errors.phone}
              />
            </Stack>

            <Stack sx={{ pt: 3 }}>
              <LoadingButton
                loading={isSubmitting}
                variant="contained"
                color="primary"
                fullWidth
                type="submit"
                startIcon={<VerifiedUser />}
              >
                Registrar
              </LoadingButton>
            </Stack>
          </Stack>
        </FormProvider>
      </Scrollbar>
    </Stack>
  )
}
