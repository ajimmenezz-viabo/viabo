import PropTypes from 'prop-types'

import { EmailOutlined, Link, Person } from '@mui/icons-material'
import { LoadingButton } from '@mui/lab'
import { InputAdornment, Stack, Typography } from '@mui/material'
import { useFormik } from 'formik'
import { MuiTelInput } from 'mui-tel-input'
import * as Yup from 'yup'

import { PaymentLinkAdapter } from '../../adapters'
import { useCreatePaymentLink } from '../../hooks'

import { FormProvider, RFTextField } from '@/shared/components/form'
import { Scrollbar } from '@/shared/components/scroll'

const MIN_AMOUNT = 1
const MAX_AMOUNT = 20000
const STEP = 100

export const PaymentLinkForm = ({ onSuccess }) => {
  const { mutate, isLoading } = useCreatePaymentLink()

  const registerValidation = Yup.object({
    amount: Yup.number()
      .min(MIN_AMOUNT, `El monto mínimo es ${MIN_AMOUNT}.00`)
      .max(MAX_AMOUNT, `El monto máximo es ${MAX_AMOUNT}.00`)
      .required('El monto es requerido'),
    name: Yup.string().required('El nombre es requerido'),
    email: Yup.string().email('Ingresa un correo valido').required('El correo es requerido'),
    phone: Yup.string()
      .test('longitud', 'El telefono es muy corto', value => !(value && value.replace(/[\s+]/g, '').length < 10))
      .required('El telefono es requerido')
  })

  const formik = useFormik({
    initialValues: {
      amount: 0,
      name: '',
      email: '',
      phone: '',
      concept: ''
    },
    validationSchema: registerValidation,
    onSubmit: (values, { setSubmitting }) => {
      const data = PaymentLinkAdapter(values)
      mutate(data, {
        onSuccess: () => {
          setSubmitting(false)
          onSuccess({ id: '123', amount: values.amount })
        },
        onError: () => {
          setSubmitting(false)
        }
      })
    }
  })

  const { errors, touched, isSubmitting, setFieldValue, values } = formik

  const loading = isSubmitting || isLoading

  const handleInputChange = event => {
    const value = event.target.value === '' ? '' : Number(event.target.value)
    setFieldValue('amount', value)
  }

  return (
    <Scrollbar containerProps={{ sx: { flexGrow: 0, height: 'auto' } }}>
      <FormProvider formik={formik}>
        <Stack spacing={3} sx={{ p: 3 }}>
          <Stack spacing={1}>
            <Typography m={0} paragraph variant="overline" sx={{ color: 'text.disabled' }}>
              Monto *
            </Typography>

            <RFTextField
              fullWidth
              placeholder={'$0.00'}
              name={'amount'}
              type="number"
              InputProps={{
                endAdornment: <InputAdornment position="end">MXN</InputAdornment>
              }}
              onChange={handleInputChange}
              InputLabelProps={{
                shrink: true
              }}
              inputProps={{ inputMode: 'numeric', min: MIN_AMOUNT, max: MAX_AMOUNT }}
            />
          </Stack>

          <Stack spacing={1}>
            <Typography m={0} paragraph variant="overline" sx={{ color: 'text.disabled' }}>
              Nombre Completo *
            </Typography>

            <RFTextField
              name={'name'}
              required={true}
              placeholder={'Usuario'}
              disabled={loading}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <Person />
                  </InputAdornment>
                )
              }}
            />
          </Stack>

          <Stack spacing={1}>
            <Typography m={0} paragraph variant="overline" sx={{ color: 'text.disabled' }}>
              Correo Electrónico *
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

          <Stack spacing={1}>
            <Typography m={0} paragraph variant="overline" sx={{ color: 'text.disabled' }}>
              Telefono *
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

          <Stack spacing={1}>
            <Typography m={0} paragraph variant="overline" sx={{ color: 'text.disabled' }}>
              Mensaje
            </Typography>

            <RFTextField name={'concept'} multiline disabled={loading} rows={2} placeholder={'Pago por ..'} />
          </Stack>

          <Stack sx={{ pt: 3 }}>
            <LoadingButton
              loading={isSubmitting}
              variant="contained"
              color="primary"
              fullWidth
              type="submit"
              startIcon={<Link />}
            >
              Generar
            </LoadingButton>
          </Stack>
        </Stack>
      </FormProvider>
    </Scrollbar>
  )
}

PaymentLinkForm.propTypes = {
  onSuccess: PropTypes.func
}
