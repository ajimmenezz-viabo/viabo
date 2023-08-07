import { CreditCard, EmailOutlined, Lock, Person, VpnKey } from '@mui/icons-material'
import { LoadingButton } from '@mui/lab'
import { InputAdornment, Link, Paper, Stack, Typography } from '@mui/material'
import { DatePicker } from '@mui/x-date-pickers'
import { format, isAfter, isValid, parse } from 'date-fns'
import { useFormik } from 'formik'
import { MuiTelInput } from 'mui-tel-input'
import { Link as RouterLink } from 'react-router-dom'
import * as Yup from 'yup'

import { FormProvider, MaskedInput, RFTextField } from '@/shared/components/form'
import { MasterCardLogo, VisaLogo } from '@/shared/components/images'

export const ChargePaymentForm = () => {
  const CardSchema = Yup.object().shape({
    cardNumber: Yup.string()
      .transform((value, originalValue) => originalValue.replace(/\s/g, '')) // Elimina los espacios en blanco
      .min(16, 'Debe contener 16 digitos')
      .required('El número de la tarjeta es requerido'),
    cvv: Yup.string().min(3, 'Debe contener 3 digitos').required('El CVV es requerido'),
    expiration: Yup.string()
      .required('La fecha de vencimiento es requerida')
      .test('is-future-date', 'La fecha  debe ser mayor que la fecha actual', function (value) {
        const date = parse(`01/${value}`, 'dd/MM/yyyy', new Date())
        const currentDate = new Date()
        const isDateValid = isValid(date)
        return isDateValid && isAfter(date, currentDate)
      }),
    name: Yup.string().required('El nombre es requerido'),
    email: Yup.string().email('Ingresa un correo valido').required('El correo es requerido'),
    phone: Yup.string()
      .test('longitud', 'El telefono es muy corto', value => !(value && value.replace(/[\s+]/g, '').length < 10))
      .required('El telefono es requerido')
  })

  const formik = useFormik({
    initialValues: {
      cardNumber: '',
      expiration: '',
      cvv: '',
      name: '',
      email: '',
      phone: ''
    },
    validationSchema: CardSchema,
    onSubmit: (values, { setSubmitting }) => {}
  })

  const { errors, touched, isSubmitting, setFieldValue, values } = formik

  const loading = isSubmitting

  return (
    <FormProvider formik={formik}>
      <Stack spacing={3}>
        <Stack direction={'row'} alignItems={'center'} spacing={1}>
          <Typography variant="h6">Forma de Pago</Typography>
          <Paper sx={{ px: 1 }}>
            <MasterCardLogo sx={{ width: 30, height: 30 }} />
          </Paper>
          <Paper sx={{ px: 1 }}>
            <VisaLogo sx={{ width: 30, height: 30 }} />
          </Paper>
        </Stack>

        <Stack spacing={1}>
          <Typography m={0} paragraph variant="overline" sx={{ color: 'text.disabled' }}>
            Número de Tarjeta *
          </Typography>
          <RFTextField
            autoFocus
            name={'cardNumber'}
            required={true}
            placeholder={'5254 2700 9717 8968'}
            fullWidth
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <CreditCard />
                </InputAdornment>
              ),
              inputComponent: MaskedInput,
              inputProps: {
                mask: '0000 0000 0000 0000',
                value: values.cardNumber,
                onAccept: value => {
                  setFieldValue('cardNumber', value)
                }
              }
            }}
            disabled={loading}
          />
        </Stack>
        <Stack direction={{ xs: 'column', lg: 'row' }} spacing={3} display={'flex'}>
          <Stack flex={1} spacing={1}>
            <Typography m={0} paragraph variant="overline" sx={{ color: 'text.disabled' }}>
              Vence
            </Typography>
            <DatePicker
              disabled={loading}
              views={['year', 'month']}
              name={'expiration'}
              value={new Date(values.expiration) ?? null}
              required={true}
              onChange={newValue => {
                const isDateValid = isValid(newValue)
                if (isDateValid) {
                  return formik.setFieldValue('expiration', format(newValue, 'MM/yyyy'))
                } else {
                  return formik.setFieldValue('expiration', '')
                }
              }}
              slotProps={{
                textField: {
                  fullWidth: true,
                  error: Boolean(touched.expiration && errors.expiration),
                  required: true,
                  helperText: touched.expiration && errors.expiration ? errors.expiration : ''
                }
              }}
              disablePast={true}
              minDate={new Date()}
              format="MM/yy"
            />
          </Stack>
          <Stack spacing={1}>
            <Typography m={0} paragraph variant="overline" sx={{ color: 'text.disabled' }}>
              CVV
            </Typography>
            <RFTextField
              name={'cvv'}
              required={true}
              placeholder={'123'}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <VpnKey />
                  </InputAdornment>
                ),
                inputComponent: MaskedInput,
                inputProps: {
                  mask: '000',
                  onAccept: value => {
                    setFieldValue('cvv', value)
                  },
                  value: values.cvv
                }
              }}
              disabled={loading}
            />
          </Stack>
        </Stack>

        <Stack spacing={1}>
          <Typography m={0} paragraph variant="overline" sx={{ color: 'text.disabled' }}>
            Tarjetahabiente *
          </Typography>

          <RFTextField
            name={'name'}
            required={true}
            placeholder={'Nombre del Titular de la Tarjeta'}
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
            defaultCountry="MX"
            preferredCountries={['MX', 'US']}
            continents={['NA', 'SA']}
            forceCallingCode
            value={values.phone}
            disabled={loading}
            required={true}
            onChange={(value, info) => {
              setFieldValue('phone', value)
            }}
            error={touched.phone && Boolean(errors.phone)}
            helperText={touched.phone && errors.phone}
          />
        </Stack>

        <Typography variant="body2" align="center" sx={{ color: 'text.secondary' }}>
          Al hacer clic en el botón de Pagar, accedo a los &nbsp;
          <Link component={RouterLink} underline="always" target="_blank" color="info.main">
            Terminos y condiciones
          </Link>
          &nbsp; & &nbsp;
          <Link component={RouterLink} underline="always" target="_blank" color="info.main">
            Acuerdos de privacidad
          </Link>
          .
        </Typography>

        <Stack>
          <LoadingButton
            loading={isSubmitting}
            variant="contained"
            color="primary"
            fullWidth
            type="submit"
            startIcon={<Lock />}
          >
            Pagar
          </LoadingButton>
        </Stack>
      </Stack>
    </FormProvider>
  )
}
