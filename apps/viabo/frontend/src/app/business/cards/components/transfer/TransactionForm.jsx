import { Scrollbar } from '@/shared/components/scroll'
import { FormProvider, RFSelect, RFTextField } from '@/shared/components/form'
import { FieldArray, getIn, useFormik } from 'formik'
import { Box, Button, Divider, Stack, Typography } from '@mui/material'
import * as Yup from 'yup'
import { Add, Delete, Send } from '@mui/icons-material'
import { forwardRef, useRef, useState } from 'react'
import { IMaskInput } from 'react-imask'
import { LoadingButton } from '@mui/lab'
import { CardTransactionsAdapter } from '@/app/business/cards/adapters'
import { useTransactionCard } from '@/app/business/cards/hooks'

const MaskedInput = forwardRef((props, ref) => <IMaskInput overwrite {...props} inputRef={ref} />)

export function TransactionForm({ cards, balance, setCurrentBalance, insufficient, cardOrigin, setOpen }) {
  const arrayHelpersRef = useRef(null)

  const [cardsToSelect, setCardsToSelect] = useState(cards)

  const { mutate: transactionCard, isLoading: isSending } = useTransactionCard()

  const RegisterSchema = Yup.object().shape({
    items: Yup.array().of(
      Yup.object().shape({
        amount: Yup.string().required('La cantidad es requerida'),
        card: Yup.object().nullable().required('El material es requerido')
      })
    )
  })
  const formik = useFormik({
    initialValues: {
      transactions: [
        {
          id: 1 || '',
          card: null,
          amount: '',
          concept: ''
        }
      ]
    },
    validationSchema: RegisterSchema,
    onSubmit: values => {
      if (insufficient) {
        return setSubmitting(false)
      }
      const dataAdapted = CardTransactionsAdapter(cardOrigin, values)
      transactionCard(dataAdapted, {
        onSuccess: () => {
          setSubmitting(false)
          setOpen(false)
        },
        onError: () => {
          setSubmitting(false)
        }
      })
    }
  })

  const { errors, touched, isSubmitting, setFieldValue, values, setSubmitting } = formik

  const loading = isSubmitting || isSending

  return (
    <>
      <Scrollbar containerProps={{ sx: { flexGrow: 0, height: 'auto' } }}>
        <FormProvider formik={formik}>
          <Box sx={{ p: 3 }}>
            <Stack spacing={2} direction={{ xs: 'column-reverse', md: 'row' }} alignItems={'center'} mb={3}>
              <Typography variant="h6" sx={{ color: 'text.disabled' }}>
                Transacciones:
              </Typography>
              <Stack spacing={2} justifyContent="flex-end" direction={{ xs: 'column', md: 'row' }} sx={{ width: 1 }} />
              <Button
                type="button"
                size="small"
                variant={'outlined'}
                startIcon={<Add />}
                disabled={loading}
                onClick={() =>
                  arrayHelpersRef.current.push({
                    id: Math.random(),
                    card: null,
                    amount: '',
                    concept: ''
                  })
                }
                sx={{ flexShrink: 0 }}
              >
                Nueva
              </Button>
            </Stack>

            <FieldArray
              name="transactions"
              render={arrayHelpers => {
                arrayHelpersRef.current = arrayHelpers
                return (
                  <Stack divider={<Divider flexItem sx={{ borderStyle: 'dashed' }} />} spacing={3}>
                    {values?.transactions.map((item, index) => {
                      const card = `transactions[${index}].card`
                      const amount = `transactions[${index}].amount`
                      const concept = `transactions[${index}].concept`
                      const touchedUnity = getIn(touched, concept)
                      const errorUnity = getIn(errors, concept)

                      return (
                        <Stack key={item.id} alignItems="flex-end" spacing={1.5}>
                          <Stack direction={{ xs: 'column', md: 'row' }} spacing={2} sx={{ width: 1 }}>
                            <RFSelect
                              name={card}
                              disabled={loading}
                              textFieldParams={{
                                placeholder: 'Seleccionar ...',
                                label: 'Tarjeta',
                                required: true,
                                size: 'small'
                              }}
                              options={cardsToSelect || []}
                              onChange={(e, value) => {
                                const filterCards = cardsToSelect?.map(card => {
                                  if (!value?.value && card.value === item?.card?.value) {
                                    return { ...card, isDisabled: false }
                                  }
                                  if (card.value === value?.value) {
                                    return { ...card, isDisabled: true }
                                  }

                                  if (card.value === item?.card?.value) {
                                    return { ...card, isDisabled: false }
                                  }
                                  return card
                                })

                                setCardsToSelect(filterCards)
                                setFieldValue(card, value)
                              }}
                              sx={{ width: 0.6 }}
                            />
                            <RFTextField
                              sx={{ width: 0.4 }}
                              size={'small'}
                              name={amount}
                              required={true}
                              label={'Cantidad'}
                              placeholder={'0.00'}
                              disabled={loading}
                              autoComplete={'off'}
                              InputProps={{
                                startAdornment: <span style={{ marginRight: '5px' }}>$</span>,
                                inputComponent: MaskedInput,
                                inputProps: {
                                  mask: Number,
                                  radix: '.',
                                  thousandsSeparator: ',',
                                  padFractionalZeros: true,
                                  min: 0,
                                  max: 50000,
                                  scale: 2,
                                  value: item.amount,
                                  onAccept: value => {
                                    setCurrentBalance(
                                      (
                                        parseFloat(balance) - parseFloat(value === '' ? '0' : value.replace(/,/g, ''))
                                      ).toFixed(2)
                                    )
                                    setFieldValue(amount, value)
                                  }
                                }
                              }}
                            />
                          </Stack>
                          <Stack sx={{ width: 1 }}>
                            <RFTextField
                              name={concept}
                              multiline
                              disabled={loading}
                              rows={2}
                              label={'Concepto'}
                              placeholder={'Transferencia ..'}
                            />
                          </Stack>
                          {index !== 0 && (
                            <Button
                              size="small"
                              color="error"
                              disabled={loading}
                              startIcon={<Delete />}
                              onClick={() => arrayHelpers.remove(index)}
                            >
                              Borrar
                            </Button>
                          )}
                        </Stack>
                      )
                    })}
                  </Stack>
                )
              }}
            />
            <Divider sx={{ my: 3, borderStyle: 'dashed' }} />
            <Stack sx={{ px: 3, pt: 3 }}>
              <LoadingButton
                variant="contained"
                color="primary"
                loading={loading}
                fullWidth
                type="submit"
                startIcon={<Send />}
              >
                Enviar
              </LoadingButton>
            </Stack>
          </Box>
        </FormProvider>
      </Scrollbar>
    </>
  )
}
