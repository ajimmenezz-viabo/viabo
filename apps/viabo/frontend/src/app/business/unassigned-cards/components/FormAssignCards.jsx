import { useFormik } from 'formik'
import { Scrollbar } from '@/shared/components/scroll'
import { FormProvider, RFTextField } from '@/shared/components/form'
import { InputAdornment, Stack, Typography } from '@mui/material'
import { LoadingButton } from '@mui/lab'
import { AddCard, EmailOutlined } from '@mui/icons-material'
import { MuiTelInput } from 'mui-tel-input'
import * as Yup from 'yup'
import { AssignCardsAdapter } from '@/app/business/unassigned-cards/adapters'
import { useAssignCards } from '@/app/business/unassigned-cards/hooks'

export function FormAssignCards({ cards, onSuccess }) {
  const { mutate: assignCards, isLoading: isAssigning } = useAssignCards()

  const registerValidation = Yup.object({
    name: Yup.string().required('El nombre es requerido'),
    email: Yup.string().email('Ingresa un correo valido').required('El correo es requerido'),
    phone: Yup.string().test(
      'longitud',
      'El telefono es muy corto',
      value => !(value && value.replace(/[\s+]/g, '').length < 10)
    )
  })

  const formik = useFormik({
    initialValues: {
      name: '',
      phone: '',
      email: ''
    },
    validationSchema: registerValidation,
    onSubmit: values => {
      const data = AssignCardsAdapter(values, cards)
      assignCards(data, {
        onSuccess: () => {
          setSubmitting(false)
          onSuccess()
        },
        onError: () => {
          setSubmitting(false)
        }
      })
    }
  })

  const { errors, touched, isSubmitting, setFieldValue, values, setSubmitting } = formik

  const loading = isSubmitting || isAssigning

  return (
    <Scrollbar containerProps={{ sx: { flexGrow: 0, height: 'auto' } }}>
      <FormProvider formik={formik}>
        <Stack spacing={3} sx={{ p: 3 }}>
          <Stack>
            <Typography paragraph variant="overline" sx={{ color: 'text.disabled' }}>
              Nombre
            </Typography>
            <RFTextField name={'name'} required={true} placeholder={'Usuario'} disabled={loading} />
          </Stack>

          <Stack>
            <Typography paragraph variant="overline" sx={{ color: 'text.disabled' }}>
              Correo Electrónico
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
              Telefono
            </Typography>
            <MuiTelInput
              name="phone"
              fullWidth
              langOfCountryName="es"
              preferredCountries={['MX', 'US']}
              continents={['NA', 'SA']}
              value={values.phone || '+52'}
              disabled={loading}
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
              startIcon={<AddCard />}
            >
              Asignar
            </LoadingButton>
          </Stack>
        </Stack>
      </FormProvider>
    </Scrollbar>
  )
}
