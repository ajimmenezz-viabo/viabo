import { FormProvider, RFSelect, RFTextField } from '@/shared/components/form'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import { InputAdornment, Stack, Typography } from '@mui/material'
import { AddCard, CreditCard, VpnKey } from '@mui/icons-material'
import React, { forwardRef } from 'react'
import { IMaskInput } from 'react-imask'
import { Scrollbar } from '@/shared/components/scroll'
import { LoadingButton } from '@mui/lab'
import { DatePicker } from '@mui/x-date-pickers'
import { format, isAfter, isValid, parse } from 'date-fns'
import { CreateCardAdapter, MANAGEMENT_STOCK_CARDS_KEYS } from '@/app/management/stock-cards/adapters'
import { useCreateNewStockCard } from '@/app/management/stock-cards/hooks'
import { useGetQueryData } from '@/shared/hooks'

const MaskedInput = forwardRef((props, ref) => <IMaskInput overwrite {...props} inputRef={ref} />)

const CARD_TYPES = [
  {
    value: '1',
    label: 'MASTER CARD'
  },
  {
    value: '2',
    label: 'CARNET'
  }
]

export function StockCardForm({ setOpen }) {
  const { mutate: createCard, isLoading: isCreatingCard } = useCreateNewStockCard()
  const commerces = useGetQueryData([MANAGEMENT_STOCK_CARDS_KEYS.AFFILIATED_COMMERCES_LIST]) || []
  const cardTypes = useGetQueryData([MANAGEMENT_STOCK_CARDS_KEYS.CARD_TYPES_LIST]) || []

  const CardSchema = Yup.object().shape({
    cardNumber: Yup.string()
      .transform((value, originalValue) => originalValue.replace(/\s/g, '')) // Elimina los espacios en blanco
      .min(16, 'Debe contener 16 digitos')
      .required('El número de la tarjeta es requerido'),
    cvv: Yup.string().min(3, 'Debe contener 3 digitos').required('El CVV es requerido'),
    cardType: Yup.object().nullable().required('El tipo de tarjeta es requerido'),
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
      cardType: (cardTypes && cardTypes.length > 0 && cardTypes[0]) || null,
      expiration: '',
      cvv: '',
      assigned: null
    },
    validationSchema: CardSchema,
    onSubmit: (values, { setSubmitting }) => {
      const cardAdapter = CreateCardAdapter(values)
      createCard(cardAdapter, {
        onSuccess: () => {
          setOpen(false)
          setSubmitting(false)
          resetForm()
        },
        onError: () => {
          setSubmitting(false)
        }
      })
    }
  })

  const { isSubmitting, values, setFieldValue, errors, handleSubmit, touched, resetForm } = formik

  const loading = isSubmitting || isCreatingCard

  return (
    <>
      <Scrollbar containerProps={{ sx: { flexGrow: 0, height: 'auto' } }}>
        <FormProvider formik={formik}>
          <Stack spacing={5} sx={{ p: 3 }}>
            <Stack spacing={3}>
              <Stack>
                <Typography paragraph variant="overline" sx={{ color: 'text.disabled' }}>
                  Tipo de Tarjeta
                </Typography>

                <RFSelect
                  name={'cardType'}
                  disableClearable
                  textFieldParams={{ placeholder: 'Seleccionar ...', required: true }}
                  options={cardTypes}
                  disabled={loading}
                />
              </Stack>

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
              <Stack>
                <Typography paragraph variant="overline" sx={{ color: 'text.disabled' }}>
                  Asignar:
                </Typography>
                <RFSelect
                  name={'assigned'}
                  textFieldParams={{ placeholder: 'Seleccionar ...', required: true }}
                  options={commerces}
                  disabled={loading}
                />
              </Stack>
            </Stack>
          </Stack>
        </FormProvider>
      </Scrollbar>
      <Stack sx={{ px: 3, pt: 3 }}>
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
          Crear
        </LoadingButton>
      </Stack>
    </>
  )
}
