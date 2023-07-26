import { Scrollbar } from '@/shared/components/scroll'
import { FormProvider, MaskedInput, RFSelect, RFTextField } from '@/shared/components/form'
import { FieldArray, useFormik } from 'formik'
import { Avatar, Box, Button, Chip, Divider, Stack, Typography } from '@mui/material'
import * as Yup from 'yup'
import { Add, Delete, Send } from '@mui/icons-material'
import { useEffect, useRef, useState } from 'react'
import { LoadingButton } from '@mui/lab'
import { CardTransactionsAdapter } from '@/app/business/cards/adapters'
import { useTransactionCard } from '@/app/business/cards/hooks'
import { useCommerceDetailsCard } from '@/app/business/cards/store'
import { stringAvatar } from '@theme/utils'

export function TransactionForm({
  cards,
  balance,
  setCurrentBalance,
  insufficient,
  cardOriginId,
  setOpen,
  isBinCard,
  setTransactionLoading
}) {
  const arrayHelpersRef = useRef(null)

  const [cardsToSelect, setCardsToSelect] = useState(cards)

  const { transaction: transactionCard, isLoading: isSending } = useTransactionCard()

  const selectedCards = useCommerceDetailsCard(state => state?.selectedCards)

  useEffect(() => {
    if (selectedCards && isBinCard) {
      const filterCards = selectedCards?.map(card => ({ ...card, isDisabled: true }))
      setCardsToSelect(filterCards)
    }
  }, [selectedCards, isBinCard])

  const RegisterSchema = Yup.object().shape({
    transactions: Yup.array().of(
      Yup.object().shape({
        amount: Yup.string().required('La cantidad es requerida'),
        card: Yup.object().nullable().required('La tarjeta es requerida')
      })
    )
  })
  const formik = useFormik({
    initialValues: {
      transactions: (selectedCards?.length > 0 &&
        isBinCard &&
        selectedCards?.map(card => ({
          id: Math.random(),
          card: { value: card?.value, label: card?.label, ...card },
          amount: '',
          concept: ''
        }))) || [
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
      const dataAdapted = CardTransactionsAdapter(cardOriginId, values)
      console.log(dataAdapted)
      setTransactionLoading(true)
      transactionCard(dataAdapted, {
        onSuccess: () => {
          setSubmitting(false)
          setOpen(false)
          setTransactionLoading(false)
        },
        onError: () => {
          setSubmitting(false)
          setTransactionLoading(false)
        }
      })
    }
  })

  const { isSubmitting, setFieldValue, values, setSubmitting } = formik

  const loading = isSubmitting || isSending

  return (
    <>
      <Scrollbar containerProps={{ sx: { flexGrow: 0, height: 'auto' } }}>
        <FormProvider formik={formik}>
          <Box sx={{ p: 3 }}>
            <Stack spacing={2} direction={{ xs: 'column-reverse', md: 'row' }} alignItems={'center'} mb={3}>
              <Typography variant="subtitle1" sx={{ color: 'text.disabled' }}>
                Transacciones:
              </Typography>
              <Stack spacing={2} justifyContent="flex-end" direction={{ xs: 'column', md: 'row' }} sx={{ width: 1 }} />
              {!isBinCard && (
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
              )}
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

                      return (
                        <Stack key={item.id} alignItems="flex-end" spacing={1.5}>
                          {item?.card?.assignUser?.name && (
                            <Chip
                              avatar={<Avatar {...stringAvatar(item?.card?.assignUser?.name ?? '')} />}
                              label={item?.card?.assignUser?.name}
                            />
                          )}

                          <Stack
                            direction={{ xs: 'column', md: 'row' }}
                            spacing={2}
                            sx={{ width: 1 }}
                            alignItems={'flex-start'}
                          >
                            <Typography variant={'overline'} color={'text.disabled'}>
                              {index + 1}
                            </Typography>
                            <RFSelect
                              name={card}
                              disabled={loading || isBinCard}
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
                              sx={{ width: { xs: 1, lg: 0.6 } }}
                            />
                            <RFTextField
                              sx={{ width: { xs: 1, lg: 0.4 } }}
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
                          {index !== 0 && !isBinCard && (
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
