import { Button, InputAdornment, Stack, Typography } from '@mui/material'
import { Scrollbar } from '@/shared/components/scroll'
import { FormProvider, RFTextField } from '@/shared/components/form'
import { AddCard, CreditCard, VpnKey } from '@mui/icons-material'
import { DatePicker } from '@mui/x-date-pickers'
import { format, isAfter, isValid, parse } from 'date-fns'
import * as Yup from 'yup'
import { useFormik } from 'formik'
import { forwardRef } from 'react'
import { IMaskInput } from 'react-imask'
import { LoadingButton } from '@mui/lab'
import { CARD_ASSIGN_PROCESS_LIST } from '@/app/business/register-cards/services'
import { useCardUserAssign } from '@/app/business/register-cards/store'
import { useAssignCardToDemoUser } from '@/app/business/register-cards/hooks'
import { AssignCardDemoUserAdapter } from '@/app/business/register-cards/adapters'

const MaskedInput = forwardRef((props, ref) => <IMaskInput overwrite {...props} inputRef={ref} />)

export default function FormCardRegister() {
  const setStep = useCardUserAssign(state => state.setStepAssignRegister)
  const setCard = useCardUserAssign(state => state.setCard)
  const { mutate: assignCard, isLoading: isAssigningCard } = useAssignCardToDemoUser()

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
      })
  })

  const formik = useFormik({
    initialValues: {
      cardNumber: '',
      expiration: '',
      cvv: ''
    },
    validationSchema: CardSchema,
    onSubmit: (values, { setSubmitting }) => {
      const data = AssignCardDemoUserAdapter(values)
      assignCard(data, {
        onSuccess: () => {
          setSubmitting(false)
          setCard(values)
          setStep(CARD_ASSIGN_PROCESS_LIST.CARD_ASSIGNED)
        },
        onError: () => {
          setSubmitting(false)
        }
      })
    }
  })

  const { isSubmitting, values, setFieldValue, errors, handleSubmit, touched, resetForm, setSubmitting } = formik

  const loading = isSubmitting || isAssigningCard

  return (
    <Stack
      sx={{
        display: 'flex',
        overflow: 'hidden',
        mb: 3
      }}
    >
      <Stack direction="column" width={1} spacing={1}>
        <Typography variant="h4" color="textPrimary" align="center">
          Registrar Tarjeta
        </Typography>
        <Typography paragraph align="center" variant="body1" color={'text.secondary'} whiteSpace="pre-line">
          Ingrese la información de la tarjeta para asociarla a su cuenta.
        </Typography>
      </Stack>
      <Scrollbar containerProps={{ sx: { flexGrow: 0, height: 'auto' } }}>
        <FormProvider formik={formik}>
          <Stack spacing={2} p={3}>
            <Stack>
              <Typography paragraph variant="overline" sx={{ color: 'text.disabled' }}>
                Número de Tarjeta
              </Typography>
              <RFTextField
                autoFocus
                name={'cardNumber'}
                required={true}
                placeholder={'5254 2700 9717 8968'}
                fullWidth
                size={'small'}
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
              <Stack sx={{ width: { xs: '100%', lg: '40%' } }}>
                <Typography paragraph variant="overline" sx={{ color: 'text.disabled' }}>
                  CVV
                </Typography>
                <RFTextField
                  name={'cvv'}
                  required={true}
                  placeholder={'123'}
                  size="small"
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
              <Stack>
                <Typography paragraph variant="overline" sx={{ color: 'text.disabled' }}>
                  Vence
                </Typography>
                <DatePicker
                  disabled={loading}
                  views={['year', 'month']}
                  size="small"
                  name={'expiration'}
                  value={new Date(values.expiration) ?? null}
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
                  format="MM/yy"
                />
              </Stack>
            </Stack>
          </Stack>
        </FormProvider>
      </Scrollbar>
      <Stack spacing={3} p={3}>
        <LoadingButton
          loading={loading}
          variant="contained"
          color="primary"
          fullWidth
          type="submit"
          onClick={handleSubmit}
          disabled={loading}
          startIcon={<AddCard />}
        >
          Asociar
        </LoadingButton>
        <Button
          variant={'outlined'}
          color={'inherit'}
          onClick={() => {
            setStep(CARD_ASSIGN_PROCESS_LIST.USER_REGISTER)
          }}
        >
          Cancelar
        </Button>
      </Stack>
    </Stack>
  )
}
