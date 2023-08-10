import PropTypes from 'prop-types'

import { CreditCard, EmailOutlined, Lock, Person, VpnKey } from '@mui/icons-material'
import { LoadingButton } from '@mui/lab'
import { InputAdornment, Link, Paper, Stack, Typography } from '@mui/material'
import { DatePicker } from '@mui/x-date-pickers'
import { format, isAfter, isValid, parse } from 'date-fns'
import { useFormik } from 'formik'
import { MuiTelInput } from 'mui-tel-input'
import { Link as RouterLink } from 'react-router-dom'
import * as Yup from 'yup'

import { PaymentByVirtualTerminalAdapter } from '../../adapters'
import { useGeneratePaymentByVirtualTerminal } from '../../hooks'
import { useTerminalDetails } from '../../store'

import { FormProvider, MaskedInput, RFTextField } from '@/shared/components/form'
import { MasterCardLogo, VisaLogo } from '@/shared/components/images'

const MIN_AMOUNT = 1
const MAX_AMOUNT = 100000

export const VirtualTerminalForm = ({ onSuccessTransaction }) => {
  const terminal = useTerminalDetails(state => state.terminal)

  const { mutate } = useGeneratePaymentByVirtualTerminal()

  const TerminalSchema = Yup.object().shape({
    amount: Yup.string().required('El monto es requerido'),
    concept: Yup.string().required('El concepto es requerido'),
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
      amount: '',
      cardNumber: '',
      expiration: '',
      cvv: '',
      name: '',
      email: '',
      phone: '',
      concept: ''
    },
    enableReinitialize: true,
    validationSchema: TerminalSchema,
    onSubmit: (values, { setSubmitting }) => {
      const data = PaymentByVirtualTerminalAdapter(terminal, values)
      mutate(data, {
        onSuccess: () => {
          setSubmitting(false)
          onSuccessTransaction()
        },
        onError: () => {
          setSubmitting(false)
        }
      })
    }
  })

  const { errors, touched, isSubmitting, setFieldValue, values } = formik

  const loading = isSubmitting

  return (
    <FormProvider formik={formik}>
      <Stack spacing={2} p={3}>
        <Stack direction={'row'} alignItems={'center'} spacing={1}>
          <Typography variant="subtitle1">Forma de Pago</Typography>
          <Paper sx={{ px: 1, backgroundColor: 'background.default' }}>
            <MasterCardLogo sx={{ width: 30, height: 30 }} />
          </Paper>
          <Paper sx={{ px: 1, backgroundColor: 'background.default' }}>
            <VisaLogo sx={{ width: 30, height: 30 }} />
          </Paper>
        </Stack>
        <Stack spacing={1}>
          <Typography m={0} paragraph variant="overline" sx={{ color: 'text.disabled' }}>
            Monto *
          </Typography>

          <RFTextField
            fullWidth
            name={'amount'}
            required={true}
            placeholder={'0.00'}
            disabled={loading}
            size={'small'}
            autoComplete={'off'}
            InputProps={{
              startAdornment: <span style={{ marginRight: '5px' }}>$</span>,
              endAdornment: <InputAdornment position="end">MXN</InputAdornment>,
              inputComponent: MaskedInput,
              inputProps: {
                mask: Number,
                radix: '.',
                thousandsSeparator: ',',
                padFractionalZeros: true,
                min: MIN_AMOUNT,
                max: MAX_AMOUNT,
                scale: 2,
                value: values.amount,
                onAccept: value => {
                  setFieldValue('amount', value)
                }
              }
            }}
          />
        </Stack>

        <Stack spacing={1}>
          <Typography m={0} paragraph variant="overline" sx={{ color: 'text.disabled' }}>
            Concepto *
          </Typography>

          <RFTextField
            size={'small'}
            name={'concept'}
            multiline
            disabled={loading}
            rows={2}
            placeholder={'Pago por ..'}
          />
        </Stack>

        <Stack spacing={1}>
          <Typography m={0} paragraph variant="overline" sx={{ color: 'text.disabled' }}>
            Número de Tarjeta *
          </Typography>
          <RFTextField
            autoFocus
            name={'cardNumber'}
            required={true}
            size={'small'}
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
              Vence *
            </Typography>
            <DatePicker
              disabled={loading}
              size={'small'}
              views={['year', 'month']}
              name={'expiration'}
              value={values?.expiration ? new Date(values.expiration) : null}
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
                  size: 'small',
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
              CVV *
            </Typography>
            <RFTextField
              name={'cvv'}
              required={true}
              placeholder={'123'}
              size={'small'}
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
            size={'small'}
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
            size={'small'}
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
            size={'small'}
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

VirtualTerminalForm.propTypes = {
  onSuccessTransaction: PropTypes.func
}
